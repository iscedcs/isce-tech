"use client";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import CarouselDisplay from "./carouseldisplay";
import Reviews from "./reviews";

export default function BrandCarousel() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      plugins={[
        Autoplay({
          delay: 8000,
        }),
      ]}
      className="mx-auto max-w-sm"
    >
      <CarouselContent>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <Image
              src="/images/one.png"
              width="150"
              height="150"
              alt="one"
            ></Image>
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/4">
          <div className="p-1">
            <Image
              src="/images/two.png"
              width="150"
              height="150"
              alt="one"
            ></Image>
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <Image
              src="/images/three.png"
              width="150"
              height="150"
              alt="one"
            ></Image>
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <Image
              src="/images/four.png"
              width="150"
              height="150"
              alt="one"
            ></Image>
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <Image
              src="/images/one.png"
              width="150"
              height="150"
              alt="one"
            ></Image>
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <Image
              src="/images/two.png"
              width="150"
              height="150"
              alt="one"
            ></Image>
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <Image
              src="/images/three.png"
              width="150"
              height="150"
              alt="one"
            ></Image>
          </div>
        </CarouselItem>
        <CarouselItem className="md:basis-1/2 lg:basis-1/3">
          <div className="p-1">
            <Image
              src="/images/four.png"
              width="150"
              height="150"
              alt="one"
            ></Image>
          </div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="hidden lg:flex bg-transparent" />
      <CarouselNext className="hidden lg:flex bg-transparent" />
    </Carousel>
  );
}
