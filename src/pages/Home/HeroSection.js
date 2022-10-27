import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import './Home.css';
import Slide from "./Slide";
import Img1 from '../../assets/microsoft.png';


const HeroSection = () => {
  const sliderData = [
    {
      "id": 1,
      "name": "Online Consultations",
      "img": Img1
    },
    {
      "id": 2,
      "name": "Online Consultations",
      "img": Img1
    },
    {
      "id": 3,
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
              <SwiperSlide>
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
