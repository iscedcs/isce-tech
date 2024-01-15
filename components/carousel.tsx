'use client';
import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import HeaderCarouselDisplay from './carouseldisplay';

export function HeaderCarouselComp() {
	return (
		<Carousel
			opts={{
				align: 'start',
			}}
			plugins={[
				Autoplay({
					delay: 5000,
				}),
			]}
			className='w-full'
		>
			<CarouselContent>
				<CarouselItem>
					<HeaderCarouselDisplay
						header='ISCE Tech'
						content='ISCE is a tech company that primarily leverages in NFC technology to
          simplify daily living by contactless solutions to anyone.'
						link=''
						className="bg-[url('/images/first.jpg')]"
						buttonTitle='Call to action'
					/>
				</CarouselItem>
				<CarouselItem>
					<HeaderCarouselDisplay
						header='A header'
						content='ISCE is a tech company that primarily leverages in NFC technology to
          simplify daily living by contactless solutions to anyone.'
						link=''
						className="bg-[url('/images/second.jpg')]"
						buttonTitle='Call to action'
					/>
				</CarouselItem>
				<CarouselItem>
					<HeaderCarouselDisplay
						header='A header'
						content='ISCE is a tech company that primarily leverages in NFC technology to
          simplify daily living by contactless solutions to anyone.'
						link=''
						className="bg-[url('/images/third.jpg')]"
						buttonTitle='Call to action'
					/>
				</CarouselItem>
				<CarouselItem>
					<HeaderCarouselDisplay
						header='ISCE Tech'
						content='ISCE is a tech company that primarily leverages in NFC technology to
          simplify daily living by contactless solutions to anyone.'
						link=''
						className="bg-[url('/images/fourth.jpg')]"
						buttonTitle='Call to action'
					/>
				</CarouselItem>
				<CarouselItem>
					<HeaderCarouselDisplay
						header='ISCE Tech'
						content='ISCE is a tech company that primarily leverages in NFC technology to
          simplify daily living by contactless solutions to anyone.'
						link=''
						className="bg-[url('/images/fifth.jpg')]"
						buttonTitle='Call to action'
					/>
				</CarouselItem>
				<CarouselItem>
					<HeaderCarouselDisplay
						header='ISCE Tech'
						content='ISCE is a tech company that primarily leverages in NFC technology to
          simplify daily living by contactless solutions to anyone.'
						link=''
						className="bg-[url('/images/sixth.jpg')]"
						buttonTitle='Call to action'
					/>
				</CarouselItem>
			</CarouselContent>
		</Carousel>
	);
}
