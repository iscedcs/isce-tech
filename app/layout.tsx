import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NavComp from '@/components/layout/nav';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: {
		template: '%s | ISCE',
		default: 'ISCE',
	},
	description: 'We design your imagination',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			
			<body className={inter.className}>
			<NavComp/>
				{children}
			</body>
		</html>
	);
}
