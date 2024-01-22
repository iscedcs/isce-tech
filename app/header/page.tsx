import BrandCarousel from '@/components/brandCarousel';
import { HeaderCarouselComp } from '@/components/carousel';
import CarouselReview from '@/components/carouselReview';
import React from 'react';

export default function Header() {
	return (
		<>
			<div className='w-full bg-fixed h-screen bg-cover bg-center'>
				<div className='w-full h-screen bg-gradient-to-r from-[#000000] to-[#13121200] opacity-90'></div>
				<div className='flex justify-center items-center'>
					<div className='text-white text-center w-full mx-auto absolute top-[50%] translate-y-[-50%]'>
						<h1 className='lg:text-[80px] text-[50px] text-center font-bold'>
							ISCE TECH
						</h1>
						<p className='lg:w-[40%] w-[90%] mx-auto'>
							{`ISCE is a tech company that primarily
							leverages in NFC technology to simplify daily
							living by contactless solutions to anyone.`}
						</p>
						<div className='flex gap-2 justify-center mt-3'>
							<a href=''>
								<button className='transition-all duration-300 hover:bg-white hover:text-black bg-black py-3 px-5'>
									Explore Services
								</button>
							</a>
							<a href=''>
								<button className='transition-all duration-300 hover:bg-black hover:text-white bg-[#fff] text-black py-3 px-5'>
									Contact Us
								</button>
							</a>
						</div>
					</div>
				</div>
			</div>
			<div className='text-center text-white px-[20px] lg:px-[100px] pt-[40px] bg-gradient-to-br from-[#000] to-[#0e0c0c]'>
				<h1 className='lg:text-[60px] text-[30px] text-center font-bold'>
					HAPPY CUSTOMERS
				</h1>
				<div className='text-center pt-[20px]'>
					<CarouselReview />
					<hr className='border-[#333]' />
					<p className='pt-[20px]'>
						Trusted by customer-led company product
					</p>
					<BrandCarousel />
				</div>
			</div>
			<div className='pb-[20px]'>
				<HeaderCarouselComp />
			</div>
		</>
	);
}
