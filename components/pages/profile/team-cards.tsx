import { CarouselItem } from "@/components/ui/carousel";
import Image from "next/image";
import React from "react";

export default function TeamCards({ name, image, role }: TeamCards) {
  return (
    <CarouselItem className="  md:basis-1/3">
      <div className="flex flex-col justify-center items-center">
        <Image
          src={image}
          alt="ceo"
          width={"200"}
          height={"200"}
          className="rounded-full border-[20px] border-[#F15A24] "
        />
        <p className="text-[20px]">{name}</p>
        <p>{role}</p>
      </div>
    </CarouselItem>
  );
}
