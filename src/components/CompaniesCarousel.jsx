"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import Card2 from "./Card2";

const CoursesCarousel = () => {
  return (
    <Swiper
      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
      }}
      modules={[Pagination]}
      spaceBetween={20}
      slidesPerView={1.2}
      centeredSlides={true}
      pagination={{ clickable: true }}
      className="swiper-courses  overflow-hidden"
    >
      <SwiperSlide>
        <Card2
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed purus consectetur, onec sed purus consectet Donec sed purus consectetur,"
          title="Cursos «in-company» "
          img={"/img/empresas.webp"}
        />
      </SwiperSlide>

      <SwiperSlide>
        <Card2
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed purus consectetur, onec sed purus consectet  Donec sed purus consectetur,"
          title="Cursos en Lingua"
          img={"/img/empresas.webp"}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default CoursesCarousel;
