"use client";

import WorkSlider from "@/components/WorkSlider";
import Bulb from "@/components/Bulb";

import Circles from "@/components/Circles";

// framer motion

import { motion } from "framer-motion";
import { fadeIn } from "@/variants";

const WorkFR = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center overflow-y-scroll no-scrollbar">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8 mt-24">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 mt-36 md:mt-10 xl:mt-12"
            >
              Projets sélectionnés
              <span className="text-accent">.</span>
            </motion.h2>
            <motion.p
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="text-[13px] md:text-[15px] md:mb-4 max-w-[400px] mx-auto lg:mx-0"
            >
              Vous trouverez une sélection de mes travaux en freelance, mettant
              en valeur mon expertise en développement web{" "}
              <span className="text-white">
                (JS, React.js, Next.js, TailwindCSS, Node.js, Express.js)
              </span>
              . Bien que je ne sois pas en mesure de présenter des projets
              d'entreprise en raison d'accords de confidentialité, vous pouvez
              parcourir les projets de formation. de confidentialité, vous
              pouvez parcourir les projets de formation et les projets freelance
              qui démontrent mes compétences.
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

export default WorkFR;
