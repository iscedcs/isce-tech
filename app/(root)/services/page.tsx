import Servicecomp from "@/components/pages/services/servicecomp";
import MaxWidthContainer from "@/components/ui/container";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Services",
  description: "Explore ISCE's comprehensive NFC solutions and services. From digital business cards to innovative NFC-enabled products for businesses and individuals.",
  openGraph: {
    title: "Our Services | ISCE",
    description: "Explore ISCE's comprehensive NFC solutions and services. From digital business cards to innovative NFC-enabled products for businesses and individuals.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Our Services | ISCE",
    description: "Explore ISCE's comprehensive NFC solutions and services. From digital business cards to innovative NFC-enabled products for businesses and individuals.",
  },
};

export default function Services() {
  return (
    <div className="bg-foreground">
      <Servicecomp />
    </div>
  );
}
