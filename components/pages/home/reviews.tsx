import React from 'react';
import Image from 'next/image';

export default function Reviews({ review, name, title, image }: IReview) {
	return (
		<div>
			<p className=' line-clamp-6 sm:line-clamp-none'>{review}</p>
			<div className='flex pb-[40px] justify-center mt-[20px] items-center gap-4'>
				<Image
					src={image}
					width='100'
					height='100'
					alt='Person'
					className='rounded-full'
				></Image>
				<div className='text-left'>
					<p className='text-[30px] font-bold'>{name}</p>
					<p className='text-[12px]'>{title}</p>
				</div>
			</div>
		</div>
	);
}
