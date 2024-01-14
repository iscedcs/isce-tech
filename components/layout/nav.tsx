'use client'
import Image from 'next/image';
import React, { useState } from 'react';

const NavComp: React.FC = () => {

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="bg-primary p-6 w-full fixed ">
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Image src="/fi-white.webp" alt="Logo" className="h-8" width={100}
            height={100} />
        </div>
        <div className="hidden md:flex space-x-4 gap-3">
          <a href="#" className="text-secondary">{`Home`}</a>
          <a href="#" className="text-secondary">{`About Us`}</a>
          <div className="group">
            <a href="#" className="text-secondary">{`Product And Services`}</a>
            <div className="hidden absolute group-hover:block bg-primary mt-5 p-2 space-y-4">
              <h2 className="text-secondary font-bold">{`ISCE Card For Student`}</h2>
              <a href="#" className="text-secondary text-sm">{`Connect for Student`}</a>
              <h2 className="text-secondary font-bold ">{`Connect for Business`}</h2>
              <div className='flex flex-col gap-2'>
                <a href="#" className="text-secondary text-sm">{`Digital Card for Business`}</a>
                <a href="#" className="text-secondary text-sm">{`Connect your Business`}</a>
              </div>
            </div>
          </div>
          <a href="#" className="text-secondary">{`Store`}</a>
          <a href="#" className="text-secondary">{`Academy`}</a>
          <a href="#" className="text-secondary">{`Contact Us`}</a>
          <a href="#" className="text-secondary">{`Team`}</a>
          <a href="#" className="text-secondary">{`Blog`}</a>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-secondary">
            ☰
          </button>
          {isMenuOpen && (

            <div className=" fixed  top-0 left-0 w-screen h-screen flex flex-col justify-center items-center bg-primary p-4 space-y-4">
              <Image
                src='/assts/close.svg'
                width={20}
                height={20}
                alt="close"
                className="absolute top-4 right-4 w-[28px] h-[28px]  object-contain cursor-pointer"
                onClick={toggleMenu}
              />
              <div>
                <ul className="list-none  flex flex-col mt-6 gap-6 items-center">
                  <li ><a href="#" className="text-secondary" onClick={closeMenu}>{`Home`}</a></li>
                  <li> <a href="#" className="text-secondary" onClick={closeMenu}>{`About Us`}</a></li>
                  <li> <a href="#" className="text-secondary" onClick={closeMenu}>{`Products And Services`}</a></li>
                  <li> <a href="#" className="text-secondary" onClick={closeMenu}>{`Store`}</a></li>
                  <li> <a href="#" className="text-secondary" onClick={closeMenu}>{`Academy`}</a></li>
                  <li> <a href="#" className="text-secondary" onClick={closeMenu}>{`Contact Us`}</a></li>
                  <li> <a href="#" className="text-secondary" onClick={closeMenu}>{`Team`}</a></li>
                  <li><a href="#" className="text-secondary" onClick={closeMenu}>{`Blog`}</a></li>
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavComp;
