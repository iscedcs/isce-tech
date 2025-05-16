import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import "./globals.css";
import LayoutDisplay from "@/components/layout/layout-display";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | ISCE",
    default: "ISCE",
  },
  description: "We design your imagination",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className=" scroll-smooth">
      <body className={inter.className}>
        <LayoutDisplay>{children}</LayoutDisplay>
      </body>
    </html>
  );
}
