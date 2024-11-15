'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { PortableText } from '@portabletext/react';
import { urlFor } from '@/sanity/lib/image';
import AuthorCard from './author-card';
import { cn } from '@/lib/utils';

export default function BlogCard({ post }: { post: IPost}) {
	return (
		<div className="max-w-xs w-full group/card">

		<div
		className={cn(
			" cursor-pointer bg-background overflow-hidden relative card md:h-full lg:h-full xl:h-[450px] rounded-md shadow-xl  max-w-sm mx-auto backgroundImage flex flex-col flex-wrap justify-between p-4 ",
		
		)}			
		>
			<div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-primary opacity-50"></div>
			<div className='flex flex-row items-center space-x-4 z-10'>
				<Link
						href={`/blog/${post.slug.current}`}
						className='text-foreground mt-2 text-xs uppercase'
					>
				<div className='w-full aspect-video'>
					<Image
						width={350}
						height={400}
						src={urlFor(post.mainImage.asset).url()}
						alt={post.title}
						className='h-full w-full object-cover object-center'
					/>
				</div>
				<div className='py-4 max-w-md'>
					<h1 className='text-xl font-semibold'>{post.title}</h1>
					<div className=' line-clamp-2 text-foreground mb-3 font-normal text-sm relative z-10 my-4'>
						<PortableText value={post.body} />
					</div>
					<div className='flex items-center space-y-3 justify-between w-full text-foreground text-xs mb-2'>
						<div className=''>
							<div className='grid capitalize font-bold text-sm md:text-sm relative'>
								{new Date(
									post._createdAt
								).toDateString()}{' '}
							</div>
							<div className='capitalize'>
								{post.author.name}
							</div>
						</div>
						<AuthorCard author={post.author} />
					</div>
					
					
						Read More
					
				</div>
				</Link>
			</div>
			
		</div>
		</div>

	);
}
