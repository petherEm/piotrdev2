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
              <span className="text-white">Développement Full Stack:</span>{" "}
              Utilisant des technologies de pointe, je conçois, construis et
              déploie des applications web adaptées pour évoluer et répondre aux
              besoins de votre entreprise. <br />
              <span className="text-white">
                Consultation Stratégique d'Affaires Pilotée par l'IA:
              </span>{" "}
              Élevez votre entreprise en exploitant le pouvoir transformateur de
              l'IA. En tirant parti des insights approfondis des données, je
              propose des stratégies qui affinent les processus, amplifient la
              capacité de prise de décision et catalysent l'innovation. Restez
              non seulement aligné, mais aussi en avance, dans l'ère numérique
              en constante évolution.
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
