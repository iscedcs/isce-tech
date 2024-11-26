"use client";
import DisplayCards from "@/components/pages/profile/display-cards";
import TeamCards from "@/components/pages/profile/team-cards";
import Testimonials from "@/components/pages/profile/testimonials";
import { Card, CardContent } from "@/components/ui/card";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Separator } from "@/components/ui/separator";
import {
  data,
  PRODUCTDISPLAY,
  PROJECTDISPLAY,
  REVIEWS,
  TEAMDISPLAY,
} from "@/lib/const";
import { StarIcon } from "@radix-ui/react-icons";
import {
  ArrowDown,
  Info,
  InstagramIcon,
  LinkedinIcon,
  LocateIcon,
  Mail,
  Map,
  MapPin,
  MessageCircle,
  TwitchIcon,
  TwitterIcon,
  User,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

export default function ProfilePage() {
  return (
    <>
      <div className=" bg-[#0E0E0E] py-4 w-full md:w-full mx-auto h-screen">
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

      <div id="next" className=" h-full px-[20px] md:p-[70px] w-full ">
        <div className="max-w-4xl  mx-auto relative ">
          <Image
            src={"/pajamas_question.png"}
            alt="question"
            width={"300"}
            height={"300"}
            className="md:block hidden"
          />
          <div className="border w-[60%] md:w-[15%] ml-0 md:ml-[230px] bg-[#F15A24] md:bg-white top-0 absolute px-[17px]  py-[10px] rounded-tl-[20px] rounded-r-[20px] md:border-[#F15A24]">
            <p>What is ISCE</p>
          </div>
          <div className="mt-[20px] md:absolute md:ml-[350px]  bottom-0 flex items-end gap-2 md:gap-4 ">
            <div className="md:w-[70%] mt-[50px] w-full rounded-l-[20px] rounded-tr-[20px] p-[30px]  bg-[#D9D9D9] ">
              <p className=" text-[13px]">
                ISCE is that brand that brings digital solutions to daily
                living, from equipping individuals with innovative software and
                hardware solutions to offering business enterprises with the
                solution in order to provide ease and top notch security.
              </p>
            </div>
            <div className=" bg-[#D9D9D9] flex items-center justify-center w-[40px] h-[30px] md:w-[50px] md:h-[50px]  rounded-full ">
              <User className="w-[14px] h-[14px] md:w-[20px] md:h-[20px] " />
            </div>
          </div>
        </div>
        <hr className="mt-[50px]" />
      </div>

      <div className=" max-w-4xl px-[20px] md:px-0  mb-[20px] mx-auto ">
        <p className="text-[40px] ">What We Do</p>
        <div className=" gap-3 grid mt-[20px] grid-cols-1 md:grid-cols-2">
          <Card>
            <CardContent className="my-[20px]">
              <h1 className="text-[30px]">In-Depth Research</h1>
              <hr className="my-[10px]" />
              <p className="text-[12px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                mollitia illo voluptate consectetur ipsam dicta quia, dolorem
                consequuntur qui laudantium dolorum deleniti veniam tempora.
                Iste tempora sed aspernatur itaque unde!
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="my-[20px]">
              <h1 className="text-[30px]">In-Depth Research</h1>
              <hr className="my-[10px]" />
              <p className="text-[12px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                mollitia illo voluptate consectetur ipsam dicta quia, dolorem
                consequuntur qui laudantium dolorum deleniti veniam tempora.
                Iste tempora sed aspernatur itaque unde!
              </p>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="my-[20px]">
              <h1 className="text-[30px]">In-Depth Research</h1>
              <hr className="my-[10px]" />
              <p className="text-[12px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. At
                mollitia illo voluptate consectetur ipsam dicta quia, dolorem
                consequuntur qui laudantium dolorum deleniti veniam tempora.
                Iste tempora sed aspernatur itaque unde!
              </p>
            </CardContent>
          </Card>
        </div>
      </div>

      <div className=" bg-[#1E1E1E] ">
        <div className=" px-[20px] md:px-0  max-w-4xl py-[60px] mx-auto flex md:gap-[300px] items-center flex-col md:flex-row  text-white  w-full ">
          <p className="md:text-[100px] text-[40px]  md:w-[25%] ">
            Vision Statement
          </p>
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
        <div className=" px-[20px] md:px-0 py-[60px] max-w-4xl mx-auto flex md:gap-[100px] items-center flex-col md:flex-row-reverse  text-white  w-full ">
          <p className="md:text-[100px] text-[40px] md:text-right  ">
            Mission Statement
          </p>
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

      <div className=" px-[20px] md:px-0  max-w-4xl mx-auto  ">
        <p className="text-[40px] pt-[30px] ">Meet The Team</p>
        <span className="flex flex-row items-center gap-2 text-[#333]">
          <Info className="w-[14px] h-[14px] " />
          <p>Scroll to see more</p>
        </span>
        <div className=" mt-[20px] justify-center items-center flex flex-row md:gap-4 ">
          <Carousel className="w-full">
            <CarouselContent>
              {TEAMDISPLAY.map((team, k) => (
                <TeamCards
                  key={k}
                  name={team.name}
                  role={team.role}
                  image={team.image}
                />
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:inline-block" />
            <CarouselNext className="hidden md:inline-block" />
          </Carousel>
        </div>
      </div>

      <div className=" max-w-4xl px-[20px] md:px-0  mx-auto  ">
        <p className="text-[40px] pt-[30px] ">Products</p>
        <span className="flex gap-1 items-center font-bold ">
          <StarIcon />
          <p>Featured First</p>
        </span>
        <div className=" mt-[10px] grid gap-6 grid-cols-1 md:grid-cols-2">
          {PRODUCTDISPLAY.map((product, k) => (
            <DisplayCards
              key={k}
              image={product.image}
              link={product.link}
              title={product.title}
            />
          ))}
        </div>
      </div>

      <div className=" max-w-4xl px-[20px] md:px-0   pb-[20px]  mx-auto  ">
        <p className="text-[40px] pt-[30px] ">Projects</p>
        <span className="flex gap-1 items-center font-bold ">
          <StarIcon />
          <p>Featured First</p>
        </span>
        <div className=" mt-[10px] grid gap-6 grid-cols-1 md:grid-cols-2">
          {PROJECTDISPLAY.map((product, k) => (
            <DisplayCards
              key={k}
              image={product.image}
              link={product.link}
              title={product.title}
            />
          ))}
        </div>
      </div>

      <div className=" max-w-4xl px-[20px] md:px-0  mx-auto ">
        <p className="text-[40px]">Market Analysis</p>
        <p>
          Our Market Analysis are determined by the list of components below
        </p>
        <div className=" flex mt-[20px]  md:flex-row flex-col justify-start md:justify-center items-start md:items-center ">
          <div className=" ml-[20px] md:ml-0">
            <ul>
              <li className=" list-disc">Market Size and Growth</li>
              <li className=" list-disc">Target Audience</li>
              <li className=" list-disc">Competitive Landscape</li>
              <li className=" list-disc">Market Trends</li>
              <li className=" list-disc">Barriers to Entry</li>
              <li className=" list-disc">Opportunities and Threats</li>
            </ul>
          </div>
          <ScrollArea className=" w-full mt-0 md:mt-[20px] ">
            <LineChart
              width={600}
              height={300}
              data={data}
              margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
            >
              <Line type="monotone" dataKey="uv" stroke="#8884d8" />
              <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
            </LineChart>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </div>
      </div>

      <div className=" px-[20px] md:px-0  max-w-4xl mx-auto">
        <p className="text-[40px] pt-[30px] ">Testimonials</p>
        <div className=" mt-[20px] flex flex-col gap-6">
          {REVIEWS.map((review, k) => (
            <Testimonials
              key={k}
              image={review.image}
              name={review.name}
              review={review.review}
              title={review.title}
            />
          ))}
        </div>
      </div>

      <div className=" bg-[#1E1E1E] py-[30px] text-white  ">
        <div className=" px-[20px] md:px-0  max-w-4xl mx-auto">
          <div className="  flex justify-between">
            <p className="text-4xl">Contact Us</p>
            <Image
              src={"/fi-white.webp"}
              alt="logo"
              height={"100"}
              width={"100"}
            />
          </div>
          <div className="flex mt-[20px] gap-3 items-center">
            <div className=" shadow-lg bg-white h-[70px] flex items-center justify-center rounded-full w-[70px] ">
              <MapPin className=" text-black w-8 h-8 " />
            </div>
            <div className=" w-[70%] md:w-[30%]">
              Plot 1, Maruwa Bus Stop, 128 Remi Olowude St,, Lekki, Lagos,
              Nigeria.
            </div>
          </div>
          <div className=" flex justify-center md:justify-end">
            <div className=" mt-[100px] flex flex-row gap-3">
              <Link
                className="shadow-lg bg-white h-[50px] flex items-center justify-center rounded-full w-[50px]"
                href={""}
              >
                <LinkedinIcon className="text-black w-5 h-5" />
              </Link>
              <Link
                className="shadow-lg bg-white h-[50px] flex items-center justify-center rounded-full w-[50px]"
                href={""}
              >
                <InstagramIcon className="text-black w-5 h-5" />
              </Link>
              <Link
                className="shadow-lg bg-white h-[50px] flex items-center justify-center rounded-full w-[50px]"
                href={""}
              >
                <MessageCircle className="text-black w-5 h-5" />
              </Link>
              <Link
                className="shadow-lg bg-white h-[50px] flex items-center justify-center rounded-full w-[50px]"
                href={""}
              >
                <Mail className="text-black w-5 h-5" />
              </Link>
              <Link
                className="shadow-lg bg-white h-[50px] flex items-center justify-center rounded-full w-[50px]"
                href={""}
              >
                <TwitterIcon className="text-black w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
