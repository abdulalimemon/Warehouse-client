import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper";
import asus from '../../assets/brand/Asus.png';
import dell from '../../assets/brand/dell.png';
import gigabyte from '../../assets/brand/gigabyte.png';
import hp from '../../assets/brand/hp.png';
import intel from '../../assets/brand/intel.png';
import microsoft from '../../assets/brand/microsoft.png';
import nvidia from '../../assets/brand/nvidia.png';
import ryzen from '../../assets/brand/ryzen.png';


const Brand = () => {
    const brandImg = [
        {
            "id": 1,
            "img": asus
        },
        {
            "id": 2,
            "img": dell
        },
        {
            "id": 3,
            "img": gigabyte
        },
        {
            "id": 4,
            "img": hp
        },
        {
            "id": 5,
            "img": intel
        },
        {
            "id": 6,
            "img": microsoft
        },
        {
            "id": 7,
            "img": nvidia
        },
        {
            "id": 8,
            "img": ryzen
        }
    ]
    return (
        <div className="bgBrand py-10">
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
                            <SwiperSlide className="px-0 md:px-10" key={brand.id}>
                                <img className="py-10 w-full md:w-3/4 h-40" src={brand.img} key={brand.id} alt="Brand" />
                            </SwiperSlide>
                        </>)
                    }
                </div>

            </Swiper>
        </div>
    );
};

export default Brand;