import MaxWidthContainer from '@/components/ui/container';
import React from 'react';
import BrandCarousel from './brandCarousel';


export default function TrustedBrands() {
	return (
		<MaxWidthContainer className='py-10 border-y text-background text-center flex flex-col gap-8'>
			<p className='pt-[20px] font-2xl'>Trusted by customer-led companies</p>
			<BrandCarousel />
		</MaxWidthContainer>
	);
}
