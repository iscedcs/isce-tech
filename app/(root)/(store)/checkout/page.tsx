"use client";

import type React from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import MaxWidthContainer from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { useCartStore } from "@/lib/store/cart-store";
import {useSession} from "next-auth/react";
import {
  calculateVAT,
  deliveryOptions,
  formatCurrency,
  paymentMethods,
} from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";
import { CreditCard, MapPin, Palette, Truck } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { checkoutFormSchema } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";
import Image from "next/image";
import { submitCheckout } from "@/actions/checkout";

export default function CheckoutPage() {
  const { items, subtotal, clearCart } = useCartStore();
 const session = useSession();
  const router = useRouter();

 const form = useForm<z.infer<typeof checkoutFormSchema>>({
  resolver: zodResolver(checkoutFormSchema),
  defaultValues: {
    firstName: session.data?.user?.firstName?.split(" ")[0] || "",
    lastName: session.data?.user?.lastName?.split(" ")[0] || "",
    email: session.data?.user?.email || "",
    phone: "",
    address: "",
    city: "",
    state: "",
    deliveryMethod: "pickup",
    pickupLocation: "",
    paymentMethod: "paystack",
  },
  mode: "all",
 })

  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  if(!session) {
    router.push("/login?callbackUrl=/checkout");
    return null;
  }

  if (items.length === 0) {
    router.push("/cart");
    return null;
  }

  // Calculate all fees
  const selectedDelivery = deliveryOptions.find(
    (option) => option.id === form.getValues("deliveryMethod")
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

  // const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setFormData((prev) => ({ ...prev, [name]: value }));
  // };

  const handleSelectChange = (name: string, value: string) => {
    form.setValue(name as keyof z.infer<typeof checkoutFormSchema>, value);
  };

  const onSubmit = async (data: z.infer<typeof checkoutFormSchema>) => {
    setIsSubmitting(true);

    const res = await submitCheckout(data, items);

    setIsSubmitting(false);

    if (res.success) {
      toast.success("Order Placed", {
        description: "Your order has been successfully placed.",
      });
      clearCart();
      router.push("/checkout/success");
    } else {
      toast.error("Order Failed", {
        description: res.error || "An error occurred while placing your order.",
      });
    }
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

      {/* {!isAuthenticated && (
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
      )} */}

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
                    <CardDescription>Enter your shipping details</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="firstName">First Name</Label>
                        <Input
                          id="firstName"
                          {...form.register("firstName")}
                          required
                        />
                        {form.formState.errors.firstName && (
                          <p className="text-sm text-red-500">{form.formState.errors.firstName.message}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input
                          id="lastName"
                          {...form.register("lastName")}
                          required
                        />
                        {form.formState.errors.lastName && (
                          <p className="text-sm text-red-500">{form.formState.errors.lastName.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          {...form.register("email")}
                          required
                        />
                        {form.formState.errors.email && (
                          <p className="text-sm text-red-500">{form.formState.errors.email.message}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input
                          id="phone"
                          {...form.register("phone")}
                          required
                        />
                        {form.formState.errors.phone && (
                          <p className="text-sm text-red-500">{form.formState.errors.phone.message}</p>
                        )}
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="address">Address</Label>
                      <Input
                        id="address"
                        {...form.register("address")}
                        required
                      />
                      {form.formState.errors.address && (
                        <p className="text-sm text-red-500">{form.formState.errors.address.message}</p>
                      )}
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="city">City</Label>
                        <Input
                          id="city"
                          {...form.register("city")}
                          required
                        />
                        {form.formState.errors.city && (
                          <p className="text-sm text-red-500">{form.formState.errors.city.message}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="state">State</Label>
                        <Input
                          id="state"
                          {...form.register("state")}
                          required
                        />
                        {form.formState.errors.state && (
                          <p className="text-sm text-red-500">{form.formState.errors.state.message}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <motion.div
                      className="ml-auto"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button onClick={() => setStep(2)}>Continue to Delivery</Button>
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
                    <CardDescription>Choose how you want to receive your order</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <RadioGroup
                      value={form.getValues("deliveryMethod")}
                      onValueChange={(value) => handleSelectChange("deliveryMethod", value)}
                      className="space-y-4"
                    >
                      {deliveryOptions.map((option) => (
                        <div key={option.id} className="flex items-start space-x-3">
                          <RadioGroupItem
                            value={option.id}
                            id={option.id}
                            className="mt-1"
                          />
                          <div className="grid gap-1.5 leading-none">
                            <Label htmlFor={option.id} className="font-medium">
                              {option.name}{" "}
                              {option.price > 0 ? `(${formatCurrency(option.price)})` : "(Free)"}
                            </Label>
                            <p className="text-sm text-muted-foreground">{option.description}</p>

                            {option.id === "pickup" && form.getValues("deliveryMethod") === "pickup" && (
                              <motion.div
                                className="mt-3"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                transition={{ duration: 0.3 }}
                              >
                                <Label htmlFor="pickupLocation" className="text-sm mb-2 block">
                                  Select Pickup Location
                                </Label>
                                <Select
                                  value={form.getValues("pickupLocation")}
                                  onValueChange={(value) => handleSelectChange("pickupLocation", value)}
                                >
                                  <SelectTrigger>
                                    <SelectValue placeholder="Select a store location" />
                                  </SelectTrigger>
                                  <SelectContent>
                                    {option.locations?.map((location) => (
                                      <SelectItem key={location.id} value={location.id}>
                                        {location.name}
                                      </SelectItem>
                                    ))}
                                  </SelectContent>
                                </Select>

                                {form.getValues("pickupLocation") && (
                                  <motion.p
                                    className="text-sm text-muted-foreground mt-2"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 0.3 }}
                                  >
                                    {option.locations?.find((l) => l.id === form.getValues("pickupLocation"))?.address}
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
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button variant="outline" onClick={() => setStep(1)}>
                        Back
                      </Button>
                    </motion.div>
                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                      <Button onClick={() => setStep(3)}>Continue to Payment</Button>
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
                    <CardDescription>Select your preferred payment method</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <form onSubmit={form.handleSubmit(onSubmit)}>
                      <RadioGroup
                        value={form.getValues("paymentMethod")}
                        onValueChange={(value) => handleSelectChange("paymentMethod", value)}
                        className="space-y-4"
                      >
                        {paymentMethods.map((method) => (
                          <div key={method.id} className="flex items-start space-x-3">
                            <RadioGroupItem
                              value={method.id}
                              id={method.id}
                              className="mt-1"
                            />
                            <div className="grid gap-1.5 leading-none">
                              <Label htmlFor={method.id} className="font-medium">
                                {method.name}
                              </Label>
                              <p className="text-sm text-muted-foreground">{method.description}</p>
                            </div>
                          </div>
                        ))}
                      </RadioGroup>

                      {form.getValues("paymentMethod") === "paystack" && (
                        <motion.div
                          className="mt-6 p-4 bg-muted rounded-lg"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          transition={{ duration: 0.3 }}
                        >
                          <p className="text-sm text-muted-foreground">
                            You will be redirected to Paystack to complete your payment securely.
                          </p>
                        </motion.div>
                      )}

                      {form.getValues("paymentMethod") === "flutterwave" && (
                        <motion.div
                          className="mt-6 p-4 bg-muted rounded-lg"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          transition={{ duration: 0.3 }}
                        >
                          <p className="text-sm text-muted-foreground">
                            You will be redirected to Flutterwave to complete your payment securely.
                          </p>
                        </motion.div>
                      )}

                      <div className="mt-6">
                        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
                          <Button
                            type="submit"
                            className="w-full"
                            disabled={isSubmitting}
                          >
                            {isSubmitting ? <>Processing...</> : <>Complete Order</>}
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
                    <div key={item.id} className="space-y-0.5 flex items-start gap-4">
                      <div className="relative w-16 h-16">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-cover rounded"
                        />
                      </div>
                      <div className="flex-1">
                        <div className="flex justify-between text-sm">
                          <div className="flex items-center">
                            <span>{item.quantity} x</span>
                            <span className="ml-2 truncate">{item.name}</span>
                          </div>
                          <span>{formatCurrency(item.price * item.quantity)}</span>
                        </div>

                        {hasCustomization && (
                          <div className="ml-4 text-xs text-muted-foreground">
                            <div className="flex items-center">
                              <Palette className="h-3 w-3 mr-1" />
                              <span>{cardColor ? `Customized (${cardColor})` : "Customized"}</span>
                            </div>
                            {hasDesignService && <div className="ml-4">Includes design service</div>}
                          </div>
                        )}
                      </div>
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
                    <span className="text-muted-foreground">Customization Fees</span>
                    <span>{formatCurrency(customizationFees)}</span>
                  </div>
                )}

                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">VAT (7.5%)</span>
                  <span>{formatCurrency(vatAmount)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Delivery</span>
                  <span>{deliveryPrice > 0 ? formatCurrency(deliveryPrice) : "Free"}</span>
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
