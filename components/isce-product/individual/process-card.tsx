import { CloudLightningIcon } from 'lucide-react';
import React, { ReactNode } from 'react'

export default function ProcessCard({title, description, icon}:{title: string; description:string; icon: ReactNode; }) {
  return (
    <div className="transition ease-in-out delay-150 hover:-translate-y-2 hover:scale-95 duration-700 text-white">
        <div className="flex flex-col items-center p-4 bg-gray-800 rounded-lg">
          <div className="flex items-center space-x-2">
            <CloudLightningIcon className="text-[#38bdf8] h-6 w-6" />
            <h3 className="mt-2 text-lg font-semibold text-white">
              {`Instant Access`}
            </h3>
          </div>
          <p className="mt-2 text-sm text-gray-300">
            {` Seamlessly transition from tradition to digital. Click on the result, and
            you'll find yourself in a digital, ready to analyze, or share
            the specific data you you wish to share.`}
          </p>
        </div>
      </div>
  )
}
