"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";
import Card from "./Card";

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
        <Card
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed purus consectetur, onec sed purus consectet"
          title="Cursos para niños"
          img={"/img/kids2.png"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Card
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed purus consectetur, onec sed purus consectet"
          title="Cursos para adolescentes"
          img={"/img/curso-kids2.png"}
        />
      </SwiperSlide>
      <SwiperSlide>
        <Card
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sed purus consectetur, onec sed purus consectet"
          title="Cursos para adultos"
          img={"/img/adultos2.png"}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default CoursesCarousel;
