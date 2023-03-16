import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { EffectCoverflow, Pagination, Navigation } from "swiper";
import Card from "../Card/Card";

import "./Carrusel.css";

const Carrusel = ({cards}) => {
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 1,
          stretch: 10,
          depth:100,
          modifier: 5,
          slideShadows: true,
        }}
        pagination={true}
        navigation={true}
        initialSlide={2}

        modules={[EffectCoverflow, Pagination, Navigation]}
        className="mySwiper"
      >
        {
          cards.map((card) => (
            <SwiperSlide key={card.id}>
              <Card data={card}/>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </>
  );
}

export default Carrusel