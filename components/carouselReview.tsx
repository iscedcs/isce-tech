'use client';
import React from 'react';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Reviews from './reviews';
import MaxWidthContainer from './ui/container';

const reviews: IReview[] = [
	{
		name: 'Ariaria',
		review: `ISCE Tech's creation for Ariaria stands out as a seamless e-commerce website and app. The user interface is intuitive, making navigation a breeze. The robust backend ensures smooth transactions, making it a top-notch solution for our online shopping.`,
		title: 'Founder',
		image: '/images/person.jpg',
	},
	{
		name: 'Yoma Care',
		review: `ISCE Tech's project delivery for Yoma Care exemplify efficiency and purpose. Amazing job!`,
		title: 'CEO/Founder',
		image: '/images/person.jpg',
	},
	{
		name: 'Transpay',
		review: `ISCE Tech's website and management system for Yoma Care exemplify efficiency and purpose.`,
		title: 'Minister Of Transportation',
		image: '/images/person.jpg',
	},
];

export default function CarouselReview() {
	return (
		<div className='text-center'>
			<MaxWidthContainer>
				<Carousel
					opts={{
						align: 'start',
					}}
					plugins={[
						Autoplay({
							delay: 5000,
						}),
					]}
					className='w-full'
				>
					<CarouselContent>
						{[0, 1, 2, 3, 4, 5, 6].map((_, b) => (
							<CarouselItem
								key={b}
								className='px-5 sm:px-10 lg:px-20'
							>
								<Reviews
									review={reviews[0].review}
									name={reviews[0].name}
									title={reviews[0].title}
									image={reviews[0].image}
								/>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious className='hidden lg:flex bg-transparent' />
					<CarouselNext className='hidden lg:flex bg-transparent' />
				</Carousel>
			</MaxWidthContainer>
		</div>
	);
}
