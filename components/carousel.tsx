"use client";
import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import HeaderCarouselDisplay from "./carouseldisplay";

export function HeaderCarouselComp() {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      plugins={[
        Autoplay({
          delay: 3000,
        }),
      ]}
      className="w-full"
    >
      <CarouselContent>
        <CarouselItem>
          <HeaderCarouselDisplay
            header="ISCE Tech"
            content="ISCE is a tech company that primarily leverages in NFC technology to
          simplify daily living by contactless solutions to anyone."
            link=""
            className="bg-[url('/images/first.jpg')]"
            buttonTitle="Call to action"
          />
        </CarouselItem>
        <CarouselItem>
          <HeaderCarouselDisplay
            header="A header"
            content="ISCE is a tech company that primarily leverages in NFC technology to
          simplify daily living by contactless solutions to anyone."
            link=""
            className="bg-[url('/images/second.jpg')]"
            buttonTitle="Call to action"
          />
        </CarouselItem>
        <CarouselItem>
          <HeaderCarouselDisplay
            header="ISCE Tech"
            content="ISCE is a tech company that primarily leverages in NFC technology to
          simplify daily living by contactless solutions to anyone."
            link=""
            className="bg-[url('/images/fourth.jpg')]"
            buttonTitle="Call to action"
          />
        </CarouselItem>
        <CarouselItem>
          <HeaderCarouselDisplay
            header="ISCE Tech"
            content="ISCE is a tech company that primarily leverages in NFC technology to
          simplify daily living by contactless solutions to anyone."
            link=""
            className="bg-[url('/images/fifth.jpg')]"
            buttonTitle="Call to action"
          />
        </CarouselItem>
        <CarouselItem>
          <HeaderCarouselDisplay
            header="ISCE Tech"
            content="ISCE is a tech company that primarily leverages in NFC technology to
          simplify daily living by contactless solutions to anyone."
            link=""
            className="bg-[url('/images/sixth.jpg')]"
            buttonTitle="Call to action"
          />
        </CarouselItem>
      </CarouselContent>
    </Carousel>
  );
}
