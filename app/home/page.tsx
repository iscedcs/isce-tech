import { HeaderCarouselComp } from '@/components/carousel';
import HappyCustomers from '@/components/home-page/happy-customers';
import TrustedBrands from '@/components/home-page/trusted-brands';
import VideoHeader from '@/components/home-page/video-header';
import Footer from '@/components/layout/footer';
import React from 'react';

export default function HomePage() {
	return (
		<div className='bg-foreground'>
			<VideoHeader />
			<HappyCustomers />
			<TrustedBrands />
			<div className='py-5'></div>
			<HeaderCarouselComp />
			<Footer />
		</div>
	);
}
