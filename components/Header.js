import Link from "next/link";
import Image from "next/image";

// components

import Socials from "@/components/Socials";

const Header = () => {
  return (
    <header className="absolute z-50 w-full bg-black/90 md:bg-transparent flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center">
          <Link href="/">
            <img src="/vabank.svg" className="mt-2 w-[80px] h-[40px] md:w-[180px] md:h-[50px] object-cover"/>
            {/* <h1 className="text-2xl font-bold">
              vabank<span className="text-4xl font-bold text-red-600">.</span>dev
            </h1> */}
          </Link>
          <Socials />
          
        </div>
      </div>
    </header>
  );
};

export default Header;
