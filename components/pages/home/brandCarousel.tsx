'use client';
import React, { Fragment } from 'react';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

export default function BrandCarousel() {
	return (
    <Carousel
      opts={{
        align: "start",
      }}
      plugins={[
        Autoplay({
          delay: 2000,
        }),
      ]}
      className="mx-auto w-full"
    >
      <CarouselContent className="items-center justify-center">
        {[0, 1].map((_, b) => (
          <Fragment key={b}>
            <CarouselItem className="basis-1/2 sm:basis-1/3 lg:basis-1/6">
              <div className="p-1 ">
                <Image
                  src="/images/brands/airs.png"
                  width="150"
                  height="150"
                  alt="one"
                  className="h-20 w-full object-contain"
                ></Image>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/2 sm:basis-1/3 lg:basis-1/6">
              <div className="p-1">
                <Image
                  src="/images/brands/anambra.png"
                  width="150"
                  height="150"
                  alt="one"
                  className="h-20 w-full object-contain"
                ></Image>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/2 sm:basis-1/3 lg:basis-1/6">
              <div className="p-1">
                <Image
                  src="/images/brands/ariarialogo.png"
                  width="150"
                  height="150"
                  alt="one"
                  className="h-20 w-full object-contain"
                ></Image>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/2 sm:basis-1/3 lg:basis-1/6">
              <div className="p-1">
                <Image
                  src="/images/brands/flutterwave.png"
                  width="150"
                  height="150"
                  alt="one"
                  className="h-20 w-full object-contain"
                ></Image>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/2 sm:basis-1/3 lg:basis-1/6">
              <div className="p-1">
                <Image
                  src="/images/brands/mobilemech.jpg"
                  width="150"
                  height="150"
                  alt="one"
                  className="h-20 w-full object-contain"
                ></Image>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/2 sm:basis-1/3 lg:basis-1/6">
              <div className="p-1">
                <Image
                  src="/images/brands/netplus.png"
                  width="150"
                  height="150"
                  alt="one"
                  className="h-20 w-full object-contain"
                ></Image>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/2 sm:basis-1/3 lg:basis-1/6">
              <div className="p-1">
                <Image
                  src="/images/brands/transparent.png"
                  width="150"
                  height="150"
                  alt="one"
                ></Image>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/2 sm:basis-1/3 lg:basis-1/6">
              <div className="p-1">
                <Image
                  src="/images/brands/transpaywhite.png"
                  width="150"
                  height="150"
                  alt="one"
                ></Image>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/2 sm:basis-1/3 lg:basis-1/6">
              <div className="p-1">
                <Image
                  src="/images/brands/twinty.png"
                  width="150"
                  height="150"
                  alt="one"
                ></Image>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/2 sm:basis-1/3 lg:basis-1/6">
              <div className="p-1">
                <Image
                  src="/images/brands/whitenLighten.png"
                  width="150"
                  height="150"
                  alt="one"
                ></Image>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/2 sm:basis-1/3 lg:basis-1/6">
              <div className="p-1">
                <Image
                  src="/images/brands/yoma.png"
                  width="150"
                  height="150"
                  alt="one"
                  className="h-20 w-full object-contain"
                ></Image>
              </div>
            </CarouselItem>
          </Fragment>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
