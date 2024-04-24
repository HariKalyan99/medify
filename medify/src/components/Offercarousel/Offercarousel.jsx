import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import styles from './Offercarousel.module.css';

import {Pagination } from "swiper/modules";
import client1 from '../../assets/offer1.svg';
import client2 from '../../assets/offer2.svg';
import client3 from '../../assets/offer1.svg';

export default function Offercarousel() {
  return(
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={10}
        pagination={{
          clickable: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
            <img src={client1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={client2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={client1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={client2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={client1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img src={client2} alt="" />
        </SwiperSlide>
      </Swiper>
    </>
  )
  
}