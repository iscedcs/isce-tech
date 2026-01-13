"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import MaxWidthContainer from "../ui/container";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import {
  AlignJustify,
  Badge,
  ChevronDown,
  LogOut,
  ShoppingCart,
  ChevronDown,
  User,
  X,
} from "lucide-react";
import { signIn, signOut, useSession } from "next-auth/react";
import { Button } from "../ui/button";
import { Badge } from "../ui/badge";
import { AnimatePresence, motion } from "framer-motion";
import { useCartStore } from "@/lib/store/cart-store";
import { AnimatePresence, motion } from "framer-motion";

import { signIn, signOut, useSession } from "next-auth/react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { Skeleton } from "../ui/skeleton";

export default function NavComp() {
  const { data: session, status } = useSession();
  const { totalItems } = useCartStore();
  const { data: session, status } = useSession();
  const user = session?.user;
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

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
      className={`transition-all w-full fixed z-40 ${
        scrolling ? "bg-primary" : "bg-current"
      } `}>
      <MaxWidthContainer className="py-0 flex justify-between items-center">
        <div className="py-4 sm:py-6">
          <Link href="/">
            <Image
              src="/fi-white.webp"
              alt="Logo"
              className="h-8  auto sm:h-10"
              width={100}
              height={100}
              sizes="(max-width: 640px) 80px, 100px"
              priority
            />
          </Link>
        </div>
        <div className="hidden md:flex space-x-4 gap-3 items-center">
          <Link href="/" className="text-secondary py-6 text-sm sm:text-base">
            Home
          </Link>
          <Link
            href="/about"
            className="text-secondary py-6 text-sm sm:text-base">
            About Us
          </Link>
          <Link
            href="/services"
            className="text-secondary py-6 text-sm sm:text-base">
            Services
          </Link>
          <Link
            href="/profile"
            className="text-secondary py-6 text-sm sm:text-base">
            Profile
          </Link>
          <div className="group mx-auto items-center">
            <h1 className="text-secondary text-sm sm:text-base">Products</h1>
            <div className="hidden absolute group-hover:block bg-primary pt-8 p-2 space-y-4">
              <h2 className="text-secondary font-bold text-sm">ISCE Cards</h2>
              <div>
                <Link
                  href="/individual"
                  className="text-secondary text-xs sm:text-sm">
                  For Individual
                </Link>
              </div>
              <div>
                <Link
                  href="/business"
                  className="text-secondary text-xs sm:text-sm">
                  For Business
                </Link>
              </div>
            </div>
          </div>
          <Link
            href="/contact"
            className="text-secondary py-6 text-sm sm:text-base">
            Contact Us
          </Link>
          <Link
            href="/blog"
            className="text-secondary py-6 text-sm sm:text-base">
            Blog
          </Link>
          <Link
            href="/store"
            className="text-secondary py-6 text-sm sm:text-base">
            Store
          </Link>

          {/* Quote */}
          <Button
            className="bg-transparent text-secondary border mt-4 justify-center items-center text-sm sm:text-base"
            asChild
            size="sm">
            <Link href="/quote" className="text-secondary">
              GET A QUOTE
            </Link>
          </Button>
          {status === "loading" ? (
            <Skeleton className="h-8 w-8 rounded-full" />
          ) : status === "authenticated" ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  size="icon"
                  className="bg-transparent text-secondary border mt-4 justify-center items-center">
                  <User className="h-5 w-5" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem asChild>
                  <Link href="/orders">Orders</Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem
                  onClick={async () => signOut()}
                  className="text-destructive">
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button
              variant="outline"
              size="sm"
              className="bg-transparent text-secondary border mt-4 justify-center items-center text-sm sm:text-base"
              onClick={() => signIn()}>
              Login
            </Button>
          )}
          <Button
            variant="outline"
            size="icon"
            className="relative bg-transparent text-secondary border mt-4 justify-center items-center"
            asChild>
            <Link href="/cart" className="text-secondary">
              <ShoppingCart className="h-5 w-5" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center rounded-full bg-secondary text-primary text-xs">
                  {totalItems}
                </span>
              )}
            </Link>
          </Button>
        </div>
        <div className="md:hidden">
          <div className="flex flex-row-reverse gap-3 items-center">
            <button
              onClick={toggleMenu}
              className="text-secondary py-4 sm:py-6">
              <AlignJustify className="h-6 w-6 sm:h-8 sm:w-8" />
            </button>
            {user ? (
              <Link
                href="/cart"
                className="text-secondary text-base sm:text-lg flex items-center"
                onClick={closeMenu}>
                <ShoppingCart className="h-5 w-5 mr-2" />
                Cart
                {totalItems > 0 && (
                  <Badge className="ml-2 h-5 w-5 flex items-center justify-center p-0 text-primary-foreground">
                    {totalItems}
                  </Badge>
                )}
              </Link>
            ) : (
              <Button
                size="sm"
                className="bg-transparent text-secondary border py-2 sm:py-3 text-base sm:text-lg"
                onClick={() => {
                  signIn();
                  closeMenu();
                }}>
                Login
              </Button>
            )}
          </div>
          {isMenuOpen && (
            <div className="fixed top-0 left-0 w-screen h-screen flex flex-col justify-center items-center bg-primary p-4 space-y-4">
              <Image
                src="/assets/close.svg"
                width={20}
                height={20}
                alt="close"
                className="absolute top-4 right-4 w-8 h-8 sm:w-10 sm:h-10 object-contain cursor-pointer"
                onClick={toggleMenu}
              />
              <div>
                <ul className="list-none flex flex-col mt-6 gap-4 sm:gap-6 items-center">
                  <li>
                    <Link
                      href="/"
                      className="text-secondary text-base sm:text-lg"
                      onClick={closeMenu}>
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="text-secondary text-base sm:text-lg"
                      onClick={closeMenu}>
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className="text-secondary text-base sm:text-lg"
                      onClick={closeMenu}>
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/profile"
                      className="text-secondary text-base sm:text-lg"
                      onClick={closeMenu}>
                      Profile
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/individual"
                      className="text-secondary text-base sm:text-lg"
                      onClick={closeMenu}>
                      Individual
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/business"
                      className="text-secondary text-base sm:text-lg"
                      onClick={closeMenu}>
                      Business
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/store"
                      className="text-secondary text-base sm:text-lg"
                      onClick={closeMenu}>
                      Store
                    </Link>
                  </li>

                  <li>
                    <Link
                      href="/contact"
                      className="text-secondary text-base sm:text-lg"
                      onClick={closeMenu}>
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="text-secondary text-base sm:text-lg"
                      onClick={closeMenu}>
                      Blog
                    </Link>
                  </li>
                  <li>
                    <Button
                      className="bg-transparent text-secondary border justify-center items-center text-base sm:text-lg"
                      asChild>
                      <Link href="/quote" onClick={closeMenu}>
                        GET A QUOTE
                      </Link>
                    </Button>
                  </li>
                  <li>
                    <Link
                      href="/cart"
                      className="text-secondary text-base sm:text-lg flex items-center"
                      onClick={closeMenu}>
                      Cart
                      {totalItems > 0 && (
                        <Badge className="ml-2 h-5 w-5 flex items-center justify-center p-0 text-primary-foreground">
                          {totalItems}
                        </Badge>
                      )}
                    </Link>
                  </li>
                  {user ? (
                    <>
                      <li>
                        <Link
                          href="/orders"
                          className="text-secondary text-base sm:text-lg"
                          onClick={closeMenu}>
                          Orders
                        </Link>
                      </li>
                      <li>
                        <Button
                          onClick={async () => {
                            await signOut();
                            closeMenu();
                          }}
                          className="text-destructive text-base sm:text-lg flex items-center">
                          <LogOut className="h-5 w-5 mr-2" />
                          Logout
                        </Button>
                      </li>
                    </>
                  ) : (
                    <li>
                      <button
                        onClick={() => {
                          signIn();
                          closeMenu();
                        }}
                        className="text-secondary text-base sm:text-lg">
                        Login
                      </button>
                    </li>
                  )}
                </ul>
              </div>
            </div>
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
