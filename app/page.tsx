import React from "react";
import TrustedBrands from "../components/pages/home/trusted-brands";
import { HeaderCarouselComp } from "../components/pages/home/carousel";
import Core from "../components/core-value-card/core";
import ServiceRendered from "../components/core-value-card/serviceRendered";
import WhyChooseIsce from "../components/pages/home/why";
import Gallery from "@/components/pages/home/gallery";
import HappyCustomers from "@/components/pages/home/happy-customers";


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
