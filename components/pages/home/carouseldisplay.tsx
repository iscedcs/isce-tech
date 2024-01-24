import React from 'react';

import Link from 'next/link';
import MaxWidthContainer from '@/components/ui/container';
import { Button } from '@/components/ui/button';

export default function HeaderCarouselDisplay({
	header,
	content,
	link,
	className,
	buttonTitle,
}: ICAROUSELDISPLAY) {
	return (
    <div className={` w-full h-screen bg-cover bg-center ${className}`}>
      <div className="w-full h-screen bg-gradient-to-t from-[#000000] to-[#13121200] opacity-100"></div>
      <div className="w-full text-white absolute bottom-0">
        <MaxWidthContainer className=" flex flex-col gap-3">
          <h1 className="font-bold text-[50px] lg:text-[100px]">{header}</h1>
          <p className="w-[80%] lg:w-[60%] text-[17px]">{content}</p>
          <Button
            asChild
            className="transition-all duration-300 cursor-pointer hover:bg-black hover:text-white hover:border border-white text-black bg-white py-3 px-5 w-min"
          >
            <Link className="cursor-pointer" href={link}>
              {buttonTitle}
            </Link>
          </Button>
        </MaxWidthContainer>
      </div>
    </div>
  );
}
