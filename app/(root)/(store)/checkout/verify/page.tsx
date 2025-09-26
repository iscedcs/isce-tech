"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { verifyPayment } from "@/actions/verify-payment";
import { CheckCircle, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import MaxWidthContainer from "@/components/ui/container";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IoAlertCircleOutline } from "react-icons/io5";
import { Button } from "@/components/ui/button";

export default function VerifyPaymentPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [message, setMessage] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    const verify = async () => {
      const orderId = searchParams.get("orderId");
      const reference =
        searchParams.get("trxref") || searchParams.get("reference");

      if (!orderId || !reference) {
        setMessage("Missing order ID or transaction reference");
        setIsLoading(false);
        return;
      }

      const result = await verifyPayment(orderId, reference);
      if (result.success && result.orderId) {
        setMessage("Payment verified successfully! Your order is confirmed.");
        setIsSuccess(true);
        router.push(`/orders/${result.orderId}`);
      } else {
        setMessage(result.message || "Failed to verify payment.");
        setIsSuccess(false);
      }
      setIsLoading(false);
    };

    verify();
  }, [searchParams, router]);

  return (
    <MaxWidthContainer className="pt-20 text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}>
        <Card className="bg-foreground text-background max-w-md mx-auto">
          <CardHeader>
            <CardTitle className="text-center">Payment Verification</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            {isLoading ? (
              <div className="flex flex-col items-center">
                <Loader2 className="h-8 w-8 animate-spin text-emerald-500" />
                <p className="mt-2">Verifying your payment...</p>
              </div>
            ) : (
              <>
                {isSuccess ? (
                  <CheckCircle className="h-12 w-12 text-emerald-500 mx-auto" />
                ) : (
                  <IoAlertCircleOutline className="h-12 w-12 text-red-500 mx-auto" />
                )}
                <p>{message}</p>
                {!isLoading && !isSuccess && (
                  <Button
                    variant="outline"
                    onClick={() => router.push("/orders")}
                    className="mt-4 bg-transparent">
                    View Orders
                  </Button>
                )}
              </>
            )}
          </CardContent>
        </Card>
      </motion.div>
    </MaxWidthContainer>
  );
}
