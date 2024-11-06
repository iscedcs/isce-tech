import MaxWidthContainer from '@/components/ui/container';
// import { Separator } from '@/components/ui/separator';
// import { CircleIcon } from '@/lib/svg';
// import Image from 'next/image';
// import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import React from 'react';

export default function Privacy() {
  return (
    <MaxWidthContainer className="mx-auto ">
    <div className="container mx-auto px-4 py-8">
      <Card className="max-w-4xl mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Privacy Policy</CardTitle>
          <CardDescription>Last updated: {new Date().toLocaleDateString()}</CardDescription>
        </CardHeader>
        <CardContent className="prose prose-sm sm:prose lg:prose-lg">
          <section>
            <h2 className="text-2xl font-semibold mt-6 mb-4">1. Introduction</h2>
            <p>
              Welcome to ISCE. We are committed to protecting your personal information and your right to privacy. This privacy policy describes how we collect, use, and share your information when you use our services.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-6 mb-4">2. Information We Collect</h2>
            <p>
              We collect information that you provide directly to us, such as when you create an account, use our services, or communicate with us. This may include:
            </p>
            <ul className="list-disc pl-6">
              <li>Personal information (e.g., name, email address, phone number)</li>
              <li>Payment information</li>
              <li>Communication preferences</li>
              <li>Any other information you choose to provide</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-6 mb-4">3. How We Use Your Information</h2>
            <p>
              We use the information we collect for various purposes, including:
            </p>
            <ul className="list-disc pl-6">
              <li>Providing and improving our services</li>
              <li>Communicating with you</li>
              <li>Personalizing your experience</li>
              <li>Processing payments</li>
              <li>Complying with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-6 mb-4">4. Sharing Your Information</h2>
            <p>
              We may share your information with third parties in certain circumstances, such as:
            </p>
            <ul className="list-disc pl-6">
              <li>With your consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and the rights of others</li>
              <li>In connection with a business transfer or transaction</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-6 mb-4">5. Your Rights and Choices</h2>
            <p>
              You have certain rights regarding your personal information, including:
            </p>
            <ul className="list-disc pl-6">
              <li>Accessing and updating your information</li>
              <li>Opting out of marketing communications</li>
              <li>Requesting deletion of your information</li>
              <li>Objecting to certain uses of your information</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-6 mb-4">6. Security</h2>
            <p>
              We take reasonable measures to help protect your personal information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-6 mb-4">7. Changes to This Privacy Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page and updating the 2024 date at the top of this policy.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mt-6 mb-4">8. Contact Us</h2>
            <p>
              If you have any questions about this privacy policy or our practices, please contact us at:
            </p>
            <p className="mt-2">
              [Your Company Name]<br />
              [Your Address]<br />
              Email: [Your Email]<br />
              Phone: [Your Phone Number]
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
    </MaxWidthContainer>
  );
}