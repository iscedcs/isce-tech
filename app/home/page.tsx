import { HeaderCarouselComp } from '@/components/carousel';
import HappyCustomers from '@/components/home-page/happy-customers';
import TrustedBrands from '@/components/home-page/trusted-brands';
import VideoHeader from '@/components/home-page/video-header';
import { Separator } from '@/components/ui/separator';
import React from 'react';

export default function HomePage() {
	return (
		<div className='bg-foreground'>
			<VideoHeader />
			<HappyCustomers />
			<TrustedBrands />
			<HeaderCarouselComp />
		</div>
	);
}
