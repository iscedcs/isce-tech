"use server";

import { db } from "@/lib/prisma";
import { DeviceType, Prisma, Product } from "@prisma/client";

export async function getProducts({
  deviceType,
  searchQuery,
  sortBy,
  priceRange,
  page = 1,
  pageSize = 12,
}: {
  deviceType: string;
  searchQuery: string;
  sortBy: string;
  priceRange: [number, number];
  page?: number;
  pageSize?: number;
}) {
  try {
    // console.log("getProducts called with:", {
    //   deviceType,
    //   searchQuery,
    //   sortBy,
    //   priceRange,
    //   page,
    //   pageSize,
    // }); // Debug

    let products: Product[];

    if (searchQuery) {
      products = await db.$queryRaw<Product[]>`
      SELECT * FROM "Product"
      WHERE search_vector @@ to_tsquery('english', ${searchQuery.replace(
        / /g,
        " & "
      )})
      AND price BETWEEN ${priceRange[0]} AND ${priceRange[1]}
      ${
        deviceType !== "all"
          ? Prisma.sql`AND "deviceType" = ${deviceType}`
          : Prisma.sql``
      }
      ORDER BY ${
        sortBy === "price-low-high"
          ? Prisma.sql`price ASC`
          : sortBy === "price-high-low"
            ? Prisma.sql`price DESC`
            : sortBy === "name-a-z"
              ? Prisma.sql`name ASC`
              : sortBy === "name-z-a"
                ? Prisma.sql`name DESC`
                : sortBy === "featured"
                  ? Prisma.sql`id ASC`
                  : Prisma.sql`name ASC`
      }
      LIMIT ${pageSize} OFFSET ${(page - 1) * pageSize}
      `;
    } else {
      products = await db.product.findMany({
        where: {
          deviceType:
            deviceType !== "all" ? (deviceType as DeviceType) : undefined,
          price: { gte: priceRange[0], lte: priceRange[1] },
          ...(sortBy === "featured" ? { featuredProducts: { some: {} } } : {}),
        },
        orderBy:
          sortBy === "price-low-high"
            ? { price: "asc" }
            : sortBy === "price-high-low"
              ? { price: "desc" }
              : sortBy === "name-a-z"
                ? { name: "asc" }
                : sortBy === "name-z-a"
                  ? { name: "desc" }
                  : sortBy === "featured"
                    ? { id: "asc" }
                    : undefined,
        take: pageSize,
        skip: (page - 1) * pageSize,
      });
    }

    const totalCount = await db.product.count({
      where: {
        deviceType:
          deviceType !== "all" ? (deviceType as DeviceType) : undefined,
        ...(searchQuery
          ? {
              OR: [
                { name: { contains: searchQuery, mode: "insensitive" } },
                { description: { contains: searchQuery, mode: "insensitive" } },
              ],
            }
          : {}),
        price: { gte: priceRange[0], lte: priceRange[1] },
        ...(sortBy === "featured" ? { featuredProducts: { some: {} } } : {}),
      },
    });

    // console.log(
    //   "Fetched products:",
    //   products.length,
    //   products.map((p) => ({ id: p.id, name: p.name }))
    // );

    return { success: true, products, totalCount };
  } catch (error) {
    console.error("Get products error:", error);
    return { success: false, error: "Failed to fetch products" };
  }
}

export async function getProductById(id: string) {
  try {
    const product = await db.product.findUnique({ where: { id } });
    if (!product) {
      return { success: false, error: "Product not found" };
    }
    return { success: true, product };
  } catch (error) {
    console.error("Get product error:", error);
    return { success: false, error: "Failed to fetch product" };
  } finally {
    await db.$disconnect();
  }
}
