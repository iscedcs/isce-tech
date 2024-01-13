'use client';
import React, { Fragment } from 'react';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';

export default function BrandCarousel() {
	return (
		<Carousel
			opts={{
				align: 'start',
			}}
			plugins={[
				Autoplay({
					delay: 2000,
				}),
			]}
			className='mx-auto w-full'
		>
			<CarouselContent>
				{[0, 1].map((_, b) => (
					<Fragment key={b}>
						<CarouselItem className='basis-1/2 sm:basis-1/3 lg:basis-1/6'>
							<div className='p-1'>
								<Image
									src='/images/one.png'
									width='150'
									height='150'
									alt='one'
								></Image>
							</div>
						</CarouselItem>
						<CarouselItem className='basis-1/2 sm:basis-1/3 lg:basis-1/6'>
							<div className='p-1'>
								<Image
									src='/images/two.png'
									width='150'
									height='150'
									alt='one'
								></Image>
							</div>
						</CarouselItem>
						<CarouselItem className='basis-1/2 sm:basis-1/3 lg:basis-1/6'>
							<div className='p-1'>
								<Image
									src='/images/three.png'
									width='150'
									height='150'
									alt='one'
								></Image>
							</div>
						</CarouselItem>
						<CarouselItem className='basis-1/2 sm:basis-1/3 lg:basis-1/6'>
							<div className='p-1'>
								<Image
									src='/images/four.png'
									width='150'
									height='150'
									alt='one'
								></Image>
							</div>
						</CarouselItem>
					</Fragment>
				))}
			</CarouselContent>
		</Carousel>
	);
}
