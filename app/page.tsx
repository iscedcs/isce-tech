import Core from "@/components/corevaluecards/core";
import ServiceRendered from "@/components/corevaluecards/serviceRendered";
import WhyChooseIsce from "@/components/pages/home/why";
import Footer from "@/components/layout/footer";
import { HeaderCarouselComp } from "@/components/pages/home/carousel";
import Gallery from "@/components/pages/home/gallery";
import React from "react";
import HappyCustomers from "@/components/pages/home/happy-customers";
import TrustedBrands from "@/components/pages/home/trusted-brands";

export default function HomePage() {
  return (
    <div className="bg-foreground">
      <HeaderCarouselComp/>
      <WhyChooseIsce />
      <Core />
      <Gallery />
      <ServiceRendered />
      <HappyCustomers />
      <TrustedBrands />
      <div className="py-10"></div>
      <Footer />
    </div>
  );
}
