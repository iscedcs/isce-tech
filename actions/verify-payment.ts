"use server";
import { revalidatePath } from "next/cache";
import { db } from "@/lib/prisma";
import { verifyTransaction } from "./paystack";
import { auth } from "@/auth";

const DEVICE_TYPE_MAPPING = {
  CARD: "6214bdef7dbcb",
  WRISTBAND: "6214bdef6dbcb",
  STICKER: "6214bdef5dbcb",
  KEYCHAIN: "6214bdef4dbcb",
};

export async function verifyPayment(orderId: string, reference: string) {
  const session = await auth();

  if (!reference || !orderId) {
    console.error("Missing order ID or transaction reference");
    return { success: false, message: "Missing required parameters" };
  }

  try {
    const result = await verifyTransaction(reference);
    console.log("Verification result:", result);

    if (result.error) {
      console.error("Error verifying transaction:", result.error);
      await db.pendingOrder.delete({ where: { reference } });
      return { success: false, message: result.error };
    }

    const pendingOrder = await db.pendingOrder.findUnique({
      where: { reference },
    });

    if (!pendingOrder) {
      console.error("Pending order not found for reference:", reference);
      return { success: false, message: "Order not found" };
    }

    if (typeof pendingOrder.data !== "string") {
      console.error("Pending order data is not a string or is null");
      return { success: false, message: "Invalid order data" };
    }
    const orderData = JSON.parse(pendingOrder.data);

    // Create order in transaction
    const order = await db.$transaction(async (tx) => {
      const createdOrder = await tx.order.create({
        data: {
          id: orderId,
          userId: orderData.userId,
          totalAmount: orderData.totalAmount,
          vatAmount: orderData.vatAmount,
          deliveryPrice: orderData.deliveryPrice,
          deviceType: orderData.deviceType,
          status: "PAID",
          transactionId: reference,
          orderItems: {
            create: orderData.orderItems,
          },
          shippingInfo: {
            create: orderData.shippingInfo,
          },
        },
        include: { orderItems: true, shippingInfo: true },
      });

      // Update stock
      for (const item of orderData.orderItems) {
        await tx.product.update({
          where: { id: item.productId },
          data: { stock: { decrement: item.quantity } },
        });
      }

      return createdOrder;
    });

    const confirmOrder = await db.order.findUnique({
      where: { id: order.id },
      select: { id: true },
    });

    if (!confirmOrder) {
      console.error(`Order ${order.id} not found after creation`);
      return { success: false, message: "Order creation failed" };
    }

    // Call ISCE Auth
    const AUTH_API =
      process.env.NEXT_PUBLIC_LIVE_ISCEAUTH_BACKEND_URL ||
      "https://stingray-app-clk8t.ondigitalocean.app";
    const URLS = { device: { create: "/device/create" } };

    for (const item of orderData.orderItems) {
      const product = await db.product.findUnique({
        where: { id: item.productId },
        select: { deviceType: true, name: true },
      });

      if (!product) {
        console.error(
          `Product (ID: ${item.productId}) not found for ISCE Auth integration`
        );
        continue;
      }

      const payload = {
        userId: orderData.userId,
        productId: item.productId,
        deviceType: DEVICE_TYPE_MAPPING[product.deviceType] || "6214bdef7dbcb",
      };

      try {
        const response = await fetch(`${AUTH_API}${URLS.device.create}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${session?.user?.accessToken}`,
          },
          body: JSON.stringify(payload),
        });

        const logDetails = {
          status: response.status,
          body: await response.text(),
        };

        if (!response.ok) {
          console.error(
            `Failed to create device for product ${item.productId}:`,
            logDetails
          );
        } else {
          console.log(
            `Successfully created device for product ${item.productId}:`,
            logDetails
          );
        }
      } catch (error) {
        console.error(
          `Error sending request to ISCE Auth for product ${item.productId}:`,
          error
        );
      }
    }

    // Clean up pending order
    await db.pendingOrder.delete({ where: { reference } });

    revalidatePath(`/orders`);
    return {
      success: true,
      message: "Transaction verified",
      orderId: order.id,
    };
  } catch (error) {
    console.error("Error verifying payment:", error);
    return { success: false, message: "Error verifying transaction" };
  }
}
