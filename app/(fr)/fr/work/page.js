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
        <div className="flex flex-col xl:flex-row gap-x-8 md:mt-24">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0">
            <motion.h2
              variants={fadeIn("up", 0.2)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 mt-4 md:mt-10 xl:mt-12"
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
              Voici une collection soigneusement sélectionnée de mes
              réalisations en freelance, mettant en lumière ma maîtrise du
              développement web avec des outils tels que{" "}
              <span className="text-white">
                JS/TS, React.js, Next.js, TailwindCSS, Node.js et Express.js.
              </span>{" "}
              Bien que mes projets corporatifs restent sous le voile de la
              confidentialité, ces démonstrations de formation et freelance
              témoignent de mes compétences.
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
