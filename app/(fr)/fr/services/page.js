"use client";

import React from "react";
import ServiceSliderFR from "@/components/fr/ServiceSliderFR";
import ServiceSlider from "@/components/ServiceSlider";
import Bulb from "@/components/Bulb";

import Circles from "@/components/Circles";

// framer motion

import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const ServicesFR = () => {
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
              Mes services
              <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="mb-4 text-[13px] md:text-[15px] max-w-[400px] mx-auto lg:mx-0"
            >
              Je suis un développeur Full Stack qui utilise les dernières
              technologies pour construire et déployer des applications web
              évolutives. <br />Je propose également des services de conseil en
              conception de stratégies d'entreprise en exploitant la puissance
              de l'IA pour ouvrir de nouvelles perspectives à votre entreprise.
              En exploitant les technologies de l'IA avec une analyse
              approfondie des données, je peux vous aider à optimiser les
              processus, à améliorer la prise de décision et à stimuler
              l'innovation, ce qui vous permet de rester à la pointe du paysage
              numérique.
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
            <ServiceSliderFR />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServicesFR;
