"use client";
import { useState } from "react";
import AddToCartButton from "./add-to-cart-button";
import CardCustomization, { CardCustomizationData } from "./card-customization";

interface CardCustomizationWrapperProps {
  product: {
    id: string;
    name: string;
    price: number;
    images: string[];
    isCustomizable: boolean;
    color?: string;
    stock: number;
  };
}

export default function CardCustomizationWrapper({
  product,
}: CardCustomizationWrapperProps) {
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
