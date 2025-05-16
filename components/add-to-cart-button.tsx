"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Check, Minus, Plus } from "lucide-react";
import { useCartStore } from "@/lib/store/cart-store";
import type { Product } from "@/lib/products";
import type { CardCustomizationData } from "./card-customization";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";

interface AddToCartButtonProps {
  product: Product;
  customizationData?: CardCustomizationData | null;
}

export default function AddToCartButton({
  product,
  customizationData,
}: AddToCartButtonProps) {
  const [quantity, setQuantity] = useState(1);
  const [isAdded, setIsAdded] = useState(false);
  const { addItem } = useCartStore();

  // Disable customization for quantities greater than 1
  const isCustomizationDisabled = quantity > 1 && product.isCustomizable;

  // Calculate the customization fees
  const customizationFee = customizationData?.isCustomized ? 500000 : 0; // 5,000 NGN
  const designServiceFee =
    customizationData?.isCustomized && customizationData?.needsCustomDesign
      ? 500000
      : 0; // 5,000 NGN
  const totalPrice = product.price + customizationFee + designServiceFee;

  const handleAddToCart = () => {
    // Calculate the total price including customization
    const itemTotalPrice = product.price + customizationFee + designServiceFee;

    addItem({
      id: product.id,
      name: product.name,
      price: itemTotalPrice, // Include customization in the price
      image: product.images[0],
      quantity,
      customization: customizationData?.isCustomized
        ? {
            isCustomized: true,
            hasCustomDesign: customizationData.needsCustomDesign,
            customizationFee: customizationFee,
            designServiceFee: designServiceFee,
            cardColor: product.color || "",
          }
        : undefined,
    });

    setIsAdded(true);
    setTimeout(() => setIsAdded(false), 2000);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number.parseInt(e.target.value);
    if (!isNaN(value) && value > 0) {
      setQuantity(value);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex items-center text-foreground">
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button
            variant="outline"
            size="icon"
            onClick={decreaseQuantity}
            disabled={quantity <= 1}
          >
            <Minus className="h-4 w-4" />
          </Button>
        </motion.div>
        <Input
          type="number"
          min="1"
          value={quantity}
          onChange={handleQuantityChange}
          className="w-16 mx-2 text-center"
        />
        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
          <Button variant="outline" size="icon" onClick={increaseQuantity}>
            <Plus className="h-4 w-4" />
          </Button>
        </motion.div>
      </div>

      {isCustomizationDisabled && product.isCustomizable && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
        >
          <div className="text-sm text-amber-500">
            Note: Card customization is only available when ordering a single
            card.
          </div>
        </motion.div>
      )}

      <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
        <Button
          onClick={handleAddToCart}
          className="w-full"
          disabled={!product.inStock || isAdded}
        >
          {isAdded ? (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="flex items-center"
            >
              <Check className="mr-2 h-4 w-4" />
              Added to Cart
            </motion.div>
          ) : (
            <>
              <ShoppingCart className="mr-2 h-4 w-4" />
              Add to Cart
            </>
          )}
        </Button>
      </motion.div>
    </div>
  );
}
