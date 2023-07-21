import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";

// Import Swiper styles
import "swiper/swiper.css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import { RxArrowTopRight } from "react-icons/rx";

import { FreeMode, Pagination } from "swiper";

import { BsArrowRight } from "react-icons/bs";

// data
const workSlides = {
  slides: [
    {
      images: [
        {
          title: "Better GPT",
          path: "/demos/bettergpt.png",
          link: "https://bettergpt.vabank.dev",
          stack: "OpenAI, Next.js, TailwindCSS, Firebase, NextAuth",
        },
        {
          title: "Car rental",
          path: "/demos/carshow.png",
          link: "https://carshow-kappa.vercel.app/",
          stack: "React/Next.js, TailwindCSS, RapidApi",
        },

        {
          title: "Map Inpost",
          path: "/demos/mapinpost.png",
          link: "https://inpostfinder.vabank.dev/map",
          stack: "DeckGL, Next.js, TailwindCSS, Firebase",
        },
        {
          title: "My Training",
          path: "/demos/corsetorse.png",
          link: "https://mytraining.vabank.me/",
          stack: "OpenAI, Next.js, TailwindCSS, MongoDB, NextAuth",
        },
      ],
    },
    {
      images: [
        {
          title: "Netflix clone",
          path: "/demos/netflix.png",
          link: "https://newnetflix-5355c.web.app/",
          stack: "React, Next.js, TailwindCSS, Firebase",
        },
        {
          title: "Pizza online",
          path: "/demos/pizzadelivery.png",
          link: "https://pizzadelivery-five.vercel.app/",
          stack: "React, Next.js, TailwindCSS",
        },
        {
          title: "AI weather app",
          path: "/demos/weatherai.png",
          link: "https://aiweather.vabank.dev/",
          stack: "React, Next.js, TailwindCSS",
        },
        {
          title: "Payintel",
          path: "/demos/payintel.png",
          link: "https://pay-intel.vercel.app/",
          stack: "React, Next.js, TailwindCSS, Firebase, NextAuth",
        },
      ],
    },

    {
      images: [
        {
          title: "WU clone",
          path: "/demos/wuclone.png",
          link: "https://truewubankpl.vercel.app/en",
          stack: "React, Next.js, TailwindCSS, NextAuth",
        },
        {
          title: "eCommerce",
          path: "/demos/electrocommerce.png",
          link: "https://nextcommerce-one-mu.vercel.app/",
          stack: "React, Next.js, TailwindCSS, Firebase",
        },
        {
          title: "Amazon clone",
          path: "/demos/amazonclone.png",
          link: "https://amazon4-two.vercel.app/",
          stack: "React, Next.js, TailwindCSS, Firebase, NextAuth",
        },
        {
          title: "Hoobank",
          path: "/demos/hoobank.png",
          link: "https://www.piotrmaciejewski.com",
          stack: "React, Next.js, TailwindCSS",
        },
      ],
    },
    {
      images: [
        {
          title: "AMPM Hotel",
          path: "/demos/ampmhotel.png",
          link: "https://ampmhotel.vercel.app/",
          stack: "React, Next.js, TailwindCSS",
        },
        {
          title: "Hoobank",
          path: "/demos/hoobank.png",
          link: "https://bankapp-seven.vercel.app/",
          stack: "React, Next.js, TailwindCSS, Firebase",
        },
        {
          title: "Airbnb clone",
          path: "/demos/airbnb.png",
          link: "https://arbb.vercel.app/",
          stack: "React, Next.js, TailwindCSS, Firebase",
        },
        {
          title: "My previous Portfolio",
          path: "/demos/prevportfolio.png",
          link: "https://newportfolionext-ktkr.vercel.app/",
          stack: "React, Next.js, TailwindCSS, Sanity.io",
        },
      ],
    },
  ],
};

const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className="sm:h-[480px] md:h-[380px]  xl:h-[640px]"
    >
      {workSlides.slides.map((slide, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-2 grid-rows-2 gap-4 cursor-pointer">
              {slide.images.map((image, index) => {
                return (
                  <Link
                    href={image.link}
                    traget="_blank"
                    key={index}
                    noopener
                    noreferrer
                  >
                    <div className="relative rounded-lg overflow-hidden flex items-center justify-center group">
                      <div className="flex items-center justify-center relative overflow-hidden group h-64 w-full ">
                        <Image
                          src={image.path}
                          width={500}
                          height={400}
                          alt="projects"
                        />
                        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700"></div>

                        {/* title */}
                        <div className="absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300">
                          <div className="flex items-center gap-x-2 text-[13px] tracking-[0.2em]">
                            <div className="translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-150">
                              {image.stack}
                            </div>
                            <div className="text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-200">
                              <BsArrowRight />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default WorkSlider;
