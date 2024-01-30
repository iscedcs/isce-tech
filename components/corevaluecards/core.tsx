import MaxWidthContainer from "../ui/container";
;
import React from "react";
import CoreItem from "./coreitem";
import { Button } from "../ui/button";
import Link from "next/link";
import { CORE_VALUES } from "../../lib/const";

// Core component
export default function Core() {
  return (
    <MaxWidthContainer className={`rounded-[20px] bg-white text-black`}>
      <h1 className={`text-5xl font-bold text-center `}>Core Values</h1>
      <p className="mt-[20px] text-center">
        From client satisfaction to timely delivery, our goal is to live up to
        the tenets of our CORE VALUES.
      </p>
      <div className="grid-cols-1 pt-[20px] grid gap-[20px] md:grid-cols-2 lg:grid-cols-3">
        {CORE_VALUES.map((value, k) => (
          <CoreItem
            key={k}
            icon={value.icon}
            title={value.title}
            description={value.description}
          />
        ))}
      </div>
      <div className="items-center justify-center grid mt-4">
        <Button asChild type="button" className="">
          <Link href='/#'>Read More</Link>
        </Button>
      </div>
    </MaxWidthContainer>
  );
}
