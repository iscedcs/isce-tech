import Image from "next/image";
import React from "react";

export default function Projectcomp({
  image,
  title,
  description,
  weblink,
  figlink,
}: IPROJECT) {
  return (
    <div className="mt-[20px]">
      <Image
        className="rounded"
        src={image}
        width="400"
        height="400"
        alt="Project"
      />
      <div className="pt-[10px]">
        <h1 className="text-[20px] font-bold">{title}</h1>
        <p className="text-[14px] w-[80%]">{description}</p>
        <div className="flex justify-between mt-[10px]">
          <button className="rounded text-[14px] px-[20px] py-[10px] bg-white text-black">
            <a target="__blank" href={weblink}>
              Visit the website
            </a>
          </button>
          <button className="rounded text-[14px] px-[20px] py-[10px] border border-white text-white">
            <a target="__blank" href={figlink}>
              View Figma file
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
