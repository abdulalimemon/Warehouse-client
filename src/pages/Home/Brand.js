import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination} from "swiper";
import Img1 from '../../assets/microsoft.png';


const Brand = () => {
    const brandImg = [
        {
            "img": Img1
        },
        {
            "img": Img1
        },
        {
            "img": Img1
        },
        {
            "img": Img1
        }
    ]
    return (
        <div className="bgBodySecondary py-10">
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                slidesPerGroup={3}
                loop={true}
                loopFillGroupWithBlank={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper container"
            >
                <div>
                    {
                        brandImg.map(brand => <>
                            <SwiperSlide className="px-0 md:px-10">
                                <img className="py-10 w-full md:w-3/4" src={brand.img} alt="Brand" />
                            </SwiperSlide>
                        </>)
                    }
                </div>

            </Swiper>
        </div>
    );
};

export default Brand;