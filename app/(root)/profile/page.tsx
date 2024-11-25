"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import { ArrowDown, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function ProfilePage() {
  return (
    <>
      <div className=" bg-[#0E0E0E] py-4 w-full md:w-full mx-auto md:h-screen h-full">
        <div className="flex items-center max-w-4xl mx-auto py-[120px] justify-center">
          <div className="w-48 h-48 md:w-[70%] md:h-full   text-white ">
            <Image
              src={"/fi-white.webp"}
              alt="logo"
              height={"1000"}
              width={"1000"}
            />
            <p className="text-left mt-[30px] w-full md:w-[60%] text-white md:text-[25px] ">
              The Innovative Solution Creation and Exploration Company
            </p>
          </div>
        </div>
        <div className="  flex justify-center -mt-[60px] flex-col items-center text-white ">
          <p>Get to know ISCE</p>
          <Link
            href="#next"
            className=" w-[50px] mt-[10px] flex items-center justify-center rounded-full bg-white h-[50px] "
          >
            <ArrowDown className="w-8 h-8 text-black " />
          </Link>
        </div>
      </div>

      <div id="next" className=" h-full p-[70px] w-full ">
        <div className="max-w-4xl  mx-auto relative ">
          <Image
            src={"/pajamas_question.png"}
            alt="question"
            width={"300"}
            height={"300"}
            className="md:block hidden"
          />
          <div className="border w-full md:w-[15%] md:ml-[230px] md:bg-white top-0 absolute px-[17px]  py-[10px] md:rounded-tl-[20px] rounded-r-[20px] md:border-[#F15A24]">
            <p>What is ISCE</p>
          </div>
          <div className="mt-20 md:absolute md:ml-[350px]  bottom-0 flex items-end gap-4 ">
            <div className="md:w-[80%] w-full rounded-l-[20px] rounded-tr-[20px] p-[30px]  bg-[#D9D9D9] ">
              <p>
                ISCE is that brand that brings digital solutions to daily
                living, from equipping individuals with innovative software and
                hardware solutions to offering business enterprises with the
                solution in order to provide ease and top notch security.
              </p>
            </div>
            <div className=" bg-[#D9D9D9] flex items-center justify-center w-[50px] h-[50px]  rounded-full ">
              <User />
            </div>
          </div>
        </div>
      </div>

      <div className=" bg-[#1E1E1E] ">
        <div className=" max-w-4xl py-[60px] mx-auto flex gap-[300px] items-center flex-row  text-white  w-full ">
          <p className="text-[100px]  w-[25%] ">Vision Statement</p>
          <div className="">
            <p>
              To pioneer groundbreaking technologies that empower communities
              and drive global innovation
            </p>
            <br />
            <p>
              To transform lives by delivering intuitive, accessible, and
              impactful technology solutions for everyone.
            </p>
            <br />
            <p>
              To harness the power of technology for a greener, more sustainable
              future
            </p>
            <br />
            <p>
              To be the trusted partner for businesses and individuals,
              delivering technology that inspires confidence and drives success.
            </p>
          </div>
        </div>
        <div className=" py-[60px] max-w-4xl mx-auto flex gap-[100px] items-center flex-row-reverse  text-white  w-full ">
          <p className="text-[100px] text-right  ">Mission Statement</p>
          <div className="">
            <p>
              To pioneer groundbreaking technologies that empower communities
              and drive global innovation
            </p>
            <br />
            <p>
              To transform lives by delivering intuitive, accessible, and
              impactful technology solutions for everyone.
            </p>
            <br />
            <p>
              To harness the power of technology for a greener, more sustainable
              future
            </p>
            <br />
            <p>
              To be the trusted partner for businesses and individuals,
              delivering technology that inspires confidence and drives success.
            </p>
          </div>
        </div>
      </div>

      <div className=" m h-screen max-w-4xl mx-auto  ">
        <p className="text-[40px] pt-[30px] ">Meet The Team</p>
        <div className=" mt-[20px] flex flex-row gap-4 ">
          <Carousel>
            <CarouselContent>
              <CarouselItem className=" basis-1/4">
                <div className="flex flex-col justify-center items-center">
                  <Image
                    src={"/ceo.jpg"}
                    alt="ceo"
                    width={"200"}
                    height={"200"}
                    className="rounded-full border-[20px] border-[#F15A24] "
                  />
                  <p className="text-[20px]">Yinsuah Isah</p>
                  <p>C.E.O.</p>
                </div>
              </CarouselItem>
              <CarouselItem className=" basis-1/4">
                <div className="flex flex-col justify-center items-center">
                  <Image
                    src={"/cto.jpg"}
                    alt="ceo"
                    width={"200"}
                    height={"200"}
                    className="rounded-full border-[20px] border-[#F15A24] "
                  />
                  <p className="text-[20px]">Oyeniran Paul</p>
                  <p>C.T.O.</p>
                </div>
              </CarouselItem>
              <CarouselItem className=" basis-1/4">
                <div className="flex flex-col justify-center items-center">
                  <Image
                    src={"/coo.jpg"}
                    alt="ceo"
                    width={"200"}
                    height={"200"}
                    className="rounded-full border-[20px] border-[#F15A24] "
                  />
                  <p className="text-[20px]">Aligweke Jeff</p>
                  <p>C.O.O.</p>
                </div>
              </CarouselItem>
              <CarouselItem className=" basis-1/4">
                <div className="flex flex-col justify-center items-center">
                  <Image
                    src={"/pm.jpg"}
                    alt="ceo"
                    width={"200"}
                    height={"200"}
                    className="rounded-full border-[20px] border-[#F15A24] "
                  />
                  <p className="text-[20px]">Akhabue Emmanuel</p>
                  <p>Product Manager</p>
                </div>
              </CarouselItem>
              <CarouselItem className=" basis-1/4">
                <div className="flex flex-col justify-center items-center">
                  <Image
                    src={"/HR.PNG"}
                    alt="ceo"
                    width={"200"}
                    height={"200"}
                    className="rounded-full border-[20px] border-[#F15A24] "
                  />
                  <p className="text-[20px]">Enebeli Victoria</p>
                  <p>Human Resources</p>
                </div>
              </CarouselItem>

              <CarouselItem className=" basis-1/4">
                <div className="flex flex-col justify-center items-center">
                  <Image
                    src={"/se1.jpg"}
                    alt="ceo"
                    width={"200"}
                    height={"200"}
                    className="rounded-full border-[20px] border-[#F15A24] "
                  />
                  <p className="text-[20px]">Ignatius Emeka</p>
                  <p>Lead Software Developer</p>
                </div>
              </CarouselItem>
              <CarouselItem className=" basis-1/4">
                <div className="flex flex-col justify-center items-center">
                  <Image
                    src={"/se.jpg"}
                    alt="ceo"
                    width={"200"}
                    height={"200"}
                    className="rounded-full border-[20px] border-[#F15A24] "
                  />
                  <p className="text-[20px]">Onyekachukwu Divine</p>
                  <p>Software Developer</p>
                </div>
              </CarouselItem>
        s    </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </>
  );
}
