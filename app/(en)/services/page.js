"use client";

import React from "react";
import ServiceSlider from "@/components/ServiceSlider";
import Bulb from "@/components/Bulb";

import Circles from "@/components/Circles";

// framer motion

import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center overflow-y-scroll no-scrollbar">
      <div className="container mx-auto overflow-y-scroll no-scrollbar">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center mt-28 md:mt-8 flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 mt-4 xl:mt-8"
            >
              My services
              <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 text-[13px] md:text-[15px] max-w-[400px] mx-auto lg:mx-0"
            >
              I am a Full Stack developer leveraging the latest technologies to
              build and deploy scalable web applications. <br />I also provide
              consulting services in business strategy design leveraging the
              power of AI to unlock new opportunities for your business. By
              harnessing AI technologies along with deep data analysis, I can
              assist you in optimizing processes, enhancing decision-making, and
              driving innovation, enabling you to stay at the forefront of the
              digital landscape.
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
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Services;
