import React from "react";
import { Assistant } from "next/font/google";

const assistant = Assistant({ subsets: ["latin"] });

export default function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={`${assistant.className}`}>{children}</div>;
}
