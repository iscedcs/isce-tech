// import { PrismaClient } from "@prisma/client";
// import { db } from "../../lib/prisma";
// import { products } from "../../lib/products";
// import { v4 as uuidv4 } from "uuid";

// const prisma = new PrismaClient();

// async function main() {
//   await prisma.product.deleteMany();
//   console.log("Cleared existing products");

//   for (const product of products) {
//     const uniqueId = uuidv4();
//     await db.product.create({
//       data: {
//         id: uniqueId,
//         name: product.name,
//         description: product.description,
//         price: product.price,
//         deviceType: product.deviceType as
//           | "CARD"
//           | "WRISTBAND"
//           | "STICKER"
//           | "KEYCHAIN",
//         images: product.images,
//         features: product.features,
//         stock: product.stock ? 100 : 0,
//         isCustomizable: product.isCustomizable || false,
//         color: product.color || null,
//       },
//     });
//     console.log(`Seeded product: ${product.name} with ID: ${uniqueId}`);
//   }
// }

// main()
//   .catch((e) => {
//     console.error("Seeding error:", e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });
