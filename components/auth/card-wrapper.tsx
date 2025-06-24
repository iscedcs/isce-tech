import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from '../ui/card';
import HeaderComp from './header';
import BackButton from './back-button';


interface CardWrapperprops {
	children: React.ReactNode;
	headerLabel: string;
	backButtonLabel: string;
	backButtonHref: string;
	showSocial?: boolean;
}

export default function CardWrapper({
	children,
	headerLabel,
	backButtonLabel,
	backButtonHref,
}: CardWrapperprops) {
	return (
		<Card className='w-[350px] shadow-md '>
			<CardHeader>
				<HeaderComp label={headerLabel} />
			</CardHeader>
			<CardContent>{children}</CardContent>
			
			<CardFooter>
				<BackButton
					label={backButtonLabel}
					href={backButtonHref}
				/>
			</CardFooter>
		</Card>
	);
}
