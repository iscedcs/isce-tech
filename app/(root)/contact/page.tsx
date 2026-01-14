import ContactComponent from '@/components/pages/contact/contact-form';
import MaxWidthContainer from '@/components/ui/container';
import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Get in touch with ISCE. Have questions about our NFC solutions? Contact us today and let's discuss how we can help you.",
  openGraph: {
    title: "Contact Us | ISCE",
    description: "Get in touch with ISCE. Have questions about our NFC solutions? Contact us today and let's discuss how we can help you.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | ISCE",
    description: "Get in touch with ISCE. Have questions about our NFC solutions? Contact us today and let's discuss how we can help you.",
  },
};

export default function Contact() {
	return (
		<div className='bg-black '>
			<MaxWidthContainer>
				<ContactComponent />
			</MaxWidthContainer>
		</div>
	);
}
