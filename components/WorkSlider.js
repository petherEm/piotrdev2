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
          title: "PSD Agents in France",
          path: "/demos/psd_france5.png",
          link: "https://psdfrance.vercel.app/hexagonview",
          stack: "Next.js, Mapbox, TailwindCSS",
        },
        {
          title: "Nike Clone",
          path: "/demos/nikeclone3.png",
          link: "https://nikeclone-nine.vercel.app/",
          stack: "Next.js, TailwindCSS",
        },

        {
          title: "Better GPT",
          path: "/demos/bettergpt.png",
          link: "https://bettergpt.vabank.dev",
          stack: "OpenAI, Next.js, TailwindCSS, Firebase, NextAuth",
        },
        {
          title: "Money Transfer Improved",
          path: "/demos/wuclone2.png",
          link: "https://wuimprove2.vercel.app/",
          stack: "Next.js, MongoDB, Zustand, TailwindCSS",
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
          title: "Developedia",
          path: "/demos/developedia.png",
          link: "https://grafbaseproject.vercel.app/",
          stack: "React, Next.js, TailwindCSS, Sanity.io",
        },
      ],
    },

    {
      images: [
        {
          title: "My Training",
          path: "/demos/corsetorse.png",
          link: "https://mytraining.vabank.me/",
          stack: "OpenAI, Next.js, TailwindCSS, MongoDB, NextAuth",
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
    {
      images: [
        {
          title: "Profesor Maciejewska",
          path: "/demos/alina2.png",
          link: "https://profesoralina.vercel.app/wdrozenia",
          stack: "Next.js, TailwindCSS, Shadcn",
        },
        {
          title: "Car rental",
          path: "/demos/carshow.png",
          link: "https://carshow-kappa.vercel.app/",
          stack: "React/Next.js, TailwindCSS, RapidApi",
        },
        {
          title: "Payintel",
          path: "/demos/payintel.png",
          link: "https://pay-intel.vercel.app/",
          stack: "React, Next.js, TailwindCSS, Firebase, NextAuth",
        },

        {
          title: "Map Inpost",
          path: "/demos/mapinpost.png",
          link: "https://inpostfinder.vabank.dev/map",
          stack: "DeckGL, Next.js, TailwindCSS, Firebase",
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
      loop={true}
      freeMode={true}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      modules={[Pagination]}
      className=" h-auto"
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
                      <div className="flex items-center justify-center relative overflow-hidden group w-full">
                        <Image
                          src={image.path}
                          width={500}
                          height={400}
                          alt="projects"
                          className="object-contain object-center"
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
