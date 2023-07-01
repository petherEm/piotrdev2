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
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <div className="container mx-auto overflow-y-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
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
              className="mb-4 text-[14px] md:text-[16px] max-w-[400px] mx-auto lg:mx-0"
            >
              I am a full-stack developer leveraging the latest technologies to
              build and deploy scalable web applications. I do also provide
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
