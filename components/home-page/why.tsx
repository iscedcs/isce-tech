import React from 'react';
import MaxWidthContainer from '../ui/container';

export default function WhyChooseIsce() {
	return (
		<MaxWidthContainer className='text-background grid gap-5'>
			<div className='text-center'>
				<div className='text-5xl font-bold '>WHY CHOOSE ISCE</div>
			</div>
			<div className='grid md:grid-cols-2 gap-10 justify-center py-20'>
				<div className='flex flex-col max-w-[500px]'>
					<h1 className=' text-5xl leading-normal '>
						{`We are building `}
						<span className='uppercase bg-clip-text bg-gradient-to-br from-blue-600 via-purple-600 to-blue-600 text-transparent'>
							Customer Feedback Intelligence
						</span>
					</h1>
				</div>
				<div className='flex flex-col gap-5 text-2xl'>
					<h1 className='font-bold'>
						Enterpret enables companies to analyze their
						customer feedback at Scale
					</h1>
					<p className='font-light text-lg'>
						We are Solving Complex promblems in NLP, ml-ops,
						analytics, and data visualization. we also get
						very competitive playing Codenames
					</p>
				</div>
			</div>
		</MaxWidthContainer>
	);
}
