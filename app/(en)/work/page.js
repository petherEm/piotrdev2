"use client";

import WorkSlider from "@/components/WorkSlider";
import Bulb from "@/components/Bulb";

import Circles from "@/components/Circles";

// framer motion

import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const Work = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center overflow-y-scroll no-scrollbar">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8 md:mt-24">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 mt-20 md:mt-10 xl:mt-12"
            >
              Selected projects
              <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-[13px] md:text-[15px] md:mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              Dive into a handpicked collection of my freelance endeavors, spotlighting my mastery in web development with tools like <span className="text-white">JS/TS, React.js, Next.js, TailwindCSS, Node.js, and Express.js.</span> While my corporate ventures remain under the veil of confidentiality, these training and freelance showcases stand testament to my capabilities.
            </motion.p>
          </div>
          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[65%]"
          >
            <div className="">
              <WorkSlider />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Work;
