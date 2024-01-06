import { FacebookIcon, InstagramIcon, TwitterIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
	return (
		<main className='flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-950 to-foreground text-white p-4'>
			<h1 className='text-4xl mb-4 flex flex-col items-center space-x-2'>
				<Image
					alt='Company Logo'
					className='mb-2'
					height='200'
					src='/fi-white.webp'
					width='200'
				/>
				<div>Under Construction</div>
			</h1>
			<p className='text-center mb-8'>
				We are currently working on this website and it will be
				ready soon. Thank you for your patience!
			</p>

			<div className='flex space-x-4'>
				<Link href='https://twitter.com/isceapp/'>
					<TwitterIcon className='h-6 w-6 text-blue-400' />
				</Link>
				<Link href='https://www.instagram.com/isce.app/'>
					<InstagramIcon className='h-6 w-6 text-pink-600' />
				</Link>
			</div>
		</main>
	);
}
