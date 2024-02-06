import MaxWidthContainer from "@/components/ui/container";
import React from "react";
import Image from "next/image";
import ServiceCards from "./servicecards";
import ServiceCard from "./servicecard";
import { PRODUCTIVITY } from "@/lib/const";

export default function Servicecomp() {
  return (
    <MaxWidthContainer className="mx-auto">
      <div className="mt-20">
        <div className=" text-white py-2 ">
          <h4 className="text-start font-normal py-2 text-xl">{`OUR SERVICES`}</h4>
          <h1 className="text-start font-bold py-2 xl:text-5xl xl:w-1/2 w-full text-3xl ">{`Discover what ISCE has to offer with tailored services for your unique needs.`}</h1>
        </div>
        <div className="space-y-6 my-5 w-full justify-center items-center">
          <Image
            width={1200}
            height={1200}
            src="/images/services.jpg"
            alt="images"
            className="w-full h-full rounded-md"
          />
        </div>
        <ServiceCards />
        <div className="text-center  mt-[50px]">
          <h1 className="font-bold text-white text-[40px] lg:text-7xl">
            Boost Your Productivity With ISCE
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-[50px] lg:mx-[20px]">
            {PRODUCTIVITY.map((card, k) => [
              <ServiceCard
                key={k}
                title={card.title}
                description={card.description}
                icon={card.icon}
                hasIcon
              />,
            ])}
          </div>
        </div>
      </div>
    </MaxWidthContainer>
  );
}
