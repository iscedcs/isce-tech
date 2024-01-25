import { Button } from '@/components/ui/button';
import MaxWidthContainer from '@/components/ui/container';
import Image from 'next/image';

import Projectitem from "./projectitem";
import Link from "next/link";

export default function Gallery() {
  return (
    <div>
      <div className="absolute bg-foreground/30 w-full h-full top-0 left-0"></div>
      <MaxWidthContainer className="relative">
        <h2 className="text-background text-center text-5xl font-bold">{`Our Projects`}</h2>
        <p className="text-background mt-4 text-center text-lg">
          {`We ensure client satisfaction with our timely and creative projects `}
        </p>
        <div className="text-white">
          <Projectitem />
        </div>
        <div className="items-center justify-center grid mt-6">
          <Button
            asChild
            type="button"
            className="pl-[20px] text-black bg-white hover:text-black hover:bg-slate-200"
          >
            <Link href="/#">Read More</Link>
          </Button>
        </div>
      </MaxWidthContainer>
    </div>
  );
}
