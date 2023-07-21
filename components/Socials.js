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

const Socials = () => {
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
        className="hover:text-accent transition-all duration-300 text-lg md:text-xl"
      >
        <RiGithubLine />
      </Link>
      <Link
        href="https://www.instagram.com/piotrek_dev/"
        rel="noopener noreferrer"
        target="_blank"
        className="hover:text-accent transition-all duration-300 text-lg md:text-xl"
      >
        <RiInstagramLine />
      </Link>
      <Link
        href="https://www.linkedin.com/in/piotrek-maciejewski/"
        rel="noopener noreferrer"
        target="_blank"
        className="hover:text-accent transition-all duration-300 text-lg md:text-xl"
      >
        <RiLinkedinLine />
      </Link>

      <Link
        href="https://medium.com/@pether.maciejewski"
        rel="noopener noreferrer"
        target="_blank"
        className="hover:text-accent transition-all duration-300 text-lg md:text-xl"
      >
        <RiMediumLine />
      </Link>
      <Link
        href="https://www.piotrmaciejewski.com/articles"
        rel="noopener noreferrer"
        target="_blank"
        className="hover:text-accent transition-all duration-300 text-sm md:text-md"
      >
        Blog
      </Link>
      {/* Languages */}
      <div className="flex items-center space-x-2">
            <Link
              href="/fr"
             
              className="hover:text-accent transition-all duration-300 text-sm md:text-md"
            >
              <span className="fi fi-fr text-sm"></span>
            </Link>
            <Link
              href="/"
              
              className="hover:text-accent transition-all duration-300 text-sm md:text-md"
            >
              <span className="fi fi-gb text-sm"></span>
            </Link>
          </div>
    </div>
  );
};

export default Socials;
