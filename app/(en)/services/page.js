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
              <span className="text-white">Full Stack Development:</span> Harnessing cutting-edge technologies, I design, build, and deploy web applications tailored to scale and resonate with your business needs. <br />
              
              <span className="text-white">AI-Driven Business Strategy Consultation:</span> Elevate your business by tapping into the transformative power of AI. Leveraging deep data insights, I offer strategies that refine processes, amplify decision-making prowess, and catalyze innovation. Stay not just aligned, but ahead, in the ever-evolving digital era.
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
