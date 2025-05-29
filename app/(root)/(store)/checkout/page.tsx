"use client";

import type React from "react";

import { useState } from "react";
import { useCartStore } from "@/lib/store/cart-store";
import { useAuthStore } from "@/lib/store/auth-store";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import {
  formatCurrency,
  deliveryOptions,
  paymentMethods,
  calculateVAT,
} from "@/lib/utils";
import { CreditCard, MapPin, Truck, User, Palette } from "lucide-react";
import { useRouter } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import MaxWidthContainer from "@/components/ui/container";

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCartStore();
  const { user, isAuthenticated } = useAuthStore();
  const router = useRouter();

  const [formData, setFormData] = useState({
    firstName: user?.name?.split(" ")[0] || "",
    lastName: user?.name?.split(" ").slice(1).join(" ") || "",
    email: user?.email || "",
    phone: "",
    address: "",
    city: "",
    state: "",
    deliveryMethod: "pickup",
    pickupLocation: "",
    paymentMethod: "paystack",
  });

  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if (items.length === 0) {
    router.push("/cart");
    return null;
  }

  // Calculate all fees
  const selectedDelivery = deliveryOptions.find(
    (option) => option.id === formData.deliveryMethod
  );
  const deliveryPrice = selectedDelivery?.price || 0;

  // Calculate customization fees
  const customizationFees = items.reduce((total, item) => {
    const customizationFee = item.customization?.customizationFee || 0;
    const designServiceFee = item.customization?.designServiceFee || 0;
    return (
      total +
      customizationFee * item.quantity +
      designServiceFee * item.quantity
    );
  }, 0);

  // Calculate base subtotal (without customization)
  const baseSubtotal = items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  // Calculate total with all fees
  const totalWithCustomization = baseSubtotal + customizationFees;

  const vatAmount = calculateVAT(totalWithCustomization);
  const totalPrice = totalWithCustomization + deliveryPrice + vatAmount;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    // Clear cart and redirect to success page
    clearCart();
    router.push("/checkout/success");
  };

  return (
    <MaxWidthContainer className="pt-20 text-white">
      <motion.h1
        className="text-3xl font-bold mb-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        Checkout
      </motion.h1>

      {!isAuthenticated && (
        <motion.div
          className="mb-8 p-4 border border-border rounded-lg flex items-center justify-between"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
        >
          <div className="flex items-center">
            <User className="h-5 w-5 mr-2" />
            <span>Already have an account?</span>
          </div>
          <Link href="/login">
            <Button variant="outline" size="sm">
              Login
            </Button>
          </Link>
        </motion.div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="shipping"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-foreground text-background">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <MapPin className="mr-2 h-5 w-5" />
                      Shipping Information
                    </CardTitle>
                    <CardDescription>
                      Enter your shipping details
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Input
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        required
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          name="city"
                          value={formData.city}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state">State</Label>
                        <Input
                          id="state"
                          name="state"
                          value={formData.state}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <motion.div
                      className="ml-auto"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button onClick={() => setStep(2)}>
                        Continue to Delivery
                      </Button>
                    </motion.div>
                  </CardFooter>
                </Card>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div
                key="delivery"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-foreground text-background">
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Truck className="mr-2 h-5 w-5" />
                      Delivery Method
                    </CardTitle>
                    <CardDescription>
                      Choose how you want to receive your order
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup
                      value={formData.deliveryMethod}
                      onValueChange={(value) =>
                        handleSelectChange("deliveryMethod", value)
                      }
                      className="space-y-4"
                    >
                      {deliveryOptions.map((option) => (
                        <div
                          key={option.id}
                          className="flex items-start space-x-3"
                        >
                          <RadioGroupItem
                            value={option.id}
                            id={option.id}
                            className="mt-1 "
                          />
                          <div className="grid gap-1.5 leading-none">
                            <Label htmlFor={option.id} className="font-medium">
                              {option.name}{" "}
                              {option.price > 0
                                ? `(${formatCurrency(option.price)})`
                                : "(Free)"}
                            </Label>
                            <p className="text-sm text-muted-foreground">
                              {option.description}
                            </p>

                            {option.id === "pickup" &&
                              formData.deliveryMethod === "pickup" && (
                                <motion.div
                                  className="mt-3"
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <Label
                                    htmlFor="pickupLocation"
                                    className="text-sm mb-2 block"
                                  >
                                    Select Pickup Location
                                  </Label>
                                  <Select
                                    value={formData.pickupLocation}
                                    onValueChange={(value) =>
                                      handleSelectChange(
                                        "pickupLocation",
                                        value
                                      )
                                    }
                                  >
                                    <SelectTrigger>
                                      <SelectValue placeholder="Select a store location" />
                                    </SelectTrigger>
                                    <SelectContent>
                                      {option.locations?.map((location) => (
                                        <SelectItem
                                          key={location.id}
                                          value={location.id}
                                        >
                                          {location.name}
                                        </SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>

                                  {formData.pickupLocation && (
                                    <motion.p
                                      className="text-sm text-muted-foreground mt-2"
                                      initial={{ opacity: 0 }}
                                      animate={{ opacity: 1 }}
                                      transition={{ duration: 0.3 }}
                                    >
                                      {
                                        option.locations?.find(
                                          (l) =>
                                            l.id === formData.pickupLocation
                                        )?.address
                                      }
                                    </motion.p>
                                  )}
                                </motion.div>
                              )}
                          </div>
                        </div>
                      ))}
                    </RadioGroup>
                  </CardContent>
                  <CardFooter className="flex justify-between">
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button variant="outline" onClick={() => setStep(1)}>
                        Back
                      </Button>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button onClick={() => setStep(3)}>
                        Continue to Payment
                      </Button>
                    </motion.div>
                  </CardFooter>
                </Card>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="payment"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <CreditCard className="mr-2 h-5 w-5" />
                      Payment Method
                    </CardTitle>
                    <CardDescription>
                      Select your preferred payment method
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={handleSubmit}>
                      <RadioGroup
                        value={formData.paymentMethod}
                        onValueChange={(value) =>
                          handleSelectChange("paymentMethod", value)
                        }
                        className="space-y-4"
                      >
                        {paymentMethods.map((method) => (
                          <div
                            key={method.id}
                            className="flex items-start space-x-3"
                          >
                            <RadioGroupItem
                              value={method.id}
                              id={method.id}
                              className="mt-1"
                            />
                            <div className="grid gap-1.5 leading-none">
                              <Label
                                htmlFor={method.id}
                                className="font-medium"
                              >
                                {method.name}
                              </Label>
                              <p className="text-sm text-muted-foreground">
                                {method.description}
                              </p>
                            </div>
                          </div>
                        ))}
                      </RadioGroup>

                      {formData.paymentMethod === "paystack" && (
                        <motion.div
                          className="mt-6 p-4 bg-muted rounded-lg"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          transition={{ duration: 0.3 }}
                        >
                          <p className="text-sm text-muted-foreground">
                            You will be redirected to Paystack to complete your
                            payment securely.
                          </p>
                        </motion.div>
                      )}

                      {formData.paymentMethod === "flutterwave" && (
                        <motion.div
                          className="mt-6 p-4 bg-muted rounded-lg"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          transition={{ duration: 0.3 }}
                        >
                          <p className="text-sm text-muted-foreground">
                            You will be redirected to Flutterwave to complete
                            your payment securely.
                          </p>
                        </motion.div>
                      )}

                      <div className="mt-6">
                        <motion.div
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.97 }}
                        >
                          <Button
                            type="submit"
                            className="w-full"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? (
                              <>Processing...</>
                            ) : (
                              <>Complete Order</>
                            )}
                          </Button>
                        </motion.div>
                      </div>
                    </form>
                  </CardContent>
                  <CardFooter>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full"
                    >
                      <Button
                        variant="outline"
                        onClick={() => setStep(2)}
                        className="w-full"
                      >
                        Back to Delivery
                      </Button>
                    </motion.div>
                  </CardFooter>
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card>
            <CardHeader>
              <CardTitle>Order Summary</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                {items.map((item) => {
                  const hasCustomization = item.customization?.isCustomized;
                  const hasDesignService = item.customization?.hasCustomDesign;
                  const cardColor = item.customization?.cardColor;

                  return (
                    <div key={item.id} className="space-y-0.5">
                      <div className="flex justify-between text-sm">
                        <div className="flex items-center">
                          <span>{item.quantity} x</span>
                          <span className="ml-2 truncate">{item.name}</span>
                        </div>
                        <span>
                          {formatCurrency(item.price * item.quantity)}
                        </span>
                      </div>

                      {hasCustomization && (
                        <div className="ml-4 text-xs text-muted-foreground">
                          <div className="flex items-center">
                            <Palette className="h-3 w-3 mr-1" />
                            <span>
                              {cardColor
                                ? `Customized (${cardColor})`
                                : "Customized"}
                            </span>
                          </div>
                          {hasDesignService && (
                            <div className="ml-4">Includes design service</div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <Separator />

              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>{formatCurrency(baseSubtotal)}</span>
                </div>

                {customizationFees > 0 && (
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">
                      Customization Fees
                    </span>
                    <span>{formatCurrency(customizationFees)}</span>
                  </div>
                )}

                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">VAT (7.5%)</span>
                  <span>{formatCurrency(vatAmount)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Delivery</span>
                  <span>
                    {deliveryPrice > 0 ? formatCurrency(deliveryPrice) : "Free"}
                  </span>
                </div>
              </div>

              <Separator />

              <div className="flex justify-between font-medium">
                <span>Total</span>
                <span>{formatCurrency(totalPrice)}</span>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </MaxWidthContainer>
  );
}
