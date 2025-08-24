"use client";

import { Button } from "@/components/ui/button";
import { formatCurrency } from "@/lib/utils";
import { Minus, Plus, Trash2, ShoppingBag, Palette } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { useCartStore } from "@/lib/store/cart-store";
import MaxWidthContainer from "@/components/ui/container";

export default function CartPage() {
  const { items, removeItem, updateQuantity, subtotal, totalItems } =
    useCartStore();
  const router = useRouter();

  if (items.length === 0) {
    return (
      <MaxWidthContainer className="text-center">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 py-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          <ShoppingBag className="h-12 w-12 sm:h-16 sm:w-16 text-muted-foreground" />
          <h1 className="text-xl sm:text-2xl font-bold text-background">
            Your cart is empty
          </h1>
          <p className="text-sm sm:text-base text-muted-foreground">
            Looks like you haven&apos;t added anything to your cart yet.
          </p>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <Button asChild className="mt-4 text-sm sm:text-base">
              <Link href="/store">Browse Products</Link>
            </Button>
          </motion.div>
        </motion.div>
      </MaxWidthContainer>
    );
  }

  // Calculate the total with all fees
  const totalWithFees = items.reduce((total, item) => {
    const itemPrice = item.price * item.quantity;
    const customizationFee = item.customization?.customizationFee || 0;
    const designServiceFee = item.customization?.designServiceFee || 0;
    return (
      total +
      itemPrice +
      customizationFee * item.quantity +
      designServiceFee * item.quantity
    );
  }, 0);

  return (
    <MaxWidthContainer className="container pt-16 sm:pt-20">
      <motion.h1
        className="text-2xl sm:text-3xl font-bold mb-6 sm:mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}>
        Shopping Cart
      </motion.h1>

      <div className="flex flex-col md:grid md:grid-cols-3 gap-6 sm:gap-8">
        <div className="md:col-span-2 space-y-4">
          <motion.div
            className="rounded-lg border border-border overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}>
            <div className="bg-card p-4 border-b border-border">
              <div className="grid grid-cols-12 gap-2 sm:gap-4 text-xs sm:text-sm font-medium">
                <div className="col-span-6">Product</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2 text-right">Total</div>
              </div>
            </div>

            <AnimatePresence>
              <div className="divide-y divide-border">
                {items.map((item, index) => {
                  const hasCustomization = item.customization?.isCustomized;
                  const hasDesignService = item.customization?.hasCustomDesign;
                  const cardColor = item.customization?.cardColor;

                  return (
                    <motion.div
                      key={item.id}
                      className="p-3 sm:p-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}>
                      <div className="grid grid-cols-12 gap-2 sm:gap-4 items-center">
                        <div className="col-span-12 sm:col-span-6 flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-4">
                          <div className="relative h-16 w-16 sm:h-20 sm:w-20 rounded overflow-hidden bg-muted">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h3 className="font-medium text-white text-sm sm:text-base">
                              {item.name}
                            </h3>
                            {hasCustomization && (
                              <div className="flex items-center mt-1 gap-1 flex-wrap">
                                <Badge
                                  variant="outline"
                                  className="text-xs py-0 h-5 text-white">
                                  <Palette className="h-3 w-3 mr-1" />
                                  Customized
                                </Badge>
                                {cardColor && (
                                  <Badge
                                    variant="outline"
                                    className="text-xs py-0 h-5 text-white">
                                    {cardColor}
                                  </Badge>
                                )}
                                {hasDesignService && (
                                  <Badge
                                    variant="outline"
                                    className="text-xs py-0 h-5 bg-background">
                                    Design Service
                                  </Badge>
                                )}
                              </div>
                            )}
                            <motion.button
                              onClick={() => removeItem(item.id)}
                              className="text-xs sm:text-sm text-muted-foreground hover:text-destructive flex items-center mt-1"
                              whileHover={{ scale: 1.05 }}
                              whileTap={{ scale: 0.95 }}>
                              <Trash2 className="h-3 w-3 mr-1" />
                              Remove
                            </motion.button>
                          </div>
                        </div>

                        <div className="col-span-4 sm:col-span-2 text-center text-white">
                          <div className="text-sm sm:text-base">
                            {formatCurrency(item.price)}
                          </div>
                          {hasCustomization && (
                            <div className="text-xs text-muted-foreground mt-1">
                              Includes customization
                            </div>
                          )}
                        </div>

                        <div className="col-span-4 sm:col-span-2 flex items-center justify-center text-foreground">
                          <div className="flex items-center">
                            <motion.div
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}>
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8 sm:h-9 sm:w-9 rounded-r-none"
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity - 1)
                                }
                                disabled={item.quantity <= 1}>
                                <Minus className="h-3 w-3" />
                              </Button>
                            </motion.div>
                            <div className="h-8 sm:h-9 w-10 sm:w-12 text-white flex items-center justify-center border-y border-input text-sm sm:text-base">
                              {item.quantity}
                            </div>
                            <motion.div
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}>
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-8 w-8 sm:h-9 sm:w-9 rounded-l-none"
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity + 1)
                                }>
                                <Plus className="h-3 w-3" />
                              </Button>
                            </motion.div>
                          </div>
                        </div>

                        <div className="col-span-4 sm:col-span-2 text-right font-medium text-white text-sm sm:text-base">
                          {formatCurrency(item.price * item.quantity)}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </AnimatePresence>
          </motion.div>
        </div>

        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}>
          <div className="rounded-lg border border-border overflow-hidden">
            <div className="bg-card p-4 border-b border-border">
              <h2 className="font-semibold text-base sm:text-lg">
                Order Summary
              </h2>
            </div>
            <div className="p-4 space-y-4">
              <div className="flex justify-between text-sm sm:text-base">
                <span className="text-muted-foreground">
                  Subtotal ({totalItems} items)
                </span>
                <span>{formatCurrency(subtotal)}</span>
              </div>

              {items.some((item) => item.customization?.isCustomized) && (
                <div className="flex justify-between text-sm sm:text-base">
                  <span className="text-muted-foreground">
                    Customization Fees
                  </span>
                  <span>
                    {formatCurrency(
                      items.reduce((total, item) => {
                        const customizationFee =
                          item.customization?.customizationFee || 0;
                        const designServiceFee =
                          item.customization?.designServiceFee || 0;
                        return (
                          total +
                          customizationFee * item.quantity +
                          designServiceFee * item.quantity
                        );
                      }, 0)
                    )}
                  </span>
                </div>
              )}

              <div className="flex justify-between text-sm sm:text-base">
                <span className="text-muted-foreground">Shipping</span>
                <span>Calculated at checkout</span>
              </div>
              <div className="border-t border-border pt-4 flex justify-between font-medium text-sm sm:text-base">
                <span>Total</span>
                <span>{formatCurrency(totalWithFees)}</span>
              </div>
              <motion.div
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}>
                <Button
                  className="w-full text-sm sm:text-base"
                  size="lg"
                  onClick={() => router.push("/checkout")}>
                  Proceed to Checkout
                </Button>
              </motion.div>
            </div>
          </div>

          <div className="rounded-lg border border-border p-4">
            <h3 className="font-medium mb-2 text-base sm:text-lg">
              Have a promo code?
            </h3>
            <div className="flex">
              <input
                type="text"
                placeholder="Enter code"
                className="flex-1 px-3 py-2 border border-input rounded-l-md bg-background text-sm sm:text-base"
              />
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}>
                <Button
                  variant="secondary"
                  className="rounded-l-none text-sm sm:text-base">
                  Apply
                </Button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </MaxWidthContainer>
  );
}
