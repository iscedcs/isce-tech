"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Check, Minus, Plus } from "lucide-react";
import { useCartStore } from "@/lib/store/cart-store";
import { Input } from "@/components/ui/input";
import { motion } from "framer-motion";
import type { CardCustomizationData } from "./card-customization";
import { toast } from "sonner";

interface AddToCartButtonProps {
  product: {
    id: string;
    name: string;
    price: number;
    images: string[];
    isCustomizable: boolean;
    color?: string;
    stock: number;
  };
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

  const handleAddToCart = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price, // Base price without fees
      image: product.images[0],
      quantity,
      customization: customizationData?.isCustomized
        ? {
            isCustomized: true,
            hasCustomDesign: customizationData.hasCustomDesign,
            customizationFee: customizationData.customizationFee,
            designServiceFee: customizationData.designServiceFee,
            cardColor: customizationData.cardColor,
          }
        : undefined,
    });

    // console.log("Toast should appear now");
    // toast.success("Added to cart", {
    //   duration: 2000, // Match the isAdded timeout
    // });

    toast.success(
      `Added ${quantity} ${product.name}${quantity > 1 ? "s" : ""} to cart!`,
      { duration: 2000 }
    );

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
            disabled={quantity <= 1}>
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
          exit={{ opacity: 0, height: 0 }}>
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
          disabled={product.stock === 0 || isAdded}>
          {isAdded ? (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="flex items-center">
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
