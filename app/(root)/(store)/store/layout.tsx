import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Store",
  description: "Discover premium NFC products for your digital lifestyle. Browse our collection of NFC cards, wristbands, stickers, and keychains from ISCE.",
  openGraph: {
    title: "Store | ISCE NFC Products",
    description: "Discover premium NFC products for your digital lifestyle. Browse our collection of NFC cards, wristbands, stickers, and keychains from ISCE.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Store | ISCE NFC Products",
    description: "Discover premium NFC products for your digital lifestyle. Browse our collection of NFC cards, wristbands, stickers, and keychains from ISCE.",
  },
};

export default function StoreLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
