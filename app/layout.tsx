import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import LayoutDisplay from "@/components/layout/layout-display";
import { auth } from "@/auth";
import NextTopLoader from "nextjs-toploader";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | ISCE",
    default: "ISCE - We design your imagination",
  },
  description: "ISCE - We design your imagination. Discover innovative NFC solutions for businesses and individuals. Transform your digital presence with smart, sleek, and efficient NFC-enabled products.",
  keywords: ["NFC", "digital business cards", "NFC cards", "NFC solutions", "ISCE", "contactless technology"],
  authors: [{ name: "ISCE" }],
  creator: "ISCE",
  publisher: "ISCE",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "ISCE",
    title: "ISCE - We design your imagination",
    description: "Discover innovative NFC solutions for businesses and individuals. Transform your digital presence with smart, sleek, and efficient NFC-enabled products.",
  },
  twitter: {
    card: "summary_large_image",
    title: "ISCE - We design your imagination",
    description: "Discover innovative NFC solutions for businesses and individuals. Transform your digital presence with smart, sleek, and efficient NFC-enabled products.",
    creator: "@isceapp",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
  },
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
          <LayoutDisplay>
            <NextTopLoader color="white" showSpinner={false} />
            {children}
          </LayoutDisplay>
        </body>
      </html>
    </SessionProvider>
  );
}
