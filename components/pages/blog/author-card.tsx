import { urlFor } from '@/sanity/lib/image';
import Image from 'next/image';

export default function AuthorCard({ author }: { author: IAuthorCard }) {
	// Check if author.image is defined before accessing its properties
	const imageUrl = author.image?.asset
		? urlFor(author.image.asset).url()
		: '';

	return (
		<div className='h-10 w-10 flex-shrink-0 '>
			{imageUrl && (
				<Image
					src={imageUrl}
					alt={author.name}
					className='h-10 w-10 rounded-full border-2 object-cover'
					height={100}
					width={100}
				/>
			)}
		</div>
	);
}
