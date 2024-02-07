"use client";
import React from "react";
import Image from "next/image";
import { CLICK_BUTTONS } from "@/lib/const";
import ClickBtn from "@/components/isce-product/business";
import Benefits from "@/components/isce-product/business/benefit";
import Payment from "@/components/isce-product/business/payment";
import MaxWidthContainer from "@/components/ui/container";

const Business = () => {
  const [selected, setSelected] = React.useState({
    image: CLICK_BUTTONS[0].image,
    text: CLICK_BUTTONS[0].text,
  });
  return (
    <div className="bg-black w-full mx-auto">
    <MaxWidthContainer >
		<div className="mt-8 ">
    <div className=' text-white py-2 '>
    <h1  className="text-start font-bold py-2 xl:text-5xl xl:w-1/2 w-full text-3xl "> {`For Business`} </h1>		
    <p className="text-start py-2 xl:text-2xl xl:w-1/2 w-full">{`Tired of the limitations of paper cards? Have a smarter, sleeker and more efficient way of increasing your business reach, turning handshakes to profitable connections.`}</p>
		</div> 
      <div className='space-y-6 w-full justify-center items-center '>
					<Image
						width={1200}
						height={1200}
						src='/images/top-business.jpg'
						alt=''
						className=' w-full lg:w-full h-full rounded-md'
					/>
				</div>
		</div>
      <div className="">
        <div className="grid my-4 lg:grid-cols-2">
          <div className="">
            <div className="space-y-4 ">
              {CLICK_BUTTONS.map((item, i) => (
                <ClickBtn
                  key={i}
                  button={item.button}
                  image={item.image}
                  text={item.text}
                  selected={item.text === selected.text}
                  setSelected={setSelected}

                />
              ))}
            </div>
          </div>
          <div className="hidden lg:block pr-[40px]">
            <div className="">
              <div className="mt-4 w-full h-96">
                <Image
                  height={600}
                  width={600}
                  src={selected.image}
                  alt="Image"
                  className="mx-auto"
                />
                <p className=" text-white mt-[10px]">{selected.text}</p>
              </div>
            </div>
          </div>
        </div>
        <div className=" rounded-3xl flex flex-col px-6">
          <h3 className="text-white font-bold text-[30px]">{`Key benefits`}</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:p-6 lg:gap-6 justify-around">
            <Benefits
              image="images/workoffline.svg"
              title="Lightning Speed & Offline Access"
              description=" Ditch the wait! Experience blazing-fast interactions with NFC's ultra-fast technology, saving you precious time)."
            />
            <Benefits
              image="images/tips.svg"
              title="Tap & Go Convenience"
              description="Simplify your world and business operations with a single tap. Unlock doors, share information, and complete transactions effortlessly."
            />
            <Benefits
              image="images/batches.svg"
              title="Future-Proof Growth"
              description="Your needs evolve, your software adapts. NFC solutions seamlessly scale alongside your business, ensuring you're always ready for what's next."
            />
            <Benefits
              image="images/devices.svg"
              title="Multipurpose Marvel"
              description="Unleash the power of versatility! Adapt NFC to countless use cases, from access control and payments to marketing and inventory management."
            />
          </div>
        </div>
        <div className="text-white text-center w-ful bg-primary">
          <h5 className="lg:text-[45px] text-[30px] pt-[50px] font-bold px-[28px] md:text-[40px]">
            {`Accepting all payment methods across Europe*`}
          </h5>
          <div className="lg:px-[18rem]">
            <Payment />
          </div>
          <div className="py-3">
          <p className="italic">{`*Available where applicable.`}</p>
          </div>
          
        </div>
        
      </div>
    </MaxWidthContainer>
    </div>
  );
};

export default Business;