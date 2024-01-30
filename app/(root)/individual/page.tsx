'use client';
import React from 'react';
import Image from 'next/image';
import ClickBtn from '@/components/isce-product/individual/clickbtn';
import Cards from '@/components/isce-product/individual/cards';
import { CLICK_BUTTON, CLICK_BUTTONS } from '@/lib/const';
import MaxWidthContainer from '@/components/ui/container';

const Individual = () => {
	const [selected, setSelected] = React.useState({
		image: CLICK_BUTTONS[0].image,
		text: CLICK_BUTTONS[0].text,
	});

	return (
		<div className="bg-black w-full mx-auto">
		<MaxWidthContainer>
            <div className="mt-8 space-y-8 ">
				<div className=' text-white py-2 '>
					<h1  className="text-start font-bold py-2 xl:text-5xl xl:w-1/2 w-full text-3xl "> {`For Individual`} </h1>		
		        </div>
				<div className='space-y-6 w-full mb-4 justify-center object-cover object-center items-center '>
					<Image
						width={1200}
						height={1200}
						src='/images/top-individual.jpg'
						alt=''
						className=' w-11/12 lg:w-full h-full rounded-md'
					/>
				</div>
		    </div>
			<div className='flex'>
				<div className='w-full lg:w-1/2 '>
					<div className='py-10 px-10'>
						{CLICK_BUTTON.map((item, i) => (
							<ClickBtn
								key={i}
								button={item.button}
								image={item.image}
								text={item.text}
								selected={item.image === selected.image}
								setSelected={setSelected}
							/>
						))}
					</div>
				</div>
				<div className='hidden lg:flex w-1/2 justify-center items-center'>
					<div className='mt-4 w-full flex flex-col gap-4'>
						<Image
							width={600}
							height={600}
							src={selected.image}
							alt='Image'
							className=''
						/>
						<p className=' text-white text-center'>
							{selected.text}
						</p>
					</div>
				</div>
			</div>
			<h2 className=' text-white font-bold xl:text-5xl text-2xl text-center pt-16 py-6'>
				{`How to receive money on your phone`}
			</h2>
			<div className='flex flex-col md:flex-row flex-wrap justify-center mx-auto'>
				<Cards
					image='/images/card1.avif'
					num={1}
					text='Download and open the softpos.com | Terminal.'
				/>
				<Cards
					image='/images/card2.avif'
					num={2}
					text='Enter the payment amount you wish to accept.'
				/>
				<Cards
					image='/images/card3.avif'
					num={3}
					text="Tap the other person's card or mobile device onto the back of your phone."
				/>
				<Cards
					image='/images/card4.avif'
					num={4}
					text='Receive the money into your bank account.'
				/>
			</div>
		</MaxWidthContainer>
		</div>
	);
};

export default Individual;
