import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "For Individual",
  description: "Cater for all your digital needs with one tap. Share contacts, manage events, manage store and more, all in one NFC enabled card from ISCE.",
  openGraph: {
    title: "For Individual | ISCE",
    description: "Cater for all your digital needs with one tap. Share contacts, manage events, manage store and more, all in one NFC enabled card from ISCE.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "For Individual | ISCE",
    description: "Cater for all your digital needs with one tap. Share contacts, manage events, manage store and more, all in one NFC enabled card from ISCE.",
  },
};

export default function IndividualLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
