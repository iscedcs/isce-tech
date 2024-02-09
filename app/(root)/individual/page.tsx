'use client';
import React from 'react';
import Image from 'next/image';
import ClickBtn from '@/components/isce-product/individual/clickbtn';
import Cards from '@/components/isce-product/individual/cards';
import { CLICK_BUTTON, CLICK_BUTTONS } from '@/lib/const';
import MaxWidthContainer from '@/components/ui/container';
import Process from '@/components/isce-product/individual/process-section';

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
					<p className='text-start py-2 xl:text-2xl xl:w-1/2 w-full'>{`Now you can cater for all your digital needs with one tap. Share contacts, manage events, manage store and more, all in one nfc enabled card.`}</p>	
		        </div>
				<div className='space-y-6 w-full mb-4 justify-center object-cover object-center items-center '>
					<Image
						width={1200}
						height={1200}
						src='/images/top-individual.jpg'
						alt=''
						className=' w-full lg:w-full h-full rounded-md'
					/>
				</div>
		    </div>
			<div>
				<Process/>
			</div>
			<div className='flex space-x-3'>
				<div className='w-full lg:w-1/2 '>
					<div className=''>
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
					<div className='mt-4 w-full h-auto flex flex-col gap-4'>
						<Image
							width={600}
							height={600}
							src={selected.image}
							alt='Image'
							className='rounded-2xl overflow-clip sm:rounded-2xl sm:overflow-clip'
						/>
						<p className=' text-white text-center'>
							{selected.text}
						</p>
					</div>
				</div>
			</div>
			<h2 className=' text-white font-bold xl:text-3xl text-2xl text-center pt-16 py-6 mb-4'>
				{`How to use ISCE Digital Card on your device`}
			</h2>
			<div className='flex flex-col md:flex-row flex-wrap justify-center mx-auto'>
				<Cards
					image='/images/card1.png'
					num={1}
					text={`Ensure that NFC is enabled on your smartphone, tablet, or any other compatible device. You can find this option in your device settings, often under the "Connections" or "Network" section.`}
				/>
				<Cards
					image='/images/card2.png'
					num={2}
					text={`Hold the NFC card close to the NFC-enabled area on your device. The location of the NFC antenna may vary depending on the device; it's commonly found at the back or near the top edge.`}
				/>
				<Cards
					image='/images/card3.png'
					num={3}
					text={`Once the NFC card is in close proximity to the NFC-enabled area of your device, wait for the connection to be established. This is usually indicated by a sound or vibration, and on-screen prompts may appear.`}
				/>
				<Cards
					image='/images/card4.png'
					num={4}
					text={`Depending on the NFC card and the associated application, the interaction may trigger various actions. This could include making a payment, accessing information, or initiating a specific function related to the NFC card. Follow any on-screen instructions to complete the desired action.`}
				/>
			</div>
		</MaxWidthContainer>
		</div>
	);
};

export default Individual;
