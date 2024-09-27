"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import hero2 from "../../public/img/banner-hero2.png";
import heroKid from "@/assets/hero-kid.png";

const HeroCarousel = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="swiper-hero bg-customPink hero relative "
    >
      <SwiperSlide>
        <div className="container max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 py-4 ">
          <div className="col-span-2 self-center pt-8 md:pt-28">
            <h1 className="text-2xl lg:text-5xl font-bold text-white ">
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

            <button className="btn btn-cta text-lg text-white shadow-xl mt-6  md:mt-8 px-8 bg-white text-customPink   font-semibold rounded shadow-xl">
              Empezá ahora
            </button>
          </div>

          <div className="hidden sm:block self-center justify-self-center pt-20  ">
            <Image src={heroKid} width={900} alt="oval" className="" />
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="banner-hero2 ">
          <div className="flex container">
            <div className="banner-info max-w-[500px] p-6 rounded-xl bg-customPink/80 text-white backdrop-blur-sm mt-24  ">
              <h2 className="text-2xl lg:text-5xl font-bold ">
                Examen AACI <br />
              </h2>
              <p className="text-lg font-semibold mb-6 mt-1">
                (Asociación Argentina de Cultura Inglesa)
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                asperiores quia accusamus dolorem debitis sed, quae, doloremque
              </p>
              <button className="btn btn-cta text-lg text-white shadow-xl mt-6  md:mt-8 px-8 bg-white text-customPink   font-semibold rounded shadow-xl">
                + Informacion
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="banner-hero3 ">
          <div className="flex container">
            <div className="banner-info max-w-[500px] p-10 rounded-xl bg-customViolet/80 text-white backdrop-blur-sm mt-24  ">
              <h2 className="text-2xl lg:text-5xl font-bold ">
                Examen AACI <br />
              </h2>
              <p className="text-lg font-semibold mb-6 mt-1">
                (Asociación Argentina de Cultura Inglesa)
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
                asperiores quia accusamus dolorem debitis sed, quae, doloremque
              </p>
              <button className="btn btn-cta text-lg text-white shadow-xl mt-6  md:mt-8 px-8 bg-white text-customPink   font-semibold rounded shadow-xl">
                + Info Examen AACI
              </button>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      ...
    </Swiper>
  );
};

export default HeroCarousel;
