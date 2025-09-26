"use client";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import MaxWidthContainer from "../ui/container";
import Link from "next/link";
import {
  AlignJustify,
  Badge,
  ChevronDown,
  LogOut,
  ShoppingCart,
  User,
  X,
} from "lucide-react";
import { Button } from "../ui/button";
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

const NavComp: React.FC = () => {
  const { totalItems } = useCartStore();
  const { data: session, status } = useSession();
  const user = session?.user;
  const [isMenuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => setMenuOpen((prev) => !prev);
  const closeMenu = () => setMenuOpen(false);

  // Handle scroll for background change
  const [scrolling, setScrolling] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScrolling(window.scrollY > 0);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on click outside or Escape key
  useClickOutside(menuRef as React.RefObject<HTMLElement>, closeMenu);
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
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
          <Button
            variant="outline"
            size="icon"
            className="relative text-secondary border-secondary hover:bg-secondary hover:text-primary rounded-full"
            asChild>
            <Link href="/cart">
              <ShoppingCart
                className="h-5 w-5 text-primary font-bold"
                aria-hidden="true"
              />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center rounded-full bg-secondary text-primary text-xs">
                  {totalItems}
                </span>
              )}
            </Link>
          </Button>
        </div>
      </MaxWidthContainer>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed top-0 left-0 w-full h-screen bg-primary z-50 shadow-md"
            ref={menuRef}>
            <div className="flex justify-between items-center p-4 border-b border-secondary/20">
              <Link href="/" onClick={closeMenu}>
                <Image
                  src="/fi-white.webp"
                  alt="Logo"
                  width={80}
                  height={80}
                  className="h-8 w-auto"
                  sizes="80px"
                  priority
                />
              </Link>
              <Button
                variant="ghost"
                size="icon"
                className="text-secondary hover:bg-secondary/20"
                onClick={closeMenu}
                aria-label="Close mobile menu">
                <X className="h-6 w-6" aria-hidden="true" />
              </Button>
            </div>
            <div className="flex flex-col p-4 space-y-3">
              <Link
                href="/"
                className="text-secondary text-base hover:text-secondary/80 py-2"
                onClick={closeMenu}>
                Home
              </Link>
              <Link
                href="/about"
                className="text-secondary text-base hover:text-secondary/80 py-2"
                onClick={closeMenu}>
                About Us
              </Link>
              <Link
                href="/services"
                className="text-secondary text-base hover:text-secondary/80 py-2"
                onClick={closeMenu}>
                Services
              </Link>
              <Link
                href="/profile"
                className="text-secondary text-base hover:text-secondary/80 py-2"
                onClick={closeMenu}>
                Profile
              </Link>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <div className="text-secondary text-base hover:text-secondary/80 py-2 flex items-center">
                    Products{" "}
                    <ChevronDown className="ml-1 h-4 w-4" aria-hidden="true" />
                  </div>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="start" className="w-48">
                  <DropdownMenuLabel>ISCE Cards</DropdownMenuLabel>
                  <DropdownMenuItem asChild>
                    <Link href="/individual" onClick={closeMenu}>
                      For Individual
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/business" onClick={closeMenu}>
                      For Business
                    </Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link
                href="/contact"
                className="text-secondary text-base hover:text-secondary/80 py-2"
                onClick={closeMenu}>
                Contact Us
              </Link>
              <Link
                href="/blog"
                className="text-secondary text-base hover:text-secondary/80 py-2"
                onClick={closeMenu}>
                Blog
              </Link>
              <Link
                href="/store"
                className="text-secondary text-base hover:text-secondary/80 py-2"
                onClick={closeMenu}>
                Store
              </Link>
              <Button
                variant="outline"
                size="sm"
                className="text-primary font-bold border-secondary hover:bg-secondary hover:text-primary rounded-full justify-start"
                asChild>
                <Link href="/quote" onClick={closeMenu}>
                  Get a Quote
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default NavComp;
function useClickOutside(
  ref: React.RefObject<HTMLElement>,
  handler: () => void
) {
  useEffect(() => {
    function handleClick(event: MouseEvent | TouchEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        handler();
      }
    }
    document.addEventListener("mousedown", handleClick);
    document.addEventListener("touchstart", handleClick);
    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("touchstart", handleClick);
    };
  }, [ref, handler]);
}
