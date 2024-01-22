import React from 'react';

export default function VideoHeader() {
	return (
		<div className='w-full  bg-fixed h-screen bg-cover bg-center'>
			<div className='w-full h-screen bg-gradient-to-r from-[#000000] to-[#13121299] opacity-90'></div>
			{/* <video
				src={COMPANY_PROFILE.heroVideo}
				autoPlay
				loop
				muted
				className='w-full h-screen object-cover object-center'
			/> */}
			<div className='flex justify-center items-center'>
				<div className='text-white text-center w-full mx-auto absolute top-[50%] translate-y-[-50%]'>
					<h1 className='lg:text-[80px] text-[50px] text-center font-bold'>
						ISCE TECH
					</h1>
					<p className='lg:w-[40%] w-[90%] mx-auto'>
						ISCE is a tech company that primarily leverages in
						NFC technology to simplify daily living by
						contactless solutions to anyone.
					</p>
					<div className='flex gap-2 justify-center mt-3'>
						<a href=''>
							<button className='transition-all duration-300 hover:bg-white hover:text-black bg-black py-3 px-5'>
								Explore Services
							</button>
						</a>
						<a href=''>
							<button className='transition-all duration-300 hover:bg-black hover:text-white bg-[#fff] text-black py-3 px-5'>
								Contact Us
							</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
