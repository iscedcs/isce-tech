import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Shopping Cart",
  description: "Review your selected NFC products in your shopping cart. Customize and proceed to checkout when ready.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function CartLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
