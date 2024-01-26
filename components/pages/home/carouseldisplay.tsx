import React from 'react';

import Link from 'next/link';
import MaxWidthContainer from '@/components/ui/container';
import { Button } from '@/components/ui/button';
import Image from "next/image";

export default function HeaderCarouselDisplay({
  header,
  content,
  link,
  className,
  buttonTitle,
}: ICAROUSELDISPLAY) {
  return (
    <div className="h-screen overflow-clip">
      <Image
        src={`${className}`}
        alt="image"
        height="1300"
        width="1300"
        quality={100}
        className="relative w-full h-full object-cover"
      />
      <div className="w-full h-screen bg-gradient-to-t absolute top-0 from-[#000000] to-[#13121200]"></div>
      <div className="text-white absolute bottom-0 w-full z-20">
        <MaxWidthContainer className="flex flex-col gap-3">
          <h1 className="font-bold text-[50px] lg:text-[100px]">{header}</h1>
          <p className="w-[80%] lg:w-[60%] text-[17px]">{content}</p>
          <Button
            asChild
            className="transition-all duration-300 hover:bg-black hover:text-white hover:border border-white text-black bg-white py-3 px-5 w-min"
          >
            <Link className="cursor-pointer" href={link}>
              {buttonTitle}
            </Link>
          </Button>
        </MaxWidthContainer>
      </div>
    </div>
    // <div className={` w-full h-screen bg-cover bg-center ${className}`}>
    //   <div className="w-full h-screen bg-gradient-to-t relative from-[#000000] to-[#13121200] opacity-100 ">
    //     <div className="w-full text-white absolute bottom-0">
    // <MaxWidthContainer className="flex flex-col gap-3 relative">
    //   <h1 className="font-bold text-[50px] lg:text-[100px]">{header}</h1>
    //   <p className="w-[80%] lg:w-[60%] text-[17px]">{content}</p>
    //   <Button
    //     asChild
    //     className="transition-all duration-300 hover:bg-black hover:text-white hover:border border-white text-black bg-white py-3 px-5 w-min"
    //   >
    //     <Link className="cursor-pointer" href={link}>
    //       {buttonTitle}
    //     </Link>
    //   </Button>
    // </MaxWidthContainer>
    //     </div>
    //   </div>
    // </div>
  );
}
