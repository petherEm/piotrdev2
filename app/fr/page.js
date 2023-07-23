"use client";

import Image from "next/image";

import ParticlesContainer from "@/components/ParticlesContainer";
import ProjectsBtn from "@/components/ProjectsBtn";
import Avatar from "@/components/Avatar";
import { motion } from "framer-motion";

import { fadeIn } from "@/variants";

export default function Home() {
  return (
    <div className="bg-primary/60 h-full overflow-y-auto">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          <motion.h1
            className="h1"
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
          >
            Ensemble dans <br /> la prochaine <br />
            <span className="text-accent">ère numérique </span>
          </motion.h1>
          <motion.p
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            Débloquez votre succès numérique avec un développeur Full Stack
            expérimenté et un leader dans l'industrie financière (Fortune
            500) avec plus de 15 ans d'expérience à vos côtés. Tirez parti de
            mon expertise pour un développement Web transparent, la science des
            données, la stratégie produit et une croissance commerciale
            inégalée.
          </motion.p>

          {/* btn */}
          <motion.div
            variants={fadeIn("down", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        <div className="bg-none  w-full h-full absolute mix-blend-color-dodge translate-z-0" />
        {/* particles */}

        <ParticlesContainer />

        {/* <motion.div
          variants={fadeIn("up", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full h-full max-w-[737px]  max-h-[678px] absolute -bottom-32 lg:top-20 lg:right-[8%] z-50"
        >
          <Avatar />
        </motion.div> */}
      </div>
    </div>
  );
}
