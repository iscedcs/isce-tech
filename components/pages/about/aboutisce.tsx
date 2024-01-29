import MaxWidthContainer from '@/components/ui/container';
import { Separator } from '@/components/ui/separator';
import { CircleIcon } from '@/lib/svg';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function AboutIsce() {
	return (
		<MaxWidthContainer className='mx-auto '>
			<div className='mt-20 '>
				<div className=' text-white py-2 '>
					<h4 className='text-start font-normal py-2 text-xl'>{`OUR STORY`}</h4>
					<h1 className='text-start font-bold py-2 xl:text-5xl xl:w-1/2 w-full text-3xl '>{`We’re a passionate group of people working together to build the future of innovation.`}</h1>
				</div>
				<div className='space-y-6 w-full justify-center items-center '>
					<Image
						width={1200}
						height={1200}
						src='/images/group.jpg'
						alt=''
						className='w-full h-full'
					/>
				</div>
				<div className=' flex flex-col p-6 shadow-lg rounded-lg mx-auto justify-center  items-center lg:flex-row w-full lg:space-x-6'>
					<div className='xl:space-y-4 lg:space-y-4  my-6 gap-6 flex xl:flex-col lg:flex-col md:flex-row  sm:flex-row items-center justify-center xl:justify-start lg:justify-start xl:items-start  lg:w-1/3'>
						<div className='space-y-2'>
							<p className='font-bold text-white'>{`2021`}</p>
							<p className='text-white'>{`Founded`}</p>
						</div>
						<div className='space-y-2'>
							<p className='font-bold text-white'>{`100%`}</p>
							<p className='text-white'>{`Remote`}</p>
						</div>
						<div className='space-y-2'>
							<p className='font-bold text-white'>{`$2.4M`}</p>
							<p className='text-white'>{`Raised`}</p>
						</div>
					</div>
					<Separator orientation='vertical' />
					<div className='xl:w-2/3 w-full text-xl '>
						<p className='text-white py-3 font-normal'>
							{`At ISCE Tech, our journey began in 2021, fueled by a collective passion for innovation and a vision to redefine the landscape of technology. From humble beginnings, we embarked on a mission to simplify and enhance daily living through cutting-edge solutions.`}
						</p>
						<p className='text-white'>
							{`Driven by the spirit of exploration, we embraced the challenges of our dynamic industry, adapting and evolving with each technological shift. Our commitment to being an Innovative Solution Creation & Exploration Company (ISCE) became the guiding force behind every endeavor.`}
						</p>
						<p className='text-white mt-4'>
							{`Over the years, we've empowered communities, connected businesses, and facilitated a seamless integration of technology into the fabric of daily life. Our story is one of continuous learning, where each milestone is a testament to the dedication of our team, the brilliance of our solutions, and the relationships we've forged along the way.`}
						</p>
						<p className='text-white mt-4'>
							{`As we 'Stay ISCE', we revel in our craft, taking ownership of our contributions and celebrating the spirit of invention. Our journey is marked by a commitment to excellence, integrity, and the relentless pursuit of delivering results that make a difference.`}
						</p>
						<p className='text-white mt-4'>
							{`Looking ahead, we remain steadfast in our mission to pioneer transformative solutions, staying true to the innovative spirit that defines ISCE Tech. Our story is an ongoing narrative of exploration, creation, and the unwavering belief that technology, when harnessed thoughtfully, has the power to shape a better, more connected world.`}
						</p>
						<p className='text-blue-600 mt-4 '>
							<Link href='/#'>{`And that’s how ISCE was born.`}</Link>
						</p>
					</div>
				</div>
				<Separator orientation='horizontal' />
				<div className='items-center justify-center text-white mx-auto'>
					<h4 className='text-center font-normal py-2 my-4 text-xl'>{`Our Mission`}</h4>
					<div className=' text-white p-12'>
						<div className='max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12'>
							<div className='flex'>
								<CircleIcon className='text-[#f15a24] mr-4' />
								<div>
									<h2 className='text-xl font-semibold mb-2'>{`Empower community`}</h2>
									<p>{`We believe in the transformative power of technology to uplift communities. Through our solutions, we strive to empower individuals, businesses, and societies, fostering positive change and creating a connected world where opportunities abound.`}</p>
								</div>
							</div>
							<div className='flex'>
								<CircleIcon className='text-blue-600 mr-4' />
								<div>
									<h2 className='text-xl font-semibold mb-2'>{`Revel in your craft`}</h2>
									<p>{`We encourage every member of the ISCE Tech family to revel in their craft. Innovation flourishes in an environment where passion and expertise converge. By embracing and celebrating the artistry of technology, we unlock boundless potential and push the boundaries of what's possible.`}</p>
								</div>
							</div>
							<div className='flex'>
								<CircleIcon className='text-blue-600 mr-4' />
								<div>
									<h2 className='text-xl font-semibold mb-2'>{`Stay ISCE`}</h2>
									<p>{`To 'Stay ISCE' is to embody the spirit of an Innovative Solution Creation & Exploration Company. It means embracing curiosity, constantly seeking new horizons, and fearlessly navigating uncharted territories. At ISCE Tech, we stay true to our roots as pioneers of exploration and creators of inventive solutions.`}</p>
								</div>
							</div>
							<div className='flex'>
								<CircleIcon className='text-[#f15a24]  mr-4' />
								<div>
									<h2 className='text-xl font-semibold mb-2'>{`Take ownership`}</h2>
									<p>{`We encourage each team member to take ownership of their work, projects, and contributions. By assuming responsibility and accountability, we collectively build a culture of reliability, excellence, and shared success.`}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<Separator orientation='horizontal' />
				<div className='items-center text-center space-y-3  justify-center mx-auto text-white '>
					<h1 className='font-normal py-2 my-4 text-xl'>{`Our Vision`}</h1>
					<h1 className='font-bold xl:text-5xl text-2xl'>{`It’s all about the people`}</h1>
					<p className='xl:w-1/2 w-full mx-auto py-4 font-normal text-lg'>{`To be global leader in innovative software solutiions; Empowering individual and businesses through cutting-edge technology to enhance efficiency, security, and connectivity.`}</p>
					<div className='space-y-6 w-full mb-6 justify-center items-center '>
						<Image
							width={850}
							height={850}
							src='/images/Build.png'
							alt=''
							className='w-full h-full mx-auto'
						/>
					</div>
				</div>
			</div>
		</MaxWidthContainer>
	);
}
