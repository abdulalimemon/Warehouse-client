import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import './Home.css';
import Slide from "./Slide";
import i9 from '../../assets/i9.png';
import apple from '../../assets/apple.png';
import gcard from '../../assets/gcard.png';


const HeroSection = () => {
  const sliderData = [
    {
      "id": 11,
      "title": "13th Gen",
      "subTitle":"Intel Core i9 desktop Processors",
      "img": i9
    },
    {
      "id": 12,
      "title": "Apple MacBook Pro",
      "subTitle":"Apple M1 Pro Chip Silver Laptop",
      "img": apple
    },
    {
      "id": 13,
      "title": "Zotac Gaming GeForce GTX 1650",
      "subTitle":"4GB GDDR6 Graphics Card",
      "img": gcard
    }
  ]
  return (
    <div className="bgBodyPrimary pb-10 pt-0 md:pt-10">
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
              <SwiperSlide key={slide.id}>
                <Slide slide={slide}></Slide>
              </SwiperSlide>
            </>)
          }
        </div>
      </Swiper>
    </div>
  );
};

export default HeroSection;
