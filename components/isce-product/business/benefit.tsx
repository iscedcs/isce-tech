import Image from 'next/image';
import React from 'react';

export default function Benefits({ image, title, description }: CardBenefitsP) {
	return (
		<div className='text-center grid grid-cols-1 items-center h-[500px] lg:h-[440px] bg-tertairy rounded-3xl text-white'>
			<Image
				width={600}
				height={600}
				className='w-full h-64 object-contain object-center'
				src={image}
				alt={title}
			/>
			<h2 className='text-[25px] font-bold'>{title}</h2>
			<p>{description}</p>
		</div>
	);
}
