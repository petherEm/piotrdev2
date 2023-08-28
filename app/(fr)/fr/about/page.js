"use client";

import { useState } from "react";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaWordpress,
  FaFigma,
  FaPython,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTailwindcss,
  SiPandas,
  SiNumpy,
  SiOpenai,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
  SiTypescript,
} from "react-icons/si";

import Avatar from "@/components/Avatar";
import Circles from "@/components/Circles";
import { motion } from "framer-motion";
import { fadeIn } from "@/variants";
import CountUp from "react-countup";

//  data
const aboutData = [
  {
    title: "Stack",
    info: [
      {
        title: "Développement Web",
        icons: [
          <FaPython />,
          <FaJs />,
          <SiTypescript />,
          <FaReact />,
          <SiNextdotjs />,
          <FaNodeJs />,
          <SiTailwindcss />,
        ],
      },
      {
        title: "Science des données",
        icons: [<FaPython />, <SiPandas />, <SiNumpy />, <SiOpenai />],
      },
    ],
  },
  {
    title: "L'expérience",
    info: [
      {
        title: "Digital Bank, Country Lead - Western Union",
        stage: "2023 - Present",
      },
      {
        title: "Head of Sales & Tech Integrations - Western Union",
        stage: "2020 - 2023",
      },
      {
        title: "Digital Product Manager - Western Union",
        stage: "2018 - 2020",
      },
      {
        title: "Country Manager - Hungary, Croatia, Western Union",
        stage: "2015 - 2018",
      },
      {
        title: "Compliance Officer - Western Union",
        stage: "2012 - 2015",
      },
      {
        title: "Corporate Compliance - Luxembourg, State Street Bank",
        stage: "2011 - 2012",
      },
      {
        title: "Due Diligence Analyst - Benelux, Royal Bank of Scotland",
        stage: "2008 - 2011",
      },
    ],
  },
  {
    title: "L'éducation",
    info: [
      {
        title:
          "Master of Business Administration - Warwick Business School, UK",
        stage: "2021",
      },
      {
        title: "MSc in Banking & Finance - Warsaw School of Economics, PL",
        stage: "2009",
      },
    ],
  },
  {
    title: "Langues",
    info: [
      {
        title: "English",
        stage: "Fluent",
      },
      {
        title: "French",
        stage: "Fluent",
      },
      {
        title: "Polish",
        stage: "Native",
      },
      { title: "Spanish", stage: "C1" },
    ],
  },
];

const AboutFR = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full bg-primary/30 py-18 md:py-22 text-center xl:text-left overflow-y-scroll no-scrollbar">
      {/* <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div> */}
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6 overflow-y-scroll no-scrollbar">
        {/* text */}
        <div className="mt-28 md:mt-8 flex-1 flex flex-col justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2"
          >
            <span className="text-accent">L'excellence numérique </span>
            par l'expertise et l'expérience.
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] text-[13px] md:text-[15px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Avec mon studio boutique, j'apporte une richesse de succès et
            d'expertise issue de ma carrière florissante dans les entreprises du
            Fortune 500. Fort d'un bilan prouvé de résultats exceptionnels, je
            suis prêt à apporter le même niveau d'excellence et de détermination
            à chaque projet que j'entreprends.
          </motion.p>
          {/* counter */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={15} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Years in Financial Industry
                </div>
              </div>
              {/* clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={50} duration={5} /> +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Satisfied stakeholders & clients
                </div>
              </div>
              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp start={0} end={12} duration={5} />+
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Large scale projects
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* INFO */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 cl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center justify-start text-white/70"
                >
                  <div className="font-light mb-2 md:mb-0 text-[14px]">
                    {item.title}
                  </div>
                  <div className="hidden md:flex">-</div>
                  <div className="text-[14px] text-white/90">{item.stage}</div>
                  <div className="flex gap-x-4">
                    {item.icons?.map((icon, iconIndex) => {
                      return (
                        <div
                          key={iconIndex}
                          className="text-xl md:text-3xl text-white"
                        >
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutFR;
