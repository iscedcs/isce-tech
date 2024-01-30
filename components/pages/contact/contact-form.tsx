import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';

export default function ContactComponent() {
	return (
		<div className='bg-black text-white min-h-screen flex flex-col items-center justify-center'>
			<div className='w-full max-w-4xl mx-auto p-8'>
				<h1 className='text-6xl font-bold text-center'>
					{`Contact us`}
				</h1>
				<p className='text-xl text-center mt-4 mb-12'>
					{`Get in touch and let us know how we can help.`}
				</p>
				<div className='flex flex-wrap justify-between -mx-4'>
					<div className='w-full lg:w-1/2 px-4 mb-8 lg:mb-0'>
						<h2 className='text-2xl font-semibold mb-6'>
							{`General enquiries`}
						</h2>
						<form className='space-y-6'>
							<div>
								<label
									className='block text-sm font-medium mb-1'
									htmlFor='name'
								>
									{`Name`}
								</label>
								<Input
									required
									className='w-full'
									id='name'
									placeholder='Jess Smith'
									type='text'
								/>
							</div>
							<div>
								<label
									className='block text-sm font-medium mb-1'
									htmlFor='email'
								>
									{`Email`}
								</label>
								<Input
									required
									className='w-full'
									id='email'
									placeholder='jess@company.com'
									type='email'
								/>
							</div>
							<div>
								<label
									className='block text-sm font-medium mb-1'
									htmlFor='message'
								>
									{`Message`}
								</label>
								<Textarea
									required
									className='w-full'
									id='message'
									placeholder='Write your message here'
								/>
							</div>
							<Button className='w-full'>
								{`Send message`}
							</Button>
						</form>
					</div>
					<div className='w-full lg:w-1/2 px-4'>
						<div className='mb-8'>
							<h3 className='text-xl font-semibold mb-2'>
								{`Sales`}
							</h3>
							<p className='mb-1'>
								{`We'd love to talk about how we can work
								together.`}
							</p>
							<a
								className='text-blue-400 hover:text-blue-500'
								href='#'
							>
								{`info@isce.tech`}
							</a>
						</div>
						<div>
							<h3 className='text-xl font-semibold mb-2'>
								{`Support`}
							</h3>
							<p className='mb-1'>
								{`We're here to help with any questions
								you may have.`}
							</p>
							<a
								className='text-blue-400 hover:text-blue-500'
								href='#'
							>
								{`support@isce.tech`}
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
