import Core from '@/components/corevaluecards/core'
import ServiceRendered from '@/components/corevaluecards/serviceRendered'
import { YoutubeIcon } from 'lucide-react'
import React from 'react'

function coreValues() {
  return (
    <main className='bg-[#0c0e16]'>
    <div>
      <Core />
    </div>
    <div className="">
      <ServiceRendered />
      <YoutubeIcon />
    </div>
    </main>
  )
}

export default coreValues