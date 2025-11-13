"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  AlignJustify,
  X,
  ShoppingCart,
  ChevronDown,
  User,
  LogOut,
} from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { AnimatePresence, motion } from "framer-motion";
import { useCartStore } from "@/lib/store/cart-store";
import MaxWidthContainer from "../ui/container";

export default function NavComp() {
  const { data: session, status } = useSession();
  const { totalItems } = useCartStore();

  const user = session?.user;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);
  const [showProducts, setShowProducts] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  // Change nav background on scroll
  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Disable background scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  return (
    <nav
      className={`fixed w-full z-40 transition-all duration-300 ${
        scrolling
          ? "bg-primary/95 backdrop-blur-lg shadow-lg"
          : "bg-transparent"
      }`}>
      <MaxWidthContainer className="flex items-center justify-between py-4">
        {/* LOGO */}
        <Link href="/">
          <Image
            src="/fi-white.webp"
            alt="ISCE Logo"
            width={90}
            height={90}
            className="h-8 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 text-secondary">
          <Link href="/" className="hover:text-secondary/70">
            Home
          </Link>
          <Link href="/about" className="hover:text-secondary/70">
            About Us
          </Link>
          <Link href="/services" className="hover:text-secondary/70">
            Services
          </Link>
          <Link href="/profile" className="hover:text-secondary/70">
            Profile
          </Link>

          {/* Products dropdown */}
          <div className="relative group cursor-pointer">
            <div className="flex items-center gap-1 hover:text-secondary/70">
              Products <ChevronDown className="h-4 w-4" />
            </div>

            <div className="absolute hidden group-hover:flex flex-col bg-primary border border-secondary/10 rounded-lg p-4 mt-2 w-40 shadow-xl">
              <Link href="/individual" className="py-1 hover:text-secondary/70">
                For Individual
              </Link>
              <Link href="/business" className="py-1 hover:text-secondary/70">
                For Business
              </Link>
            </div>
          </div>

          <Link href="/contact" className="hover:text-secondary/70">
            Contact
          </Link>
          <Link href="/blog" className="hover:text-secondary/70">
            Blog
          </Link>
          <Link href="/store" className="hover:text-secondary/70">
            Store
          </Link>

          {/* Quote */}
          <Button
            variant="outline"
            size="sm"
            className="border-secondary text-primary">
            <Link href="/quote">GET A QUOTE</Link>
          </Button>

          {/* User / Login */}
          {status === "loading" ? null : user ? (
            <Button
              variant="outline"
              size="icon"
              className="border-secondary text-primary"
              onClick={() => signOut()}>
              <User className="h-4 w-4" />
            </Button>
          ) : (
            <Button
              size="sm"
              variant="outline"
              className="border-secondary text-primary"
              onClick={() => signIn()}>
              Login
            </Button>
          )}

          {/* Cart */}
          <Link href="/cart" id="nav-cart-icon" className="relative">
            <ShoppingCart className="h-5 w-5 text-secondary" />
            {totalItems > 0 && (
              <Badge className="absolute -top-2 -right-2 bg-secondary text-primary h-5 w-5 flex items-center justify-center p-0">
                {totalItems}
              </Badge>
            )}
          </Link>
        </div>

        {/* Mobile: Burger Icon */}
        <button className="md:hidden text-secondary" onClick={toggleMenu}>
          <AlignJustify className="h-7 w-7" />
        </button>
      </MaxWidthContainer>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 right-0 w-3/4 sm:w-1/2 h-screen bg-primary z-50 shadow-xl p-6 flex flex-col">
            {/* Header */}
            <div className="flex justify-between items-center mb-8">
              <Image
                src="/fi-white.webp"
                width={80}
                height={80}
                alt="logo"
                className="h-7 w-auto"
              />
              <button onClick={closeMenu}>
                <X className="h-7 w-7 text-secondary" />
              </button>
            </div>

            {/* Links */}
            <div className="flex flex-col space-y-6 text-secondary text-lg">
              <Link href="/" onClick={closeMenu}>
                Home
              </Link>
              <Link href="/about" onClick={closeMenu}>
                About Us
              </Link>
              <Link href="/services" onClick={closeMenu}>
                Services
              </Link>
              <Link href="/profile" onClick={closeMenu}>
                Profile
              </Link>

              {/* Products Accordion */}
              <div>
                <button
                  className="flex items-center justify-between w-full"
                  onClick={() => setShowProducts(!showProducts)}>
                  Products{" "}
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${showProducts ? "rotate-180" : ""}`}
                  />
                </button>

                {showProducts && (
                  <div className="ml-4 mt-2 flex flex-col space-y-3 text-base">
                    <Link href="/individual" onClick={closeMenu}>
                      For Individual
                    </Link>
                    <Link href="/business" onClick={closeMenu}>
                      For Business
                    </Link>
                  </div>
                )}
              </div>

              <Link href="/store" onClick={closeMenu}>
                Store
              </Link>
              <Link href="/contact" onClick={closeMenu}>
                Contact
              </Link>
              <Link href="/blog" onClick={closeMenu}>
                Blog
              </Link>

              {/* Cart */}
              <Link
                href="/cart"
                id="nav-cart-icon"
                className="flex items-center gap-3"
                onClick={closeMenu}>
                <ShoppingCart className="h-5 w-5" /> Cart
                {totalItems > 0 && (
                  <Badge className="ml-2 bg-secondary text-primary h-5 w-5 flex items-center justify-center p-0">
                    {totalItems}
                  </Badge>
                )}
              </Link>
              <Link href="/quote" onClick={closeMenu}>
                <Button
                  variant="outline"
                  className="border-secondary text-primary w-full">
                  GET A QUOTE
                </Button>
              </Link>

              {/* User / Login */}
              {user ? (
                <Button
                  className="text-destructive w-full"
                  onClick={async () => {
                    await signOut();
                    closeMenu();
                  }}>
                  <LogOut className="mr-2 h-5 w-5" /> Logout
                </Button>
              ) : (
                <Button
                  className="border-secondary text-primary w-full"
                  variant="outline"
                  onClick={() => {
                    signIn();
                    closeMenu();
                  }}>
                  Login
                </Button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
