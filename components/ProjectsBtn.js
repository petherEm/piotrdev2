import Image from "next/image";

import Link from "next/link";

import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0 cursor-pointer z-50">
      <Link
        href="/work"
        className="relative w-[185px] h-[185px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group "
      >
        <Image
          src="/rounded-text.png"
          width={141}
          height={148}
          alt="Projects"
          className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]"
        />
        <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 translate-x transition-all duration-300" />
      </Link>
    </div>
  );
};

export default ProjectsBtn;
