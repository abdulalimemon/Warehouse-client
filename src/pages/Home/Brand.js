import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper";
import { useState } from "react";
import { useEffect } from "react";

const Brand = () => {
    const [brands, setBrands] = useState([]);

    useEffect(() => {
        const url = 'https://warehouse-management-app.onrender.com/brand';
        fetch(url)
            .then(res => res.json())
            .then(data => setBrands(data))
    }, []);

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
                        brands.map(brand => <>
                            <SwiperSlide className="px-0 md:px-10" key={brand._id} >
                                <img className="py-10 w-full md:w-3/4 h-32 md:h-36" src={brand.img} alt="Brand" />
                            </SwiperSlide>
                        </>)
                    }
                </div>

            </Swiper>
        </div>
    );
};

export default Brand;