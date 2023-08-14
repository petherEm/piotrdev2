"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

import { HiMenu } from "react-icons/hi";

import Socials from "@/components/Socials";

export const navData = [
  { name: "home", path: "/" },
  { name: "about", path: "/about" },
  { name: "services", path: "/services" },
  { name: "work", path: "/work" },
  { name: "contact", path: "/contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const router = useRouter();
  const pathname = usePathname();

  return (
    <header className="absolute z-50 w-full bg-black/90 flex items-center px-2 xl:px-0 h-[40px] py-4 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-row justify-between items-start md:items-center">
          <Link href="/">
            <img
              src="/vabankdev_logo_white.svg"
              className="mt-4 md:mt-6 w-[80px] h-[20px] md:w-[150px] md:h-[50px] object-cover"
            />
          </Link>
          <div className="mt-3 md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              <HiMenu className="text-white w-6 h-6" />
            </button>
          </div>
          <div
            className={`${isMenuOpen ? "block" : "hidden"} md:flex space-x-4`}
          >
            {navData.map((item, index) => (
              <Link key={index} href={item.path}>
                <p
                  className={`${
                    pathname === item.path ? "text-accent" : "text-white"
                  } hover:text-red-600 mt-6 capitalize`}
                >
                  {item.name}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/80 flex flex-col space-y-4 p-4 md:hidden">
          {isMenuOpen && (
            <div className="fixed inset-0 z-40 bg-black flex flex-col space-y-4 p-4 md:hidden">
              {/* Close button */}
              <button
                onClick={() => setIsMenuOpen(false)}
                className="text-white hover:text-red-600 self-end text-3xl"
              >
                X
              </button>
              <Socials />
              {navData.map((item, index) => (
                <Link
                  key={index}
                  href={item.path}
                  className={`${
                    pathname === item.path ? "text-accent" : "text-white"
                  } hover:text-red-600 mt-6 capitalize`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              
            </div>
          )}
          <Socials />
        </div>
      )}
    </header>
  );
};

export default Header;
