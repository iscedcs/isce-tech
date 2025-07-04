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
      <MaxWidthContainer className="text-center py-10 sm:py-12">
        <motion.div
          className="flex flex-col items-center mx-auto justify-center space-y-3 pt-20 sm:space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          <ShoppingBag className="h-12 w-12 sm:h-16 sm:w-16 text-muted-foreground" />
          <h1 className="text-xl sm:text-2xl font-bold text-background">
            Your cart is empty
          </h1>
          <p className="text-muted-foreground text-sm sm:text-base">
            Looks like you haven't added anything to your cart yet.
          </p>
          <motion.div whileTap={{ scale: 0.95 }}>
            <Button asChild className="mt-3 sm:mt-4">
              <Link href="/store">Browse Products</Link>
            </Button>
          </motion.div>
        </motion.div>
      </MaxWidthContainer>
    );
  }

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
    <MaxWidthContainer className="pt-6 sm:pt-10 lg:pt-20">
      <motion.h1
        className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6 lg:mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}>
        Shopping Cart
      </motion.h1>

      <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-3 xl:grid-cols-2">
        <div className="space-y-4">
          <motion.div
            className="rounded-lg border border-border overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4, delay: 0.2 }}>
            <div className="bg-card p-3 sm:p-4 border-b border-border">
              <div className="hidden sm:grid sm:grid-cols-12 gap-2 text-sm font-medium">
                <div className="col-span-6">Product</div>
                <div className="col-span-2 text-center">Price</div>
                <div className="col-span-2 text-center">Quantity</div>
                <div className="col-span-2 text-right">Total</div>
              </div>
              <div className="sm:hidden text-sm font-medium">Cart Items</div>
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
                      <div className="flex flex-col sm:grid sm:grid-cols-12 gap-2 sm:gap-4 items-start sm:items-center">
                        <div className="col-span-12 sm:col-span-6 flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-3 w-full">
                          <div className="relative h-14 w-14 sm:h-16 sm:w-16 rounded overflow-hidden bg-muted flex-shrink-0">
                            <Image
                              src={item.image}
                              alt={item.name}
                              fill
                              className="object-cover"
                              sizes="(max-width: 640px) 56px, (max-width: 1024px) 64px, 80px"
                              priority={index < 2}
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium text-white text-base sm:text-sm">
                              {item.name}
                            </h3>
                            {hasCustomization && (
                              <div className="flex items-center mt-1 gap-1 flex-wrap">
                                <Badge
                                  variant="outline"
                                  className="text-xs py-0 h-5 text-white">
                                  <Palette
                                    className="h-3 w-3 mr-1"
                                    aria-hidden="true"
                                  />
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
                              className="text-sm text-muted-foreground hover:text-destructive flex items-center mt-1"
                              whileTap={{ scale: 0.95 }}
                              aria-label={`Remove ${item.name} from cart`}>
                              <Trash2
                                className="h-3 w-3 sm:h-4 sm:w-4 mr-1"
                                aria-hidden="true"
                              />
                              Remove
                            </motion.button>
                          </div>
                        </div>

                        <div className="col-span-12 sm:col-span-2 flex justify-between sm:justify-center items-center text-white text-base sm:text-sm w-full sm:text-center">
                          <span className="sm:hidden font-medium">Price:</span>
                          <div>
                            {formatCurrency(item.price)}
                            {hasCustomization && (
                              <div className="text-xs text-muted-foreground mt-1">
                                Includes customization
                              </div>
                            )}
                          </div>
                        </div>

                        <div className="col-span-12 sm:col-span-2 flex justify-between sm:justify-center items-center text-foreground w-full">
                          <span className="sm:hidden font-medium">
                            Quantity:
                          </span>
                          <div className="flex items-center">
                            <motion.div whileTap={{ scale: 0.9 }}>
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-9 sm:h-8 w-9 sm:w-8 rounded-r-none"
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity - 1)
                                }
                                disabled={item.quantity <= 1}
                                aria-label={`Decrease quantity of ${item.name}`}>
                                <Minus
                                  className="h-4 w-4 sm:h-3 sm:w-3"
                                  aria-hidden="true"
                                />
                              </Button>
                            </motion.div>
                            <div className="h-9 sm:h-8 w-12 sm:w-10 text-white flex items-center justify-center border-y border-input text-base sm:text-sm">
                              {item.quantity}
                            </div>
                            <motion.div whileTap={{ scale: 0.9 }}>
                              <Button
                                variant="outline"
                                size="icon"
                                className="h-9 sm:h-8 w-9 sm:w-8 rounded-l-none"
                                onClick={() =>
                                  updateQuantity(item.id, item.quantity + 1)
                                }
                                aria-label={`Increase quantity of ${item.name}`}>
                                <Plus
                                  className="h-4 w-4 sm:h-3 sm:w-3"
                                  aria-hidden="true"
                                />
                              </Button>
                            </motion.div>
                          </div>
                        </div>

                        <div className="col-span-12 sm:col-span-2 flex justify-between sm:justify-end items-center font-medium text-white text-base sm:text-sm w-full sm:text-right">
                          <span className="sm:hidden">Total:</span>
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
            <div className="bg-card p-3 sm:p-4 border-b border-border">
              <h2 className="font-semibold text-base sm:text-lg">
                Order Summary
              </h2>
            </div>
            <div className="p-3 sm:p-4 space-y-3 sm:space-y-4">
              <div className="flex flex-col sm:flex-row sm:justify-between text-sm">
                <span className="text-muted-foreground mb-1 sm:mb-0">
                  Subtotal ({totalItems} items)
                </span>
                <span>{formatCurrency(subtotal)}</span>
              </div>

              {items.some((item) => item.customization?.isCustomized) && (
                <div className="flex flex-col sm:flex-row sm:justify-between text-sm">
                  <span className="text-muted-foreground mb-1 sm:mb-0">
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

              <div className="flex flex-col sm:flex-row sm:justify-between text-sm">
                <span className="text-muted-foreground mb-1 sm:mb-0">
                  Shipping
                </span>
                <span>Calculated at checkout</span>
              </div>
              <div className="border-t border-border pt-3 sm:pt-4 flex flex-col sm:flex-row sm:justify-between font-medium">
                <span>Total</span>
                <span>{formatCurrency(totalWithFees)}</span>
              </div>
              <motion.div whileTap={{ scale: 0.97 }}>
                <div className="space-y-3">
                  <Button
                    className="w-full bg-transparent text-white border-none text-base sm:text-lg"
                    size="lg"
                    variant="outline"
                    onClick={() => router.push("/store")}>
                    Shop More
                  </Button>
                  <Button
                    className="w-full text-base sm:text-lg"
                    size="lg"
                    onClick={() => router.push("/checkout")}>
                    Proceed to Checkout
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>

          <div className="rounded-lg border border-border p-3 sm:p-4">
            <h3 className="font-medium mb-2 text-base sm:text-lg">
              Have a promo code?
            </h3>
            <div className="flex flex-col sm:flex-row">
              <input
                type="text"
                placeholder="Enter code"
                className="flex-1 px-2 sm:px-3 py-1 sm:py-2 border border-input rounded-l-md bg-background mb-2 sm:mb-0 sm:mr-2"
              />
              <motion.div whileTap={{ scale: 0.95 }}>
                <Button
                  variant="secondary"
                  className="w-full sm:w-auto rounded-l-none">
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
