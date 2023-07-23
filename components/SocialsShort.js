import Link from "next/link";
import "/node_modules/flag-icons/css/flag-icons.min.css";

//icons

import {
  RiInstagramLine,
  RiFacebookLine,
  RiLinkedinLine,
  RiGithubLine,
  RiMediumLine,
} from "react-icons/ri";

const SocialsShort = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg mt-4 md:mt-0">
      {/* <Link
        href="/"
        className="hover:text-accent transition-all duration-300 text-lg md:text-xl"
      >
        <RiFacebookLine />
      </Link> */}
      <Link
        href="https://github.com/petherEm"
        rel="noopener noreferrer"
        target="_blank"
        className="hover:text-accent transition-all duration-300 text-xl md:text-4xl"
      >
        <RiGithubLine />
      </Link>
      <Link
        href="https://www.instagram.com/piotrek_dev/"
        rel="noopener noreferrer"
        target="_blank"
        className="hover:text-accent transition-all duration-300 text-xl md:text-4xl"
      >
        <RiInstagramLine />
      </Link>
      <Link
        href="https://www.linkedin.com/in/piotrek-maciejewski/"
        rel="noopener noreferrer"
        target="_blank"
        className="hover:text-accent transition-all duration-300 text-xl md:text-4xl"
      >
        <RiLinkedinLine />
      </Link>
    </div>
  );
};

export default SocialsShort;
