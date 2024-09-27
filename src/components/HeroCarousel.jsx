"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  Autoplay,
  EffectFade,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import Image from "next/image";
import heroKid from "@/assets/hero-kid.png";

const HeroCarousel = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, Autoplay, EffectFade]}
      pagination={{ clickable: true }}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      effect="fade" // Activar el efecto de fade
      fadeEffect={{ crossFade: true }} // Opcional: Hacer que el fade sea más fluido entre slides
      speed={1500}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="swiper-hero  hero relative overflow-hidden"
    >
      <SwiperSlide className="banner-hero1 bg-customPink">
        <div className="container max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 py-4 ">
          <div className="self-center justify-self-center block md:hidden">
            <Image
              src={heroKid}
              width={400}
              alt="oval"
              className="w-[70%] mx-auto mb-2 mt-6 md:mb-10 "
            />
          </div>
          <div className="col-span-2 self-center ">
            <h1 className="text-2xl lg:text-5xl font-bold text-white md:mt-4 ">
              Aprendé inglés en Lingua
            </h1>
            <h2 className=" md:block text-2xl lg:text-5xl font-bold text-white ">
              Transformá tu Futuro.
            </h2>
            <p className="mt-4 text-md lg:text-xl text-white max-w-2xl ">
              Somos la Casa de Idiomas de Escobar con más de
              <strong> 30 años de experiencia </strong> en la enseñanza del
              idioma Inglés.
            </p>

            <a
              href="#about"
              className="btn btn-cta text-lg text-white shadow-xl mt-6  md:mt-8 px-8 bg-white text-customPink   font-semibold rounded shadow-xl"
            >
              Descubrí más
            </a>
          </div>

          <div className="hidden sm:block self-center justify-self-center pt-10  me-4">
            <Image src={heroKid} width={900} alt="oval" className="" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="banner-hero4 ">
          <div className="flex container">
            <div className="banner-info max-w-[450px] text-white mt-44 md:mt-36 rounded-xl ">
              <h2 className="text-2xl lg:text-5xl font-bold ">
                Cursos de inglés a medida <br />
              </h2>
              <p className="text-xl  mb-6 mt-4">
                Para niños, adolescentes, adultos y el personal de empresas.
              </p>
              <p className="font-bold"></p>
              <button className="btn text-lg text-white  shadow-xl mt-6  md:mt-4 px-8 font-semibold rounded shadow-xl">
                + Informacion
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="banner-hero2 ">
          <div className="flex container">
            <div className="banner-info max-w-[500px] text-white mt-44 md:mt-36">
              <h2 className="text-2xl lg:text-5xl font-bold ">
                Examen AACI <br />
              </h2>
              <p className="text-xl  mb-6 mt-4">
                (Asociación Argentina de Cultura Inglesa) <br />
                Certificá tu nivel de inglés
              </p>
              <p className="font-bold"></p>
              <button className="btn text-lg text-white  shadow-xl mt-6  md:mt-4 px-8 font-semibold rounded shadow-xl">
                + Informacion
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="banner-hero3 ">
          <div className="flex container">
            <div className="banner-info max-w-[600px] text-white mt-44 md:mt-36 rounded-xl s">
              <h2 className="text-2xl lg:text-5xl font-bold ">
                Traducciones públicas <br />
              </h2>
              <p className="text-xl mb-6 mt-4">
                Ofrecemos servicio de traducciones públicas para personas,
                instituciones o empresas.
              </p>
              <p className="font-bold"></p>
              <button className="btn text-lg text-white  shadow-xl mt-6  md:mt-4 px-8 font-semibold rounded shadow-xl">
                + Informacion
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default HeroCarousel;
