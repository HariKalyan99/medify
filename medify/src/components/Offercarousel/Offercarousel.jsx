import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
// import required modules
import styles from "../Offercarousel/Offercarousel.module.css";

import { Pagination, Scrollbar, Navigation } from "swiper/modules";
import client1 from "../../assets/offer1.svg";
import client2 from "../../assets/offer2.svg";

import d1 from "../../assets/d1.svg";
import d2 from "../../assets/d2.svg";
import d3 from "../../assets/d3.svg";
import d4 from "../../assets/d4.svg";
import d5 from "../../assets/d5.svg";

export default function Offercarousel({ from, dateForLocal }) {


  const [getActive, setActive] = useState('');

  const [datesAccording, setDatesAccording] = useState([]);

  

  useEffect(() => {
    if(from === "bookingDates"){
      let dateArrLocal = localStorage.getItem('datesArr');
      setDatesAccording(JSON.parse(dateArrLocal))
    }
  }, [])


  const handleActive = (val) => {
    dateForLocal(val)
    setActive(val)
  }

  
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
            375: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            425: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 1.5,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 100,
            },
            1280: {
              slidesPerView: 4.5,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          className="mySwiper "
        >
          <SwiperSlide>
            <div className="doctoreBg mb-5 mt-2">
              <img src={d1} alt="docd1" className="docd1"/>
            </div>
            <h1
              className="text-center textAl "
              style={{ fontSize: "24px", color: "#1B3C74" }}
            >
              Dr. Lesley Hull
            </h1>
            <p
              className="text-center textAl mb-5"
              style={{ fontSize: "16px", color: "#2AA7FF" }}
            >
              Medicine
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <div className="doctoreBg mb-5 mt-2">
              <img src={d2} alt="docd2" className="docd1"/>
            </div>
            <h1
              className="text-center textAl "
              style={{ fontSize: "24px", color: "#1B3C74" }}
            >
              Dr. Ahmad Khan
            </h1>
            <p
              className="text-center textAl mb-5"
              style={{ fontSize: "16px", color: "#2AA7FF" }}
            >
              Neurologist
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <div className="doctoreBg mb-5 mt-2">
              <img src={d3} alt="docd3" className="docd1"/>
            </div>
            <h1
              className="text-center textAl "
              style={{ fontSize: "24px", color: "#1B3C74" }}
            >
              Dr. Heena Sachdeva
            </h1>
            <p
              className="text-center textAl mb-5"
              style={{ fontSize: "16px", color: "#2AA7FF" }}
            >
              Orthopadics
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <div className="doctoreBg mb-5 mt-2">
              <img src={d4} alt="docd4" className="docd1"/>
            </div>
            <h1
              className="text-center textAl "
              style={{ fontSize: "24px", color: "#1B3C74" }}
            >
              Dr. Ankur Sharma
            </h1>
            <p
              className="text-center textAl mb-5"
              style={{ fontSize: "16px", color: "#2AA7FF" }}
            >
              Medicine
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <div className="doctoreBg mb-5 mt-2">
              <img src={d5} alt="docd5" className="docd1"/>
            </div>
            <h1
              className="text-center textAl "
              style={{ fontSize: "24px", color: "#1B3C74" }}
            >
              Dr. Ahmad Khan
            </h1>
            <p
              className="text-center textAl mb-5"
              style={{ fontSize: "16px", color: "#2AA7FF" }}
            >
              Neurologist
            </p>
          </SwiperSlide>

          <SwiperSlide>
            <div className="doctoreBg mb-5 mt-2">
              <img src={d3} alt="docd3" className="docd1"/>
            </div>
            <h1
              className="text-center textAl "
              style={{ fontSize: "24px", color: "#1B3C74" }}
            >
              Dr. Heena Sachdeva
            </h1>
            <p
              className="text-center textAl mb-5"
              style={{ fontSize: "16px", color: "#2AA7FF" }}
            >
              Orthopadics
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <div className="doctoreBg mb-5 mt-2">
              <img src={d4} alt="docd4" className="docd1"/>
            </div>
            <h1
              className="text-center textAl "
              style={{ fontSize: "24px", color: "#1B3C74" }}
            >
              Dr. Ankur Sharma
            </h1>
            <p
              className="text-center textAl mb-5"
              style={{ fontSize: "16px", color: "#2AA7FF" }}
            >
              Medicine
            </p>
          </SwiperSlide>
          <SwiperSlide>
            <div className="doctoreBg mb-5 mt-2">
              <img src={d5} alt="docd5" className="docd1"/>
            </div>
            <h1
              className="text-center textAl "
              style={{ fontSize: "24px", color: "#1B3C74" }}
            >
              Dr. Ahmad Khan
            </h1>
            <p
              className="text-center textAl mb-5"
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
            375: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            425: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          modules={[Pagination, Scrollbar, Navigation]}
          className="mySwiperDate"
        >
          
          
          {datesAccording.map((date, ind) => 
              <SwiperSlide key={date+ind}>
            <div className={`sliderContainer w-50 ${getActive === date && 'sliderContainerActive'}`} onClick={() => handleActive(date)}>
            <h1 className="dateTextH1" style={{ textAlign: "center"}}>{`${ind == 0 ? "Today" : ind == 1 ? "Tomorrow" : date}`}</h1>
            <p className="dateTextp" style={{ color : "#01A400", textAlign: "center"}}>11 slots available</p>
            </div>
          </SwiperSlide>
            )}
          
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
            375: {
              slidesPerView: 1,
              spaceBetween: 80,
            },
            425: {
              slidesPerView: 1,
              spaceBetween: 100,
            },
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 150,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 250,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 50,
            },
          }}
          modules={[Pagination]}
          
        >
          <SwiperSlide>
            <img src={client1} alt="ads" className="mb-5 landImage" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={client2} alt="ads" className="mb-5 landImage" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={client1} alt="ads" className="mb-5 landImage" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={client2} alt="ads" className="mb-5 landImage" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={client1} alt="ads" className="mb-5 landImage" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={client2} alt="ads" className="mb-5 landImage" />
          </SwiperSlide>
        </Swiper>
      </>
    );
  }
}
