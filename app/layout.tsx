import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import "./globals.css";
import LayoutDisplay from "@/components/layout/layout-display";
import { auth } from '@/auth';
import { SessionProvider } from 'next-auth/react';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | ISCE",
    default: "ISCE",
  },
  description: "We design your imagination",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();
  return (
    <SessionProvider session={session}>
    <html lang="en" className=" scroll-smooth">
      <body className={inter.className}>
        <LayoutDisplay>{children}</LayoutDisplay>
      </body>
    </html>
    </SessionProvider>
  );
}
