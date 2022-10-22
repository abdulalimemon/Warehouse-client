import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import './Home.css';
import Slide from "./Slide";

const HeroSection = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Slide></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide></Slide>
        </SwiperSlide>
        <SwiperSlide>
          <Slide></Slide>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default HeroSection;
