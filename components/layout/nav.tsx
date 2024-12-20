'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import MaxWidthContainer from '../ui/container';
import Link from 'next/link';
import { AlignJustify } from 'lucide-react';
import { Button } from '../ui/button';

const NavComp: React.FC = () => {
	const [isMenuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
	};

	const closeMenu = () => {
		setMenuOpen(false);
	};

	const [scrolling, setscrolling] = useState(false);
	useEffect(() => {
		const handleScroll = () => {
			const scrollTop = window.scrollY;
			setscrolling(scrollTop > 0);
		};

		window.addEventListener('scroll', handleScroll);

		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);

	return (
    <nav
      className={`transition-all w-full fixed z-40 ${
        scrolling ? "bg-primary" : "backdrop-blur-md"
      } `}
    >
      <MaxWidthContainer className="py-0 flex justify-between items-center">
        <div className="py-6">
          <Link href="/">
            <Image
              src="/fi-white.webp"
              alt="Logo"
              className="h-8"
              width={100}
              height={100}
            />
          </Link>
        </div>
        <div className="hidden md:flex space-x-4 gap-3">
          <Link href="/" className="text-secondary py-6">{`Home`}</Link>
          <Link
            href="/about"
            className="text-secondary py-6"
          >{`About Us`}</Link>
          <Link
            href="/services"
            className="text-secondary py-6"
          >{`Services`}</Link>
          <Link
            href="/profile"
            className="text-secondary py-6"
          >{`Profile`}</Link>
          <div className="group pt-6">
            <h1 className="text-secondary">{`Products`}</h1>
            <div className="hidden absolute group-hover:block bg-primary pt-8 p-2 space-y-4">
              <h2 className="text-secondary font-bold">{`ISCE Cards`}</h2>
              <div className="">
                <Link
                  href="/individual"
                  className="text-secondary text-sm"
                >{`For Individual`}</Link>
              </div>
              <div className="">
                <Link
                  href="/business"
                  className="text-secondary text-sm"
                >{`For Business`}</Link>
              </div>
            </div>
          </div>
          <Link
            href="/contact"
            className="text-secondary py-6"
          >{`Contact Us`}</Link>
          <Link href="/blog" className="text-secondary py-6">{`Blog`}</Link>
          <Button className=" bg-transparent text-secondary border bottom-full mt-4 justify-center items-center ">
            <Link
              href="/quote"
              className="text-secondary py-6 text-black"
            >{`GET A QUOTE`}</Link>
          </Button>
          {/* <Link
						href='/#'
						className='text-secondary py-6'
					>{`Team`}</Link> */}
          {/* <Link href="/#" className="text-secondary py-6">{`Blog`}</Link> */}
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-secondary py-6 w-full">
            <AlignJustify className="h-8 w-8" />
          </button>
          {isMenuOpen && (
            <div className=" fixed  top-0 left-0 w-screen h-screen flex flex-col justify-center items-center bg-primary p-4 space-y-4">
              <Image
                src="/assets/close.svg"
                width={20}
                height={20}
                alt="close"
                className="absolute top-4 right-4 w-10 h-10 pr-4  object-contain cursor-pointer"
                onClick={toggleMenu}
              />
              <div>
                <ul className="list-none  flex flex-col mt-6 gap-6 items-center">
                  <li>
                    <Link
                      href="/#"
                      className="text-secondary "
                      onClick={closeMenu}
                    >{`Home`}</Link>
                  </li>
                  <li>
                    <Link
                      href="/about"
                      className="text-secondary"
                      onClick={closeMenu}
                    >{`About Us`}</Link>
                  </li>
                  <li>
                    <Link
                      href="/services"
                      className="text-secondary"
                      onClick={closeMenu}
                    >{`Services`}</Link>
                  </li>
                  <li>
                    <Link
                      href="/profile"
                      className="text-secondary"
                      onClick={closeMenu}
                    >{`Profile`}</Link>
                  </li>
                  <li>
                    <Link
                      href="/individual"
                      className="text-secondary"
                      onClick={closeMenu}
                    >{`Individual`}</Link>
                  </li>
                  <li>
                    <Link
                      href="/business"
                      className="text-secondary"
                      onClick={closeMenu}
                    >{`Busines`}</Link>
                  </li>
                  {/* <li>
                    <Link
                      href="/#"
                      className="text-secondary"
                      onClick={closeMenu}
                    >{`Store`}</Link>
                  </li>
                  <li>
                    <Link
                      href="/#"
                      className="text-secondary"
                      onClick={closeMenu}
                    >{`Join Us`}</Link>
                  </li> */}
                  <li>
                    <Link
                      href="/contact"
                      className="text-secondary"
                      onClick={closeMenu}
                    >{`Contact Us`}</Link>
                  </li>
                  <li>
                    <Link
                      href="/blog"
                      className="text-secondary"
                      onClick={closeMenu}
                    >{`Blog`}</Link>
                  </li>
                  <Button className=" bg-transparent text-secondary border bottom-full mt-4 justify-center items-center ">
                    <Link
                      href="/quote"
                      className="text-secondary py-6 text-black"
                    >{`GET A QUOTE`}</Link>
                  </Button>
                  {/* <li>
										<Link
											href='/#'
											className='text-secondary'
											onClick={closeMenu}
										>{`Team`}</Link>
									</li> */}
                  {/* <li>
                    <Link
                      href="/#"
                      className="text-secondary"
                      onClick={closeMenu}
                    >{`Blog`}</Link>
                  </li> */}
                </ul>
              </div>
            </div>
          )}
        </div>
      </MaxWidthContainer>
    </nav>
  );
};

export default NavComp;
