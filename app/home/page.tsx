import { HeaderCarouselComp } from '@/components/carousel';
import Core from '@/components/corevaluecards/core';
import ServiceRendered from '@/components/corevaluecards/serviceRendered';
import HappyCustomers from '@/components/home-page/happy-customers';
import TrustedBrands from '@/components/home-page/trusted-brands';
import VideoHeader from '@/components/home-page/video-header';
import WhyChooseIsce from '@/components/home-page/why';
import Footer from '@/components/layout/footer';
import React from 'react';

export default function HomePage() {
	return (
		<div className='bg-foreground'>
			<VideoHeader />
			<HeaderCarouselComp />
			<WhyChooseIsce />
			<Core />
			<ServiceRendered />
			<HappyCustomers />
			<TrustedBrands />
			<div className='py-10'></div>
			<Footer />
		</div>
	);
}
