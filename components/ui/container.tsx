import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

export default function MaxWidthContainer({
	className,
	children,
}: {
	className?: string;
	children: ReactNode;
}) {
	return (
		<div
			className={cn(
				'max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-20',
				className
			)}
		>
			{children}
		</div>
	);
}
