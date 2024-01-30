import MaxWidthContainer from "@/components/ui/container";
import React from "react";
import Image from "next/image";
import ServiceCards from "./servicecards";

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
        <ServiceCards/>
      </div>
    </MaxWidthContainer>
  );
}
