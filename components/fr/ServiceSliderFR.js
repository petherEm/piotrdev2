import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/swiper.css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

import {
  RxCrop,
  RxPencil2,
  RxDesktop,
  RxReader,
  RxRocket,
  RxArrowTopRight,
} from "react-icons/rx";

import { FreeMode, Pagination } from "swiper";

// data
const serviceData = [
  {
    icon: <RxDesktop />,
    title: "Développement Web",
    description:
      "J'utilise la dernière pile fiable (React/Next.js, Tailwind CSS, Node.js, Sanity, Shopify et quelques autres) pour construire et déployer des applications web évolutives.",
  },
  {
    icon: <RxCrop />,
    title: "Analyse des données",
    description:
      "Mener des recherches innovantes, automatiser les analyses, visualiser les données et élaborer des rapports automatisés complets.",
  },
  {
    icon: <RxPencil2 />,
    title: "Stratégie commerciale",
    description:
      "Je conçois des stratégies commerciales basées sur les données, en tirant parti des connaissances et des analyses pour élaborer des stratégies qui alimentent la croissance, optimisent les opérations et génèrent un avantage concurrentiel durable.",
  },
];

const ServiceSliderFR = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 10,
        },
        640: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      }}
      freeMode={true}
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination]}
      className="md:h-[240px] sm:h-[340px]"
    >
      {serviceData.map((item, index) => {
        return (
          <SwiperSlide key={index}>
            <div className="bg-red-600/10 opacity-80 h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:opacity-70 transition-all duration-300">
              <div className="text-4xl text-accent mb-4">{item.icon}</div>
              <div className="mb-8">
                <div className="mb-2 text-lg">{item.title}</div>
                <p className="text-[14px] md:text-[16px] max-w-[350px] leading-normal">
                  {item.description}
                </p>
              </div>
              <div className="text-3xl">
                <RxArrowTopRight className="group-hover:rotate-45 group-hover:text-accent transition-all duration-300" />
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ServiceSliderFR;
