"use client";

import { useState, useTransition } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Loader2 } from "lucide-react";
import { toast } from "sonner";
import { updateOrderStatus } from "@/actions/update-order-status";

type OrderStatus =
  | "PENDING_PAYMENT"
  | "PAID"
  | "PENDING"
  | "FAILED"
  | "PROCESSING"
  | "SHIPPED"
  | "DELIVERED"
  | "CANCELLED";

interface StatusSelectProps {
  orderId: string;
  currentStatus: OrderStatus;
}

export default function StatusSelect({ orderId, currentStatus }: StatusSelectProps) {
  const [status, setStatus] = useState<OrderStatus>(currentStatus);
  const [isPending, startTransition] = useTransition();

  const handleStatusChange = (newStatus: OrderStatus) => {
    setStatus(newStatus);
    startTransition(async () => {
      const formData = new FormData();
      formData.append("orderId", orderId);
      formData.append("status", newStatus);

      const result = await updateOrderStatus(formData);
      if (result.success) {
        toast.success(result.message);
      } else {
        toast.error(result.message);
        setStatus(currentStatus); 
      }
    });
  };

  return (
    <div className="flex items-center gap-2">
      <Select
        value={status}
        onValueChange={handleStatusChange}
        disabled={isPending}
        aria-label={`Update status for order ${orderId}`}
      >
        <SelectTrigger className="w-40 bg-background/10 border-emerald-500 text-white">
          <SelectValue placeholder="Select status" />
        </SelectTrigger>
        <SelectContent className="bg-foreground text-background">
          <SelectItem value="PENDING_PAYMENT">Pending Payment</SelectItem>
          <SelectItem value="PAID">Paid</SelectItem>
          <SelectItem value="PENDING">Pending</SelectItem>
          <SelectItem value="FAILED">Failed</SelectItem>
          <SelectItem value="PROCESSING">Processing</SelectItem>
          <SelectItem value="SHIPPED">Shipped</SelectItem>
          <SelectItem value="DELIVERED">Delivered</SelectItem>
          <SelectItem value="CANCELLED">Cancelled</SelectItem>
        </SelectContent>
      </Select>
      {isPending && <Loader2 className="h-4 w-4 animate-spin text-emerald-500" />}
    </div>
  );
}