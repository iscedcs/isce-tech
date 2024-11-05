import ContactComponent from '@/components/pages/contact/contact-form';
import MaxWidthContainer from '@/components/ui/container';
import React from 'react';

export default function Contact() {
	return (
		<div className='bg-black '>
			<MaxWidthContainer>
				<ContactComponent />
			</MaxWidthContainer>
		</div>
	);
}
