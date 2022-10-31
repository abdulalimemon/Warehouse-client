import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import './Home.css';
import Slide from "./Slide";
import Img1 from '../../assets/avatar.png';


const HeroSection = () => {
  const sliderData = [
    {
      "id": 11,
      "key": 111,
      "name": "Online Consultations",
      "img": Img1
    },
    {
      "id": 12,
      "key": 112,
      "name": "Online Consultations",
      "img": Img1
    },
    {
      "id": 13,
      "key": 113,
      "name": "Online Consultations",
      "img": Img1
    }
  ]
  return (
    <div className="bgBodyPrimary py-10">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper container"
      >
        <div>
          {
            sliderData.map(slide => <>
              <SwiperSlide key={slide.key}>
                <Slide key={slide.id} slide={slide}></Slide>
              </SwiperSlide>
            </>)
          }
        </div>
      </Swiper>
    </div>
  );
};

export default HeroSection;
