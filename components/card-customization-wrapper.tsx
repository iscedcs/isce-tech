"use client";
import { Product } from "@/lib/products";
import { useState } from "react";
import CardCustomization, { CardCustomizationData } from "./card-customization";
import AddToCartButton from "./add-to-cart-button";

export default function CardCustomizationWrapper({
  product,
}: {
  product: Product;
}) {
  const [customizationData, setCustomizationData] =
    useState<CardCustomizationData | null>(null);

  const handleCustomizationChange = (data: CardCustomizationData) => {
    setCustomizationData(data);
  };

  return (
    <>
      <CardCustomization
        onCustomizationChange={handleCustomizationChange}
        productPrice={product.price}
        productColor={product.color || ""}
      />
      <AddToCartButton
        product={product}
        customizationData={customizationData}
      />
    </>
  );
}
