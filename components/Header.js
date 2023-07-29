import Link from "next/link";
import Image from "next/image";

// components

import Socials from "@/components/Socials";

const Header = () => {
  return (
    <header className="absolute z-50 w-full bg-black/90 md:bg-transparent flex items-center px-2 xl:px-0 h-[40px] py-4 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-row justify-between items-start md:items-center">
          <Link href="/">
            <img src="/logo5.svg" className="mt-3 md:mt-6 w-[80px] h-[20px] md:w-[150px] md:h-[50px] object-cover"/>
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
