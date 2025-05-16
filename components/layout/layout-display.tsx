"use client";
import React from "react";
import NavComp from "./nav";
import { Toaster } from "../ui/sonner";
import Footer from "./footer";
import { usePathname } from "next/navigation";

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
      {/* {pathname === "/profile" ? null : <NavComp />} */}
      <Toaster />
      {pathname === "/profile" ? null : <Footer />}
    </div>
  );
}
