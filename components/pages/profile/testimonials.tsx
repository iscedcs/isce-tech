import { StarFilledIcon } from "@radix-ui/react-icons";
import Image from "next/image";
import React from "react";

export default function Testimonials({ image, name, review, title }: IReview) {
  return (
    <div className="flex flex-col md:flex-row my-[20px]  items-center gap-5">
      <Image
        src={image}
        className="rounded-full"
        alt="dp"
        width={"150"}
        height={"150"}
      />
      <div className="">
        <p className="text-[25px]" >{name}</p>
        <p className=" text-[13px] text-[#333] " >{title}</p>
        <p>{review}</p>
        <span className="flex" >
          <StarFilledIcon className="text-yellow-500 w-5 h-5 " />
          <StarFilledIcon className="text-yellow-500 w-5 h-5 " />
          <StarFilledIcon className="text-yellow-500 w-5 h-5 " />
          <StarFilledIcon className="text-yellow-500 w-5 h-5 " />
          <StarFilledIcon className="text-yellow-500 w-5 h-5 " />
        </span>
      </div>
    </div>
  );
}
