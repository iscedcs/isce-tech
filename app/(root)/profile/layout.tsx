import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "My Profile",
  description: "Manage your ISCE profile, view your digital cards, and access your account settings.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
