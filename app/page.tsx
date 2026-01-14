import React from "react";
import { Metadata } from "next";
import TrustedBrands from "../components/pages/home/trusted-brands";
import { HeaderCarouselComp } from "../components/pages/home/carousel";
import Core from "../components/core-value-card/core";
import ServiceRendered from "../components/core-value-card/serviceRendered";
import WhyChooseIsce from "../components/pages/home/why";
import Gallery from "@/components/pages/home/gallery";
import HappyCustomers from "@/components/pages/home/happy-customers";

export const metadata: Metadata = {
  title: "Home",
  description: "ISCE - We design your imagination. Discover innovative NFC solutions for businesses and individuals.",
  openGraph: {
    title: "ISCE - We design your imagination",
    description: "Discover innovative NFC solutions for businesses and individuals",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ISCE - We design your imagination",
    description: "Discover innovative NFC solutions for businesses and individuals",
  },
};

export default function HomePage() {
  return (
    <div className="bg-foreground">
      <HeaderCarouselComp />
      <WhyChooseIsce />
      <Core />
      <Gallery />
      <ServiceRendered />
      <HappyCustomers />
      <TrustedBrands />
      <div className="py-10"></div>
      
    </div>
  );
}
