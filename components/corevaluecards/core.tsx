import MaxWidthContainer from "../ui/container";
import { CORE_VALUES } from "@/lib/const";
import React from "react";
import CoreItem from "./coreitem";
import { Button } from "../ui/button";
import Link from "next/link";

// Core component
export default function Core() {
<<<<<<< HEAD
	const coreValues: CoreValues[] = [
		{
			icon: <UserPlusIcon className='text-[#bd1e59] text-4xl mb-4' />,
			title: 'Be an owner, Not a renter',
			description:
				'We all win when Enterpret wins. We play for the team and do what is needed to Make Enterpret win.',
		},
		{
			icon: (
				<HeartPulseIcon className='text-[#bd1e59] text-4xl mb-4' />
			),
			title: 'Care personally, Challenge directly',
			description:
				'We care personally for our teammates. We give and ask for direct and actionable feedback and there contribution.',
		},
		{
			icon: <LightbulbIcon className='text-[#bd1e59] text-4xl mb-4' />,
			title: 'Humble growth mindset',
			description:
				'We carry a mindset of humility, coupled with a strong desire to learn and get better and keeping ourselves updated. ',
		},
	];

	return (
		<MaxWidthContainer className={`text-white`}>
			<div className='max-w-screen-lg mx-auto'>
				<h1 className='text-3xl sm:text-5xl font-bold text-center mb-4 sm:mb-6'>
					CORE VALUES
				</h1>
				<p className='text-center text-lg mb-4 sm:mb-8'>
					Core Values are critical behavioral values that we hold
					everyone accountable for at Enterpret.
				</p>
			</div>
			<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
				{coreValues.map((value, index) => (
					<div
						key={index}
						className='bg-gradient-to-br from-blue-600 via-purple-600 to-blue-600 text-white rounded-t rounded-b-lg'
					>
						<Card className='w-full bg-gray-800 back mt-1 ml-1 rounded-b-lg rounded-t-none border-none text-white mb-0 sm:mb-0'>
							<CardHeader>
								{value.icon}
								<CardTitle className='h-10'>
									{value.title}
								</CardTitle>
							</CardHeader>
							<CardContent>
								<CardDescription className=' line-clamp-6'>
									{value.description}{' '}
								</CardDescription>
							</CardContent>
						</Card>
					</div>
				))}
			</div>
		</MaxWidthContainer>
	);
=======
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
        <Button asChild type="button" className="pl-[20px]">
          <Link href='/#'>Read More</Link>
        </Button>
      </div>
    </MaxWidthContainer>
  );
>>>>>>> 5e5dfb6e24e9353b208675253b1f538a272b0972
}
