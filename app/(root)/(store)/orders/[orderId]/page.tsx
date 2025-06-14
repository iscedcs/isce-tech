import { db } from "@/lib/prisma";
import MaxWidthContainer from "@/components/ui/container";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { MapPin, Package, Truck, CheckCircle } from "lucide-react";
import Link from "next/link";
import { formatCurrency } from "@/lib/utils";
import Image from "next/image";
import AnimatedCard from "@/components/animated-card";

export default async function OrderPage({ params }: { params: { orderId: string } }) {
  const order = await db.order.findUnique({
    where: { id: params.orderId },
    include: {
      orderItems: {
        include: { product: true }, // Include product details
      },
      shippingInfo: true,
    },
  });

  if (!order) {
    return (
      <MaxWidthContainer className="pt-20 text-white">
        <Card className="bg-foreground text-background">
          <CardContent className="text-center py-8">
            <p>Order not found</p>
            <Button asChild variant="outline" className="mt-4">
              <Link href="/orders">Back to Orders</Link>
            </Button>
          </CardContent>
        </Card>
      </MaxWidthContainer>
    );
  }

  const statusSteps = [
    { label: "Order Placed", completed: true, icon: Package },
    { label: "Processing", completed: order.status === "PAID", icon: Truck },
    { label: "Shipped", completed: order.status === "SHIPPED", icon: Truck },
    { label: "Delivered", completed: order.status === "DELIVERED", icon: CheckCircle },
  ];

  return (
    <MaxWidthContainer className="pt-20 text-white">
      <AnimatedCard>
        <Card className="bg-foreground text-background">
          <CardHeader>
            <div className="flex justify-between items-center">
              <div>
                <CardTitle className="text-3xl font-bold">Order #{order.id.slice(0, 8)}</CardTitle>
                <CardDescription>
                  Placed on{" "}
                  {new Date(order.createdAt).toLocaleDateString("en-NG", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </CardDescription>
              </div>
              <Badge
                variant={order.status === "PAID" ? "default" : "secondary"}
                className={
                   order.status === "PAID"
                            ? "bg-blue-500 text-white"
                            : order.status === "DELIVERED"
                            ? "bg-emerald-500 text-white"
                            : order.status === "SHIPPED"
                            ? "bg-yellow-300 text-white"
                            : order.status === "CANCELLED"
                            ? "bg-red-500 text-white"
                            : "bg-gray-500 text-white"
                }
              >
                {order.status}
              </Badge>
            </div>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Status Timeline */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Order Status</h3>
              <div className="flex justify-between items-center">
                {statusSteps.map((step, index) => (
                  <div key={step.label} className="flex flex-col items-center">
                    <AnimatedCard
                      className={`h-10 w-10 rounded-full flex items-center justify-center ${
                        step.completed ? "bg-emerald-500 text-white" : "bg-gray-600 text-gray-300"
                      }`}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: index * 0.2 }}
                    >
                      <step.icon className="h-5 w-5" />
                    </AnimatedCard>
                    <p className="text-sm mt-2">{step.label}</p>
                    {index < statusSteps.length - 1 && (
                      <div
                        className={`h-1 w-16 mt-2 ${
                          step.completed ? "bg-emerald-500" : "bg-gray-600"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            {/* Order Items */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Items</h3>
              <div className="space-y-4">
                {order.orderItems.map((item) => (
                  <div
                    key={item.id}
                    className="flex items-start gap-4 border-b border-background/10 pb-4"
                  >
                    <div className="relative w-16 h-16">
                      <Image
                        src={Array.isArray(item.product?.images) && item.product.images.length > 0
                          ? item.product.images[0]
                          : "/images/business.png"
                        }
                        alt={item.product?.name || "Product"}
                        fill
                        className="object-cover rounded"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="font-medium">{item.product?.name || item.productId}</p>
                      <p className="text-sm text-muted-foreground">
                        Quantity: {item.quantity}
                      </p>
                      <p className="text-sm">
                        {formatCurrency(item.unitPrice * item.quantity)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <Separator />

            {/* Shipping Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4 flex items-center">
                <MapPin className="h-5 w-5 mr-2" />
                Shipping Information
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Name</p>
                  <p>{`${order.shippingInfo?.firstName} ${order.shippingInfo?.lastName}`}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p>{order.shippingInfo?.email}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Address</p>
                  <p>{order.shippingInfo?.address}</p>
                  <p>{`${order.shippingInfo?.city}, ${order.shippingInfo?.state}`}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Delivery Method</p>
                  <p>{order.shippingInfo?.deliveryMethod}</p>
                  {order.shippingInfo?.pickupLocation && (
                    <p className="text-sm">{order.shippingInfo.pickupLocation}</p>
                  )}
                </div>
              </div>
            </div>

            <Separator />

            {/* Order Summary */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Subtotal</span>
                  <span>{formatCurrency(order.totalAmount - order.vatAmount - order.deliveryPrice)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">VAT (7.5%)</span>
                  <span>{formatCurrency(order.vatAmount)}</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-muted-foreground">Delivery</span>
                  <span>{order.deliveryPrice > 0 ? formatCurrency(order.deliveryPrice) : "Free"}</span>
                </div>
                <div className="flex justify-between font-medium">
                  <span>Total</span>
                  <span>{formatCurrency(order.totalAmount)}</span>
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <Button asChild variant="outline" className="text-emerald-500 border-emerald-500">
                <Link href="/orders">Back to Orders</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
</AnimatedCard>    
</MaxWidthContainer>
  );
}