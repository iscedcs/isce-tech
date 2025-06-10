"use server";

import { DeviceType, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getProducts({
  deviceType,
  searchQuery,
  sortBy,
  priceRange,
}: {
  deviceType: string;
  searchQuery: string;
  sortBy: string;
  priceRange: [number, number];
}) {
  try {
    const products = await prisma.product.findMany({
      where: {
        deviceType: deviceType !== "all" ? (deviceType as DeviceType) : undefined,
        OR: [
          { name: { contains: searchQuery, mode: "insensitive" } },
          { description: { contains: searchQuery, mode: "insensitive" } },
        ],
        price: { gte: priceRange[0], lte: priceRange[1] },
      },
      orderBy: sortBy === "price-low-high"
        ? { price: "asc" }
        : sortBy === "price-high-low"
        ? { price: "desc" }
        : sortBy === "name-a-z"
        ? { name: "asc" }
        : sortBy === "name-z-a"
        ? { name: "desc" }
        : undefined,
    });
    return { success: true, products };
  } catch (error) {
    console.error("Get products error:", error);
    return { success: false, error: "Failed to fetch products" };
  } finally {
    await prisma.$disconnect();
  }
}

export async function getProductById(id: string) {
  try {
    const product = await prisma.product.findUnique({ where: { id } });
    if (!product) {
      return { success: false, error: "Product not found" };
    }
    return { success: true, product };
  } catch (error) {
    console.error("Get product error:", error);
    return { success: false, error: "Failed to fetch product" };
  } finally {
    await prisma.$disconnect();
  }
}