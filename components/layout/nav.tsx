"use client";

import Image from "next/image";
import React, { useEffect, useState, useRef } from "react";
import MaxWidthContainer from "../ui/container";
import Link from "next/link";
import {
  AlignJustify,
  X,
  ChevronDown,
  LogOut,
  ShoppingCart,
  User,
} from "lucide-react";
import { Button } from "../ui/button";
import { useCartStore } from "@/lib/store/cart-store";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "../ui/dropdown-menu";
import { signIn, signOut, useSession } from "next-auth/react";
import { motion, AnimatePresence } from "framer-motion";

const NavComp: React.FC = () => {
  const { totalItems } = useCartStore();
  const { data: session } = useSession();
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
      className={`fixed w-full z-40 transition-all duration-300 ${
        scrolling ? "bg-primary shadow-md" : "bg-transparent"
      }`}>
      <MaxWidthContainer className="py-0 flex justify-between items-center">
        {/* Logo */}
        <div className="py-4">
          <Link href="/">
            <Image
              src="/fi-white.webp"
              alt="Logo"
              width={100}
              height={100}
              className="h-8 w-auto sm:h-10"
              sizes="(max-width: 640px) 80px, 100px"
              priority
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-4">
          <Link
            href="/"
            className="text-secondary py-4 hover:text-secondary/80 transition-colors">
            Home
          </Link>
          <Link
            href="/about"
            className="text-secondary py-4 hover:text-secondary/80 transition-colors">
            About Us
          </Link>
          <Link
            href="/services"
            className="text-secondary py-4 hover:text-secondary/80 transition-colors">
            Services
          </Link>
          <Link
            href="/profile"
            className="text-secondary py-4 hover:text-secondary/80 transition-colors">
            Profile
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <div className="text-secondary py-4 hover:text-secondary/80 transition-colors flex items-center cursor-pointer">
                Products{" "}
                <ChevronDown className="ml-1 h-4 w-4" aria-hidden="true" />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              <DropdownMenuLabel>ISCE Cards</DropdownMenuLabel>
              <DropdownMenuItem asChild>
                <Link href="/individual">For Individual</Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link href="/business">For Business</Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Link
            href="/contact"
            className="text-secondary py-4 hover:text-secondary/80 transition-colors">
            Contact Us
          </Link>
          <Link
            href="/blog"
            className="text-secondary py-4 hover:text-secondary/80 transition-colors">
            Blog
          </Link>
          <Link
            href="/store"
            className="text-secondary py-4 hover:text-secondary/80 transition-colors">
            Store
          </Link>
          <Button
            variant="outline"
            size="sm"
            className="text-primary font-bold border-secondary hover:bg-secondary hover:text-primary rounded-full px-4 sm:px-6"
            asChild>
            <Link href="/quote">Get a Quote</Link>
          </Button>
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="text-secondary border-secondary hover:bg-secondary hover:text-primary rounded-full"
                  aria-label="User menu">
                  <User
                    className="h-5 w-5 text-primary font-bold"
                    aria-hidden="true"
                  />
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
                  onClick={() => signOut()}
                  className="text-destructive">
                  <LogOut className="h-4 w-4 mr-2" aria-hidden="true" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button
              variant="outline"
              size="sm"
              className="text-primary font-bold border-secondary hover:bg-secondary hover:text-primary rounded-full px-4 sm:px-6"
              onClick={() => signIn()}>
              Login
            </Button>
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

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-3">
          <Button
            variant="outline"
            size="icon"
            className="text-secondary border-secondary hover:bg-secondary hover:text-primary rounded-full"
            onClick={toggleMenu}
            aria-label="Toggle mobile menu">
            {isMenuOpen ? (
              <X className="h-6 w-6" aria-hidden="true" />
            ) : (
              <AlignJustify
                className="h-6 w-6 text-primary font-bold"
                aria-hidden="true"
              />
            )}
          </Button>
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="text-secondary border-secondary hover:bg-secondary hover:text-primary rounded-full"
                  aria-label="User menu">
                  <User
                    className="h-5 w-5 text-primary font-bold"
                    aria-hidden="true"
                  />
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
                  onClick={() => signOut()}
                  className="text-destructive">
                  <LogOut className="h-4 w-4 mr-2" aria-hidden="true" />
                  Logout
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button
              variant="outline"
              size="sm"
              className="text-primary font-bold border-secondary hover:bg-secondary hover:text-primary rounded-full px-3"
              onClick={() => signIn()}>
              Login
            </Button>
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
