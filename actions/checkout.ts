// "use server";

// import { PrismaClient } from "@prisma/client";
// import { z } from "zod";
// import { checkoutFormSchema } from "@/lib/schemas";
// import { auth } from "@/auth";
// import { AUTH_API, URLS } from "@/lib/const";


// const DEVICE_TYPE_MAPPING: Record<string, string> = {
//   CARD: "6214bdef7dbcb",
//   WRISTBAND: "6214bdef6dbcb",
//   STICKER: "6214bdef5dbcb",
//   KEYCHAIN: "6214bdef4dbcb",
// };

// const prisma = new PrismaClient();

// export const submitCheckout = async (
//   formData: z.infer<typeof checkoutFormSchema>,
//   cartItems: Array<{
//     id: string;
//     name: string;
//     price: number;
//     image: string; 
//     quantity: number;
//     customization?: {
//       isCustomized: boolean;
//       hasCustomDesign?: boolean;
//       customizationFee?: number;
//       designServiceFee?: number;
//       cardColor?: string;
//     };
//   }>
// ) => {
//   const session = await auth();
//   if (!session?.user?.id) {
//     return { success: false, error: "User not authenticated" };
//   }

//    if (!session.user.accessToken) {
//     console.error("No accessToken found in session");
//     return { success: false, error: "Missing authentication token" };
//   }

//   const validatedFields = checkoutFormSchema.safeParse(formData);
//   if (!validatedFields.success) {
//     return { success: false, error: "Invalid form data" };
//   }

//   const {
//     firstName,
//     lastName,
//     email,
//     phone,
//     address,
//     city,
//     state,
//     deliveryMethod,
//     pickupLocation,
//     paymentMethod,
//   } = validatedFields.data;

//   try {
//     // Calculate totals
//     const totalWithCustomization = cartItems.reduce(
//       (total, item) =>
//         total +
//         item.price * item.quantity +
//         (item.customization?.customizationFee || 0) * item.quantity +
//         (item.customization?.designServiceFee || 0) * item.quantity,
//       0
//     );
//     const vatAmount = totalWithCustomization * 0.075; // 7.5% VAT
//     const deliveryPrice = deliveryMethod === "pickup" ? 0 : 5000; // Example delivery fee

//     // Validate product IDs and stock
//     for (const item of cartItems) {
//       const product = await prisma.product.findUnique({ where: { id: item.id } });
//       if (!product) {
//         return { success: false, error: `Product ${item.name} not found` };
//       }
//       if (product.stock < item.quantity) {
//         return { success: false, error: `Insufficient stock for ${item.name}` };
//       }
//     }


//     const firstProduct = await prisma.product.findUnique({
//         where: {id: cartItems[0].id},
//     })

//     const deviceType = firstProduct?.deviceType || "CARD";

//     // Create order
//     const order = await prisma.order.create({
//       data: {
//         userId: session.user.id,
//         totalAmount: totalWithCustomization + vatAmount + deliveryPrice,
//         vatAmount,
//         deliveryPrice,
//         deviceType,
//         orderItems: {
//           create: cartItems.map((item) => ({
//             productId: item.id,
//             quantity: item.quantity,
//             unitPrice: item.price,
//             customizationFee: item.customization?.customizationFee || 0,
//             designServiceFee: item.customization?.designServiceFee || 0,
//             cardColor: item.customization?.cardColor || null,
//           })),
//         },
//         shippingInfo: {
//           create: {
//             userId: session.user.id,
//             firstName,
//             lastName,
//             email,
//             phone,
//             address,
//             city,
//             state,
//             deliveryMethod,
//             pickupLocation: pickupLocation || null,
//           },
//         },
//       },
//       include: { orderItems: true, shippingInfo: true },
//     });

//     // Update product stock
//     for (const item of cartItems) {
//       await prisma.product.update({
//         where: { id: item.id },
//         data: { stock: { decrement: item.quantity } },
//       });
//     }
    
//     for (const item of cartItems){
//         const product = await prisma.product.findUnique({
//             where : {id: item.id},
//             select: {deviceType: true},
//         });

//         if(!product) {
//             console.error(`Product ${item.id} not found for isce auth integration`);
//             continue;
//         }

//         const payload = {
//         userId: session.user.id,
//         productId: item.id,
//         deviceType: DEVICE_TYPE_MAPPING[product.deviceType] || "6214bdef7dbcb",
//       };

//         const response = await fetch(
//             `${AUTH_API}${URLS.device.create}`,
//             {
//                 method: "POST",
//                 headers: {
//                 "Content-Type": "application/json",
//                 Authorization: `Bearer ${session.user.accessToken}`

//                 },
//                 body: JSON.stringify(payload),
//             }
//         );
//         if(!response.ok) {
//             console.error(
//           `Failed to create device in ISCE Auth for product ${item.id}: ${response.statusText}`
//         );
//         }
//     }

//     return { success: true, order };
//   } catch (error) {
//     console.error("Checkout error:", error);
//     return { success: false, error: "Failed to create order" };
//   } finally {
//     await prisma.$disconnect();
//   }
// };