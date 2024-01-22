import React from "react";
import MaxWidthContainer from "../ui/container";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
} from "../ui/card";

export default function WhyChooseIsce() {
  return (
    <MaxWidthContainer className="text-background grid gap-5">
      <div className="text-center">
        <div className="text-5xl font-bold ">{`WHY CHOOSE ISCE`}</div>
      </div>
      <div className="grid md:grid-cols-2 gap-10 justify-center py-20">
        <div className="flex flex-col max-w-[500px]">
          <h1 className=" text-5xl leading-normal ">
            {`We are building `}
            <span className="uppercase bg-clip-text bg-gradient-to-br from-blue-600 via-purple-600 to-blue-600 text-transparent">
              {`Revolutionizing Daily Living with NFC Technology`}
            </span>
          </h1>
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
    </MaxWidthContainer>
  );
}
