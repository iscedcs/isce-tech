import AboutIsce from '@/components/pages/about/aboutisce'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "About Us",
  description: "Learn about ISCE - We design your imagination. Discover our mission, values, and commitment to innovative NFC solutions.",
  openGraph: {
    title: "About Us | ISCE",
    description: "Learn about ISCE - We design your imagination. Discover our mission, values, and commitment to innovative NFC solutions.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | ISCE",
    description: "Learn about ISCE - We design your imagination. Discover our mission, values, and commitment to innovative NFC solutions.",
  },
};

export default function About() {
  return (
    <div className="bg-foreground">
        <AboutIsce/>
    </div>
  )
}
