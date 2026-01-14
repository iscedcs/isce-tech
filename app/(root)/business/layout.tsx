import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "For Business",
  description: "Transform your business with ISCE NFC solutions. Increase your business reach, turn handshakes into profitable connections with smart, sleek, and efficient digital business cards.",
  openGraph: {
    title: "For Business | ISCE",
    description: "Transform your business with ISCE NFC solutions. Increase your business reach, turn handshakes into profitable connections with smart, sleek, and efficient digital business cards.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "For Business | ISCE",
    description: "Transform your business with ISCE NFC solutions. Increase your business reach, turn handshakes into profitable connections with smart, sleek, and efficient digital business cards.",
  },
};

export default function BusinessLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
