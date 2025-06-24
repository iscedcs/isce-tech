import StatusSelect from "@/components/admin/status-select";
import AnimatedCard from "@/components/animated-card";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import MaxWidthContainer from "@/components/ui/container";
import { Input } from "@/components/ui/input";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { db } from "@/lib/prisma";
import { formatCurrency } from "@/lib/utils";
import { OrderStatus } from "@prisma/client";
import { Search } from "lucide-react";

export default async function AdminDashboardPage() {
//   const session = await auth();
//   if (!session?.user || session.user.userType !== "ADMIN") {
//     redirect("/login?callbackUrl=/dashboard");
//   }

  const orders = await db.order.findMany({
    include: {
      shippingInfo: { select: { firstName: true, lastName: true, email: true } },
      orderItems: true,
    },
    orderBy: { createdAt: "desc" },
  }) as Array<{
    id: string;
    createdAt: Date;
    totalAmount: number;
    status: string;
    shippingInfo: { firstName: string; lastName: string; email: string } | null;
    orderItems: any[];
  }>;

  return (
    <MaxWidthContainer className="pt-20  text-white">
      <AnimatedCard
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Card className="bg-foreground text-background">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-3xl font-bold">Order Management</CardTitle>
              <div className="relative w-64">
                <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search orders..."
                  className="pl-8 bg-background/10 border-none"
                  disabled
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            {orders.length === 0 ? (
              <p className="text-center text-muted-foreground">No orders found.</p>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow className="border-b border-background/10">
                    <TableHead>Order ID</TableHead>
                    <TableHead>Customer</TableHead>
                    <TableHead>Date</TableHead>
                    <TableHead>Total</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {orders.map((order) => (
                    <TableRow
                      key={order.id}
                      className="hover:bg-background/5 transition-colors"
                    >
                      <TableCell className="font-mono text-sm">
                        {order.id.slice(0, 8)}...
                      </TableCell>
                     <TableCell>
                        {order.shippingInfo
                          ? `${order.shippingInfo.firstName} ${order.shippingInfo.lastName}`
                          : "Unknown"}
                      </TableCell>
                      <TableCell>
                        {new Date(order.createdAt).toLocaleDateString("en-NG", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </TableCell>
                      <TableCell>{formatCurrency(order.totalAmount)}</TableCell>
                      <TableCell>
                        <Badge
                          variant={
                            order.status === "PAID" || order.status === "DELIVERED"
                              ? "default"
                              : order.status === "CANCELLED"
                              ? "destructive"
                              : "secondary"
                          }
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
                      </TableCell>
                      <TableCell>
                        <StatusSelect orderId={order.id} currentStatus={order.status as OrderStatus} />
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            )}
          </CardContent>
        </Card>
      </AnimatedCard>
    </MaxWidthContainer>
  );
}