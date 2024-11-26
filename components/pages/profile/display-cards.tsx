import { Link2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function DisplayCards({ image, link, title }: DisplayCards) {
  const altText = title.toLowerCase();
  return (
    <div className="relative">
      <div className=" relative ">
        <Image
          src={image}
          width={"1000"}
          height={"1000"}
          className=" w-[500px] rounded-[20px] h-[300px] object-cover "
          alt={altText}
        />
      </div>
      <div className="  absolute top-0 w-full h-[300px] bg-[#00000079]  rounded-[20px] ">
        <Link
          className=" hover:scale-110 transition-all ease-in-out bg-white absolute flex items-center justify-center rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50px] h-[50px] "
          href={link}
        >
          <Link2 className="w-5 h-5" />
        </Link>
        <p className="text-white text-[20px] absolute bottom-0 ml-[30px] mb-[20px] ">
          {title}
        </p>
      </div>
    </div>
  );
}
