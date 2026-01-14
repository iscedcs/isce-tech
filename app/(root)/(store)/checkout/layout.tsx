import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Checkout",
  description: "Complete your order securely. Enter your shipping information and payment details to finalize your purchase.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function CheckoutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
