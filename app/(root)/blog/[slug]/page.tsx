import FormError from "@/components/formError";
import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import { Metadata, ResolvingMetadata } from "next";
import { PortableText } from "next-sanity";
import { revalidatePath } from "next/cache";
import Image from "next/image";
import React from "react";

async function getData(slug: string) {
  const query = `*[_type == 'post' && slug.current == "${slug}"][0]{
    title,
    _createdAt,
    author->,
    mainImage,
    body,
    slug,
  }`;
  const data = await client.fetch(query);
  return data;
}

const PortableTextImage = ({
  value,
}: {
  value: { asset: {}; alt: string };
}) => {
  return (
    <div className="grid shadow-lg rounded-2xl overflow-hidden my-5 border">
      <Image
        src={urlFor(value.asset).url()}
        alt={value.alt}
        width={900}
        height={300}
        loading="lazy"
        className="mx-auto w-full aspect-[2/1] object-cover object-center"
      />
      <div className="h-10 w-full bg-primary grid place-items-center">
        {value.alt}
      </div>
    </div>
  );
};

/**
 *
 * @returns MetaData
 */
export async function generateMetadata(
  {
    params,
  }: {
    params: { slug: string };
  },
  parent: ResolvingMetadata
): Promise<Metadata> {
  const previousImage = (await parent).openGraph?.images || [];
  const post = (await getData(params.slug)) as IPost | null;

  if (!post) {
    return {
      title: "Blog post not found",
      description: "The requested blog post could not be found.",
      openGraph: {
        images: [...previousImage],
      },
    };
  }

  return {
    title: post.title,
    openGraph: {
      images: [urlFor(post.mainImage.asset).url(), ...previousImage],
    },
    description: post.overview,
  };
}

export default async function IndividualPost({
  params,
}: {
  params: { slug: string };
}) {
  const post: IPost = await getData(params.slug);
  if (!post) {
    return <FormError message="Blog post not found!" />;
  }
  revalidatePath("/blog");

  return (
    <div className="mx-auto max-w-3xl px-3 md:px-5">
      <div className="py-40 w-full">
        <h1 className="text-3xl font-semibold ">{post.title}</h1>
        <p className="text-primary text-sm mb-2">
          {new Date(post._createdAt).toDateString()} by {post.author.name}
        </p>
        <div className="w-full aspect-video rounded-2xl overflow-hidden mb-10">
          <Image
            width={350}
            height={400}
            src={urlFor(post.mainImage.asset).url()}
            alt={post.title}
            quality={100}
            className="w-full h-full object-cover object-center "
          />
        </div>
        <div className="text-foreground flex flex-col gap-5">
          <PortableText
            value={post.body}
            components={{
              types: {
                image: PortableTextImage,
              },
            }}
          />
        </div>
      </div>
    </div>
  );
}
