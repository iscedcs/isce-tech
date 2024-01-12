'use client'
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

export default function CarouselReview() {
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
      className="w-full"
    >
      <CarouselContent>
        <CarouselPrevious />
        <CarouselItem>
          <Reviews
            review="Dolor ea anim tempor veniam culpa sunt velit voluptate commodo
          adipisicing excepteur reprehenderit in. Commodo ullamco excepteur sunt
          exercitation. Lorem aliqua consectetur consectetur enim nostrud veniam
          consequat consectetur pariatur.Ullamco laborum elit nulla non et
          dolore elit anim mollit aute fugiat aute do. Occaecat est est aute
          labore elit laboris consequat. Nostrud ad non sunt occaecat est labore
          elit anim deserunt commodo quis minim cupidatat.Minim minim commodo
          magna cupidatat proident. Nisi proident culpa dolore eiusmod consequat
          ut ullamco culpa velit dolore dolore. Velit enim cupidatat duis
          labore. Ex nostrud do magna Lorem eiusmod labore nulla adipisicing
          voluptate cillum minim.Dolor ipsum Lorem elit aliquip laboris
          deserunt. Deserunt magna in veniam eu. Excepteur officia ullamco
          pariatur ut minim cupidatat ea et consectetur. Sit voluptate Lorem ad
          incididunt non laboris sint cupidatat velit dolore elit quis ex sint.
          Dolor velit adipisicing ex ex in ut. Elit veniam ipsum id nulla
          cupidatat non in duis excepteur laborum ipsum commodo dolore officia."
            name="John Doe"
            title="A Person, World"
            image="/images/person.jpg"
          />
        </CarouselItem>
        <CarouselItem>
          <Reviews
            review="Dolor ea anim tempor veniam culpa sunt velit voluptate commodo
          adipisicing excepteur reprehenderit in. Commodo ullamco excepteur sunt
          exercitation. Lorem aliqua consectetur consectetur enim nostrud veniam
          consequat consectetur pariatur.Ullamco laborum elit nulla non et
          dolore elit anim mollit aute fugiat aute do. Occaecat est est aute
          labore elit laboris consequat. Nostrud ad non sunt occaecat est labore
          elit anim deserunt commodo quis minim cupidatat.Minim minim commodo
          magna cupidatat proident. Nisi proident culpa dolore eiusmod consequat
          ut ullamco culpa velit dolore dolore. Velit enim cupidatat duis
          labore. Ex nostrud do magna Lorem eiusmod labore nulla adipisicing
          voluptate cillum minim.Dolor ipsum Lorem elit aliquip laboris
          deserunt. Deserunt magna in veniam eu. Excepteur officia ullamco
          pariatur ut minim cupidatat ea et consectetur. Sit voluptate Lorem ad
          incididunt non laboris sint cupidatat velit dolore elit quis ex sint.
          Dolor velit adipisicing ex ex in ut. Elit veniam ipsum id nulla
          cupidatat non in duis excepteur laborum ipsum commodo dolore officia."
            name="John Doe"
            title="A Person, World"
            image="/images/person.jpg"
          />
        </CarouselItem>
        <CarouselItem>
          <Reviews
            review="Dolor ea anim tempor veniam culpa sunt velit voluptate commodo
          adipisicing excepteur reprehenderit in. Commodo ullamco excepteur sunt
          exercitation. Lorem aliqua consectetur consectetur enim nostrud veniam
          consequat consectetur pariatur.Ullamco laborum elit nulla non et
          dolore elit anim mollit aute fugiat aute do. Occaecat est est aute
          labore elit laboris consequat. Nostrud ad non sunt occaecat est labore
          elit anim deserunt commodo quis minim cupidatat.Minim minim commodo
          magna cupidatat proident. Nisi proident culpa dolore eiusmod consequat
          ut ullamco culpa velit dolore dolore. Velit enim cupidatat duis
          labore. Ex nostrud do magna Lorem eiusmod labore nulla adipisicing
          voluptate cillum minim.Dolor ipsum Lorem elit aliquip laboris
          deserunt. Deserunt magna in veniam eu. Excepteur officia ullamco
          pariatur ut minim cupidatat ea et consectetur. Sit voluptate Lorem ad
          incididunt non laboris sint cupidatat velit dolore elit quis ex sint.
          Dolor velit adipisicing ex ex in ut. Elit veniam ipsum id nulla
          cupidatat non in duis excepteur laborum ipsum commodo dolore officia."
            name="John Doe"
            title="A Person, World"
            image="/images/person.jpg"
          />
        </CarouselItem>
        <CarouselItem>
          <Reviews
            review="Dolor ea anim tempor veniam culpa sunt velit voluptate commodo
          adipisicing excepteur reprehenderit in. Commodo ullamco excepteur sunt
          exercitation. Lorem aliqua consectetur consectetur enim nostrud veniam
          consequat consectetur pariatur.Ullamco laborum elit nulla non et
          dolore elit anim mollit aute fugiat aute do. Occaecat est est aute
          labore elit laboris consequat. Nostrud ad non sunt occaecat est labore
          elit anim deserunt commodo quis minim cupidatat.Minim minim commodo
          magna cupidatat proident. Nisi proident culpa dolore eiusmod consequat
          ut ullamco culpa velit dolore dolore. Velit enim cupidatat duis
          labore. Ex nostrud do magna Lorem eiusmod labore nulla adipisicing
          voluptate cillum minim.Dolor ipsum Lorem elit aliquip laboris
          deserunt. Deserunt magna in veniam eu. Excepteur officia ullamco
          pariatur ut minim cupidatat ea et consectetur. Sit voluptate Lorem ad
          incididunt non laboris sint cupidatat velit dolore elit quis ex sint.
          Dolor velit adipisicing ex ex in ut. Elit veniam ipsum id nulla
          cupidatat non in duis excepteur laborum ipsum commodo dolore officia."
            name="John Doe"
            title="A Person, World"
            image="/images/person.jpg"
          />
        </CarouselItem>
        <CarouselItem>
          <Reviews
            review="Dolor ea anim tempor veniam culpa sunt velit voluptate commodo
          adipisicing excepteur reprehenderit in. Commodo ullamco excepteur sunt
          exercitation. Lorem aliqua consectetur consectetur enim nostrud veniam
          consequat consectetur pariatur.Ullamco laborum elit nulla non et
          dolore elit anim mollit aute fugiat aute do. Occaecat est est aute
          labore elit laboris consequat. Nostrud ad non sunt occaecat est labore
          elit anim deserunt commodo quis minim cupidatat.Minim minim commodo
          magna cupidatat proident. Nisi proident culpa dolore eiusmod consequat
          ut ullamco culpa velit dolore dolore. Velit enim cupidatat duis
          labore. Ex nostrud do magna Lorem eiusmod labore nulla adipisicing
          voluptate cillum minim.Dolor ipsum Lorem elit aliquip laboris
          deserunt. Deserunt magna in veniam eu. Excepteur officia ullamco
          pariatur ut minim cupidatat ea et consectetur. Sit voluptate Lorem ad
          incididunt non laboris sint cupidatat velit dolore elit quis ex sint.
          Dolor velit adipisicing ex ex in ut. Elit veniam ipsum id nulla
          cupidatat non in duis excepteur laborum ipsum commodo dolore officia."
            name="John Doe"
            title="A Person, World"
            image="/images/person.jpg"
          />
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious className="hidden lg:flex bg-transparent" />
      <CarouselNext className="hidden lg:flex bg-transparent" />
    </Carousel>
  );
}
