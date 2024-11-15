import FormError from '@/components/formError';
import BlogCard from '@/components/pages/blog/blog-card';
import MaxWidthContainer from '@/components/ui/container';
import { client } from '@/sanity/lib/client';
import React from 'react'


async function getData() {
	/**This query is to get the latest posts from sanity */
	const lastestPostQuery = `*[_type == 'post'] | order(_createdAt desc)[0...5]{
	title,
	_createdAt,
	author->,
	mainImage,
	body,
	slug,
	preview->
	}`;

	/**This query is meant to fetch and display all post tagged featured posts */
	const featuredPostsQuery = `*[_type == 'post' && featured == true] | order(_createdAt desc)[0...5] {
		title,
		_createdAt,
		author->,
		mainImage,
		body,
		slug,
		preview->
	}`

	/** This query is to fetch and display all post */
	const allPostsQuery = `*[_type == 'post'] | order(_createdAt desc) {
		title,
		_createdAt,
		author->,
		mainImage,
		body,
		slug,
		preview->
	}`

	/** This action is to query all of the above*/ 

	const [latestPosts, featuredPosts, allPosts] = await Promise.all([
		client.fetch(lastestPostQuery),
		client.fetch(featuredPostsQuery),
		client.fetch(allPostsQuery),
	])

	return {latestPosts, featuredPosts, allPosts};
	// const data = await client.fetch(query);
}

export const revalidate = 60;

export default async function BlogPage() {

	const {latestPosts, featuredPosts, allPosts} = await getData();
	// const posts: IPost[] = await getData();
	// const posts = (await getData()) as IPost[];


		return (
			<div className=' bg-black text-background  py-24'>
				<MaxWidthContainer>
				<h1 className="text-2xl pt-3 font-bold">The Time Square</h1>
					<p>
						Lets keep you <u className="font-bold">Up-To-Date</u>
					</p>

        <div className="w-full justify-between grid grid-cols-1 md:grid-cols-2 xl:grid-cols-2 gap-6">
          <div className="mt-10 w-full  ">
            <h2 className="text-xl font-bold mb-3">Latest Posts</h2>
            <div className=" w-full mx-auto items-center justify-center grid md:grid-cols-2 gap-3 ">
              {latestPosts.map((post: IPost, k: React.Key ) => (
                <BlogCard key={k} post={post} />
              ))}
            </div>
          </div>
          
          <div className="mt-10 w-full">
            <h2 className="text-xl font-bold mb-3">Featured Posts</h2>
            <div className="w-full mx-auto items-center justify-center grid md:grid-cols-2 gap-3">
              {featuredPosts.map((post: IPost, k: React.Key) => (
                <BlogCard key={k} post={post} />
              )) }
            </div>
          </div>      
        </div>
      <div className="mt-10 w-full ">
        <h2 className="text-xl font-bold mb-3">All Posts</h2>
          <div className="flex md:flex-row flex-col mx-auto md:items-start gap-4 items-center md:justify-start justify-center">
            {allPosts.map((post: IPost, k: React.Key) => (
              <BlogCard key={k} post={post} />
            ))}
          </div>
      </div>
	  </MaxWidthContainer>
	</div>
	)
}
