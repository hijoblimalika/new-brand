import React from 'react'
import "./Banner.css"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
function Banner() {
    return (
        <div className='container banner'>
            <Swiper
                pagination={{
                    dynamicBullets: true,
                }}
                modules={[Pagination]}
                loop={true}
                className="mySwiper"
            >
                <SwiperSlide><img src="https://firebasestorage.googleapis.com/v0/b/team-c9a5a.appspot.com/o/%D0%90%D0%BD%D0%BD%D0%BE%D1%82%D0%B0%D1%86%D0%B8%D1%8F%202023-03-01%20141609.png?alt=media&token=5950b08e-40c2-46d3-a64c-b886527066e1" alt="" /></SwiperSlide>
                
            </Swiper>
        </div>
    )
}

export default Banner