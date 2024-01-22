import React from 'react';
import MaxWidthContainer from '../ui/container';
import BrandCarousel from '../brandCarousel';

export default function TrustedBrands() {
	return (
		<MaxWidthContainer className='py-10 border-y text-background text-center flex flex-col gap-8'>
			<p className='pt-[20px]'>Trusted by customer-led companies</p>
			<BrandCarousel />
		</MaxWidthContainer>
	);
}
