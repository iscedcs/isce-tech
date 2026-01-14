import GetQoute from '@/components/pages/get-quote/get-quote';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Get a Quote",
  description: "Request a custom quote for ISCE NFC solutions. Get personalized pricing for your business or individual needs.",
  openGraph: {
    title: "Get a Quote | ISCE",
    description: "Request a custom quote for ISCE NFC solutions. Get personalized pricing for your business or individual needs.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get a Quote | ISCE",
    description: "Request a custom quote for ISCE NFC solutions. Get personalized pricing for your business or individual needs.",
  },
};

export default function Quote() {
	return <GetQoute />;
}
