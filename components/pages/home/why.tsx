import React from "react";
import MaxWidthContainer from "../../ui/container";
import { coreValues } from "@/lib/const";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "../../ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function WhyChooseIsce() {
  return (
    <MaxWidthContainer className="text-background grid gap-5">
      <div className="text-center">
        <div className="text-5xl font-bold ">{`WHY CHOOSE ISCE`}</div>
      </div>
      <div className="grid md:grid-cols-2 gap-10 justify-center py-20">
        <div className="flex flex-col max-w-[500px]">
          <div className="flex flex-col gap-2 font-bold lg:text-5xl text-[34px] leading-normal ">
            <span>{`We are building `}</span>
            <span className="font-normal uppercase bg-clip-text  bg-gradient-to-br from-blue-600 via-[#f15a24] to-blue-600 text-transparent">
              {`Revolutionizing Daily Living with NFC Technology`}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-5 text-2xl">
          <h1 className="font-bold"></h1>
          <p className="font-light text-lg">
            {`Embrace the future with ISCE, a pioneering tech company committed to
            simplifying daily living through cutting-edge NFC (Near Field
            Communication) solutions. Here's why choosing ISCE is a leap towards
            a seamless and contactless lifestyle:`}
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {coreValues.map((value, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-blue-600 via-[#f15a24] to-blue-600 text-white rounded-t rounded-b-lg"
          >
            <Card className="w-full bg-gray-800 back mt-1 ml-1 rounded-b-lg rounded-t-none border-none text-white mb-4 sm:mb-0">
              <CardHeader>
                {value.icon}
                <CardTitle className="h-10">{value.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-white line-clamp-6">
                  {value.description}
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
      <div className="items-center justify-center grid mt-4">
        <Button asChild type="button" className="pl-[20px] text-black bg-white hover:text-black hover:bg-slate-200">
          <Link href="/#">Read More</Link>
        </Button>
      </div>
    </MaxWidthContainer>
  );
}
