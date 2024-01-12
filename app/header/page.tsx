import { CarouselComp } from "@/components/carousel";
import Image from "next/image";
import React from "react";

export default function Header() {
  return (
    <>
      <div className='w-full bg-[url("/images/bgimg.gif")] bg-fixed h-screen bg-cover bg-center'>
        <div className="w-full h-screen bg-gradient-to-r from-[#000000] to-[#13121200] opacity-90"></div>
        <div className="flex justify-center items-center">
          <div className="text-white text-center w-full mx-auto absolute top-[50%] translate-y-[-50%]">
            <h1 className="lg:text-[80px] text-[50px] text-center font-bold">ISCE TECH</h1>
            <p className="lg:w-[40%] w-[90%] mx-auto">
              ISCE is a tech company that primarily leverages in NFC technology
              to simplify daily living by contactless solutions to anyone.
            </p>
            <div className="flex gap-2 justify-center mt-3">
              <a href="">
                <button className="transition-all duration-[0.3s] hover:bg-white hover:text-black bg-black py-3 px-5">
                  Explore Services
                </button>
              </a>
              <a href="">
                <button className="transition-all duration-[0.3s] hover:bg-black hover:text-white bg-[#fff] text-black py-3 px-5">
                  Contact Us
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className=" text-white px-[20px] lg:px-[100px] pt-[40px] bg-gradient-to-br from-[#000] to-[#0e0c0c]">
        <hgroup className="text-center">
          <h1 className="lg:text-[60px] text-[30px] text-center font-bold">HAPPY CUSTOMERS</h1>
          <p className="">
            Dolor ea anim tempor veniam culpa sunt velit voluptate commodo
            adipisicing excepteur reprehenderit in. Commodo ullamco excepteur
            sunt exercitation. Lorem aliqua consectetur consectetur enim nostrud
            veniam consequat consectetur pariatur.Ullamco laborum elit nulla non
            et dolore elit anim mollit aute fugiat aute do. Occaecat est est
            aute labore elit laboris consequat. Nostrud ad non sunt occaecat est
            labore elit anim deserunt commodo quis minim cupidatat.Minim minim
            commodo magna cupidatat proident. Nisi proident culpa dolore eiusmod
            consequat ut ullamco culpa velit dolore dolore. Velit enim cupidatat
            duis labore. Ex nostrud do magna Lorem eiusmod labore nulla
            adipisicing voluptate cillum minim.Dolor ipsum Lorem elit aliquip
            laboris deserunt. Deserunt magna in veniam eu. Excepteur officia
            ullamco pariatur ut minim cupidatat ea et consectetur. Sit voluptate
            Lorem ad incididunt non laboris sint cupidatat velit dolore elit
            quis ex sint. Dolor velit adipisicing ex ex in ut. Elit veniam ipsum
            id nulla cupidatat non in duis excepteur laborum ipsum commodo
            dolore officia.
          </p>
        </hgroup>
        <div className="flex pb-[40px] justify-center mt-[20px] items-center gap-4">
          <Image
            src="/images/person.jpg"
            width="100"
            height="100"
            alt="Person"
            className="rounded-[300px]"
          ></Image>
          <div className="">
            <p className="text-[30px] font-bold">John Doe</p>
            <p className="text-[12px]">A Person, World</p>
          </div>
        </div>
        <hr className=" border-[#333]" />
        <div className="text-center pt-[20px]">
          <p>Trusted by customer-led company product</p>
          <div className="flex justify-center flex-wrap py-[20px] gap-8 items-center">
            <Image
              src="/images/one.png"
              width="150"
              height="150"
              alt="one"
            ></Image>
            <Image
              src="/images/two.png"
              width="150"
              height="150"
              alt="one"
            ></Image>
            <Image
              src="/images/three.png"
              width="150"
              height="150"
              alt="one"
            ></Image>
            <Image
              src="/images/four.png"
              width="150"
              height="150"
              alt="one"
            ></Image>
            <Image
              src="/images/three.png"
              width="150"
              height="150"
              alt="one"
            ></Image>
            <Image
              src="/images/one.png"
              width="150"
              height="150"
              alt="one"
            ></Image>
          </div>
        </div>
      </div>
      <div className="pb-[20px]">
        <CarouselComp />
      </div>
    </>
  );
}
