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

const Langs = () => {
  return (
    <div className="flex items-center gap-x-3 md:gap-x-5 text-lg mt-6">
      {/* Languages */}
      <div className="flex items-center space-x-2">
        <Link
          href="/fr"
          className="hover:text-accent transition-all duration-300 text-lg"
        >
          <span className="fi fi-fr text-sm"></span>
        </Link>
        <Link
          href="/"
          className="hover:text-accent transition-all duration-300 text-lg"
        >
          <span className="fi fi-gb text-sm"></span>
        </Link>
      </div>
    </div>
  );
};

export default Langs;
