import Privacy from '@/components/pages/privacy/privacypolicy'
import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Read ISCE's privacy policy to understand how we collect, use, and protect your personal information when using our services.",
  openGraph: {
    title: "Privacy Policy | ISCE",
    description: "Read ISCE's privacy policy to understand how we collect, use, and protect your personal information when using our services.",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <div className="bg-foreground">
        <Privacy/>
    </div>
  )
}
