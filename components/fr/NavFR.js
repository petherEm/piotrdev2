"use client";

import {
  HiHome,
  HiUser,
  HiRectangleGroup,
  HiViewColumns,
  HiChatBubbleBottomCenterText,
  HiEnvelope,
} from "react-icons/hi2";

import Link from "next/link";
import { useRouter, usePathname } from "next/navigation";

export const navData = [
  { name: "home", path: "/fr", icon: <HiHome /> },
  { name: "about", path: "/fr/about", icon: <HiUser /> },
  { name: "services", path: "/fr/services", icon: <HiRectangleGroup /> },
  { name: "work", path: "/fr/work", icon: <HiViewColumns /> },
  // {
  //   name: "testimonials",
  //   path: "/testimonials",
  //   icon: <HiChatBubbleBottomCenterText />,
  // },
  {
    name: "contact",
    path: "/fr/contact",
    icon: <HiEnvelope />,
  },
];

const NavFR = () => {
  const router = useRouter();
  const pathname = usePathname();

  return (
    <nav className="flex flex-col p-10 items-center xl:justify-center gap-y-4 fixed h-max bottom-0 mt-auto xl:right-[2%] z-40 top-0 w-full xl:w-16 xl:max-w-md xl:h-screen z-50">
      <div className="flex w-full xl:flex-col items-center justify-around xl:justify-center gap-y-10 px-4 md:px-40 xl:px-0 h-[60px] xl:h-max py-8 bg-white/10 backdrop-blur-sm text-2xl xl:text-xl xl:rounded-full">
        {navData.map((link, index) => {
          return (
            <Link
              href={link.path}
              key={index}
              className={`${
                link.path === pathname && "text-accent"
              } relative flex items-center group hover:text-accent transition-all duration-300`}
            >
              {/* tooltip */}
              <div className="absolute pr-14 right-0 hidden xl:group-hover:flex">
                <div className="bg-white relative flex text-primary items-center p-[6px] rounded-[3px]">
                  <div className="text-[12px] leading-none font-semibold capitalize">
                    {link.name}
                  </div>
                  {/* triangle */}
                  <div className="border-solid border-l-white border-l-8 border-y-transparent border-y-[6px] border-r-0 absolute -right-2"></div>
                </div>
              </div>
              <div>{link.icon}</div>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default NavFR;
