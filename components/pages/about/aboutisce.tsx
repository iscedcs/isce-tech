import MaxWidthContainer from '@/components/ui/container'
import { Separator } from '@/components/ui/separator'
import Image from 'next/image'
import React from 'react'

export default function AboutIsce() {
    return (
        <MaxWidthContainer className="mx-auto ">
            <div className='mt-20 '>
                <div className=' text-white py-2 '>
                    <h4 className='text-start font-normal py-2'>{`OUR STORY`}</h4>
                    <h1 className='text-start font-bold py-2 text-5xl w-1/2'>{`We’re a passionate group of people working from all over the world to build the future of collaboration.`}</h1>
                </div>
                <div className='space-y-6 w-full justify-center items-center '>
                    <Image width={1200} height={1200} src='/images/first.jpg' alt='' className='w-full h-full' />
                </div>
                <div className="  p-6 shadow-lg rounded-lg flex flex-col lg:flex-row lg:space-x-6">
                    <div className="space-y-4 lg:w-1/3">
                        <div className="space-y-2">
                            <p className="font-bold text-white">{`2021`}</p>
                            <p className="text-white">{`Founded`}</p>
                        </div>
                        <div className="space-y-2">
                            <p className="font-bold text-white">{`100%`}</p>
                            <p className="text-white">{`Remote`}</p>
                        </div>
                        <div className="space-y-2">
                            <p className="font-bold text-white">{`$6.4M`}</p>
                            <p className="text-white">{`Raised`}</p>
                        </div>
                    </div>
                    <Separator orientation='vertical' />
                    <div className="lg:w-2/3">
                        <p className="text-white py-3 font-normal">
                            {`Liveblocks first launched in 2021, but our story started a couple of years earlier when Guillaume Salles and
                        Steven Fabre met and started working closely together on real-time creative tools.`}
                        </p>
                        <p className="text-white">
                            {`They first connected when they were both working on the design tools team at InVision: Guillaume as an
                        engineer and Steven as a product designer. They bonded at an in-person team event in San Francisco over
                        being the only two French people in the company, and also their shared passion for making creative tools.`}
                        </p>
                        <p className="text-white mt-4">
                            {`They eventually decided to leave their jobs to focus their efforts full-time on building a Google Slides
                        competitor. The first several months were difficult. Guillaume was working from Montreal and Steven was
                        working from New York, and they struggled to find a solution that would enable them to build a tool with the
                        multiplayer functionality that was so critical. The tools they did manage to find had myriad problems. They
                        didn’t integrate easily into their infrastructure, made it difficult to build a version history panel and
                        multiplayer undo/redo, were optimized for text collaboration rather than layer-based creative tools and
                        required them to cobble multiple services together in order to have something work end-to-end.`}
                        </p>
                        <p className="text-white mt-4">
                            {`Eventually they decided to create their own. Along the way, they realized that if they were having this
                        problem, other companies must be as well. And so they decided to drop the presentation tool, and focus on
                        turning the powerful backend they’d built into a set of APIs that any team could use to build real-time
                        collaborative products.`}
                        </p>
                        <p className="text-white mt-4">{`And that’s how Liveblocks was born.`}</p>
                    </div>
                </div>
            </div>
        </MaxWidthContainer>
    )
}

