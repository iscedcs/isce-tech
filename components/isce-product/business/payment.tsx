import React from "react";
import Image from "next/image";
import { REMOTE_IMAGES } from "@/lib/const";

export default function Payment() {
  return (
    <>
      <div className="md:flex flex flex-wrap gap-3 place-content-center  rounded-3xl mx-8 my-16 p-[0px]">
        {REMOTE_IMAGES.map((image, id) => (
          <div key={id} className="rounded-full bg-slate-800 px-4 py-2">
            <Image
              src={image.src}
              width={500}
              height={500}
              alt={image.name}
              className="w-[60px] h-12"
            />
          </div>
        ))}
      </div>
    </>
  );
}
