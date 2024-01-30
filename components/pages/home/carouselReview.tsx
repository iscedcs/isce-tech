'use client';
import React from 'react';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from "embla-carousel-autoplay";
import MaxWidthContainer from '@/components/ui/container';
import Reviews from "./reviews";
import { REVIEWS} from "@/lib/const";



export default function CarouselReview() {
  return (
    <div className="text-center">
      <MaxWidthContainer>
        <Carousel
          opts={{
            align: "start",
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent>
            {REVIEWS.map((review, b) => (
              <CarouselItem key={b} className="px-5 sm:px-10 lg:px-20">
                <Reviews
                  review={review.review}
                  name={review.name}
                  title={review.title}
                  image={review.image}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden lg:flex bg-transparent" />
          <CarouselNext className="hidden lg:flex bg-transparent" />
        </Carousel>
      </MaxWidthContainer>
    </div>
  );
}
