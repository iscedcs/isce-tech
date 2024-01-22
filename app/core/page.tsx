import Core from '@/components/corevaluecards/core';
import ServiceRendered from '@/components/corevaluecards/serviceRendered';
import { YoutubeIcon } from 'lucide-react';
import React from 'react';

function coreValues() {
	return (
		<main>
			<div>
				<Core />
			</div>
			<div className=''>
				<ServiceRendered />
			</div>
		</main>
	);
}

export default coreValues;
