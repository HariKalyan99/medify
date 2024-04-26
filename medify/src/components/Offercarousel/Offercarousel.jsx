import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
// import required modules
import "./Offercarousel.module.css";

import { Pagination, Scrollbar, Navigation } from "swiper/modules";
import client1 from "../../assets/offer1.svg";
import client2 from "../../assets/offer2.svg";

import d1 from "../../assets/d1.svg";
import d2 from "../../assets/d2.svg";
import d3 from "../../assets/d3.svg";
import d4 from "../../assets/d4.svg";
import d5 from "../../assets/d5.svg";

export default function Offercarousel({ from }) {
  if (from === "specialist") {
    return (
      <>
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            640: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3.5,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4.5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="doctoreBg mb-5 mt-2">
              <img src={d1} alt="docd1" />
            </div>
            <h1
              className="text-center "
              style={{ fontSize: "24px", color: "#1B3C74" }}
            >
              Dr. Lesley Hull
            </h1>
            <p
              className="text-center mb-5"
              style={{ fontSize: "16px", color: "#2AA7FF" }}
            >
              Medicine
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <div className="doctoreBg mb-5 mt-2">
              <img src={d2} alt="docd2" />
            </div>
            <h1
              className="text-center "
              style={{ fontSize: "24px", color: "#1B3C74" }}
            >
              Dr. Ahmad Khan
            </h1>
            <p
              className="text-center mb-5"
              style={{ fontSize: "16px", color: "#2AA7FF" }}
            >
              Neurologist
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <div className="doctoreBg mb-5 mt-2">
              <img src={d3} alt="docd3" />
            </div>
            <h1
              className="text-center "
              style={{ fontSize: "24px", color: "#1B3C74" }}
            >
              Dr. Heena Sachdeva
            </h1>
            <p
              className="text-center mb-5"
              style={{ fontSize: "16px", color: "#2AA7FF" }}
            >
              Orthopadics
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <div className="doctoreBg mb-5 mt-2">
              <img src={d4} alt="docd4" />
            </div>
            <h1
              className="text-center "
              style={{ fontSize: "24px", color: "#1B3C74" }}
            >
              Dr. Ankur Sharma
            </h1>
            <p
              className="text-center mb-5"
              style={{ fontSize: "16px", color: "#2AA7FF" }}
            >
              Medicine
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <div className="doctoreBg mb-5 mt-2">
              <img src={d5} alt="docd5" />
            </div>
            <h1
              className="text-center "
              style={{ fontSize: "24px", color: "#1B3C74" }}
            >
              Dr. Ahmad Khan
            </h1>
            <p
              className="text-center mb-5"
              style={{ fontSize: "16px", color: "#2AA7FF" }}
            >
              Neurologist
            </p>
          </SwiperSlide>

          <SwiperSlide>
            <div className="doctoreBg mb-5 mt-2">
              <img src={d3} alt="docd3" />
            </div>
            <h1
              className="text-center "
              style={{ fontSize: "24px", color: "#1B3C74" }}
            >
              Dr. Heena Sachdeva
            </h1>
            <p
              className="text-center mb-5"
              style={{ fontSize: "16px", color: "#2AA7FF" }}
            >
              Orthopadics
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <div className="doctoreBg mb-5 mt-2">
              <img src={d4} alt="docd4" />
            </div>
            <h1
              className="text-center "
              style={{ fontSize: "24px", color: "#1B3C74" }}
            >
              Dr. Ankur Sharma
            </h1>
            <p
              className="text-center mb-5"
              style={{ fontSize: "16px", color: "#2AA7FF" }}
            >
              Medicine
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <div className="doctoreBg mb-5 mt-2">
              <img src={d5} alt="docd5" />
            </div>
            <h1
              className="text-center "
              style={{ fontSize: "24px", color: "#1B3C74" }}
            >
              Dr. Ahmad Khan
            </h1>
            <p
              className="text-center mb-5"
              style={{ fontSize: "16px", color: "#2AA7FF" }}
            >
              Neurologist
            </p>
          </SwiperSlide>
        </Swiper>
      </>
    );
  } else if(from === "bookingDates") {
    return (
        <Swiper
          slidesPerView={3}
          spaceBetween={10}
          navigation={true}
          scrollbar={true}
          breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          modules={[Pagination, Scrollbar, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide className="mb-3" >
            <h1 style={{fontSize: "16px", textAlign: "center"}}>Today</h1>
            <p style={{fontSize: "12px", color : "#01A400", textAlign: "center"}}>11 slots available</p>
          </SwiperSlide>
          <SwiperSlide className="mb-3">
            <h1 style={{fontSize: "16px", textAlign: "center"}}>Today</h1>
            <p style={{fontSize: "12px", color : "#01A400", textAlign: "center"}}>11 slots available</p>
          </SwiperSlide>
          <SwiperSlide className="mb-3">
            <h1 style={{fontSize: "16px", textAlign: "center"}}>Today</h1>
            <p style={{fontSize: "12px", color : "#01A400", textAlign: "center"}}>11 slots available</p>
          </SwiperSlide>
          <SwiperSlide className="mb-3">
            <h1 style={{fontSize: "16px", textAlign: "center"}}>Today</h1>
            <p style={{fontSize: "12px", color : "#01A400", textAlign: "center"}}>11 slots available</p>
          </SwiperSlide>
          <SwiperSlide className="mb-3">
            <h1 style={{fontSize: "16px", textAlign: "center"}}>Today</h1>
            <p style={{fontSize: "12px", color : "#01A400", textAlign: "center"}}>11 slots available</p>
          </SwiperSlide>
          <SwiperSlide className="mb-3">
            <h1 style={{fontSize: "16px", textAlign: "center"}}>Today</h1>
            <p style={{fontSize: "12px", color : "#01A400", textAlign: "center"}}>11 slots available</p>
          </SwiperSlide>
          <SwiperSlide className="mb-3">
            <h1 style={{fontSize: "16px", textAlign: "center"}}>Today</h1>
            <p style={{fontSize: "12px", color : "#01A400", textAlign: "center"}}>11 slots available</p>
          </SwiperSlide>
          
        </Swiper>
    );
  }else{
    return (
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
            <img src={client1} alt="ads" className="mb-5" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={client2} alt="ads" className="mb-5" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={client1} alt="ads" className="mb-5" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={client2} alt="ads" className="mb-5" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={client1} alt="ads" className="mb-5" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={client2} alt="ads" className="mb-5" />
          </SwiperSlide>
        </Swiper>
      </>
    );
  }
}
