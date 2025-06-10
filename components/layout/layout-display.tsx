"use client";
import React from "react";
import NavComp from "./nav";
import { Toaster } from "../ui/sonner";
import Footer from "./footer";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

export default function LayoutDisplay({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <div>
      {pathname === "/profile" ? null : <NavComp />}
      {children}
      <Toaster richColors />
      {pathname === "/profile" ? null : <Footer />}
    </div>
  );
}
