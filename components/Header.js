import Link from "next/link";

// components

import Socials from "@/components/Socials";

const Header = () => {
  return (
    <header className="absolute z-50 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-">
          <Link href="/">
            <h1 className="text-2xl font-bold">
              PiotrDev<span className="text-4xl font-bold text-red-600">.</span>
            </h1>
          </Link>
          <Socials />
          
        </div>
      </div>
    </header>
  );
};

export default Header;
