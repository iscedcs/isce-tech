"use server";

import { z } from "zod";
import { db } from "@/lib/prisma";
import { auth } from "@/auth";
import { revalidatePath } from "next/cache";

const updateStatusSchema = z.object({
  orderId: z.string(),
  status: z.enum([
    "PENDING_PAYMENT",
    "PAID",
    "PENDING",
    "FAILED",
    "PROCESSING",
    "SHIPPED",
    "DELIVERED",
    "CANCELLED",
  ]),
});

export async function updateOrderStatus(formData: FormData) {
  //   const session = await auth();
  //   if (!session?.user || session.user.userType !== "ADMIN") {
  //     return { success: false, message: "Unauthorized" };
  //   }

  try {
    const validatedData = updateStatusSchema.parse({
      orderId: formData.get("orderId"),
      status: formData.get("status"),
    });

    const order = await db.order.update({
      where: { id: validatedData.orderId },
      data: { status: validatedData.status },
    });

    revalidatePath("/dashboard");
    revalidatePath(`/orders/${order.id}`);

    return {
      success: true,
      message: `Order status updated to ${order.status.replace("_", " ").toLowerCase()}`,
    };
  } catch (error) {
    console.error("Error updating order status:", error);
    if (error instanceof z.ZodError) {
      return { success: false, message: "Invalid input" };
    }
    return { success: false, message: "Failed to update order status" };
  }
}
