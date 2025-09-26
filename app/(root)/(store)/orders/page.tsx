import { auth } from "@/auth";
import AnimatedCard from "@/components/animated-card";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
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
import { Search } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function OrdersPage() {
  const session = await auth();
  if (!session?.user?.id) {
    redirect("/login?callbackUrl=/orders");
  }

  const orders = await db.order.findMany({
    where: { userId: session.user.id },
    include: { orderItems: true },
    orderBy: { createdAt: "desc" },
  });

  return (
    <MaxWidthContainer className="pt-20 text-white">
      <AnimatedCard>
        <Card className="bg-foreground text-background">
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="text-sm md:text-lg lg:text-xl xl:text-3xl font-bold">
                Your Orders
              </CardTitle>
              <div className="relative w-full sm:w-1/3 lg:w-1/4">
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
              <Alert>
                <AlertDescription>
                  You have no orders yet.{" "}
                  <Link href="/store" className="underline text-emerald-500">
                    Browse products
                  </Link>{" "}
                  to start shopping.
                </AlertDescription>
              </Alert>
            ) : (
              <Table>
                <TableHeader>
                  <TableRow className="border-b border-background/10">
                    <TableHead>Order ID</TableHead>
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
                      className="hover:bg-background/5 transition-colors">
                      <TableCell className="font-mono text-sm">
                        {order.id.slice(0, 8)}...
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
                            order.status === "PAID" ? "default" : "secondary"
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
                          }>
                          {order.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <Button
                          asChild
                          variant="outline"
                          size="sm"
                          className="text-emerald-500 border-emerald-500 hover:bg-emerald-500 hover:text-white">
                          <Link href={`/orders/${order.id}`}>View Details</Link>
                        </Button>
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
