import React, { createContext, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchHospitals from "../components/HospitalSearchBar/SearchHospitals";
import NavigationBar from "../components/HosptalNavigationBar/NavigationBar";
import Banner from "../components/banner/Banner";

import Herocontainer from "../components/Hero.jsx/Herocontainer";
import Offercarousel from "../components/Offercarousel/Offercarousel";


import xray from '../assets/X-Ray.svg';
import Drugstore from '../assets/Drugstore.svg';
import Stethoscope from '../assets/Stethoscope.svg';
import Heart from '../assets/Heart Rate Monitor.svg';
import Blood from '../assets/Blood Sample.svg';
import y from '../assets/y.svg';
import q from '../assets/q.svg';

const LandingPage = () => {
  return (
    <div style={{ height: "200vh" }}>
      {/* <h1>LandingPage</h1>
        <Link to={"/search-results"}>
            <button>Search result</button>
        </Link>

        <h1>My Bookings</h1>
        <Link to={"/bookings"}>
            <button>Bookings</button>
        </Link> */}

      {/* <SearchHospitals /> */}
      <Banner />

      <div className="heroContainer">
        <NavigationBar />
        <Herocontainer />

        <div className="container-fluid d-flex justify-content-center">
          <div
            className="d-flex flex-column container justify-content-center align-items-center"
            style={{
              backgroundColor: "white",
              position: "absolute",
              top: "550px",
              border: "none",
              borderRadius: "1.5rem",
              boxShadow: "0px 4px 4rem #e0e2e7",
            }}
          >
            <SearchHospitals />
          </div>
        </div>
      </div>
      <div className="container position-relative" style={{marginTop: "200px"}}>
      <Offercarousel />
      </div>

      <div className="specialization mt-5 d-flex flex-column  justify-content-center align-items-center">
        <h1>Find by specialisation</h1>
      <div className="d-flex justify-content-between flex-wrap align-items-center h-75 w-100 m-4 container g-5" >
          <div className="d-flex justify-content-center align-items-center flex-column" style={{backgroundColor: "#FAFBFE", border: "1px solid black", height: "180px", width: "270px", borderRadius: '1rem', border: "none", boxShadow: "1px 10px 1rem #e0e2e7"}}>
            <img src={Drugstore} alt="doc-logo" />
            <p>Dentistry</p>
          </div>
          <div className="d-flex justify-content-center align-items-center flex-column" style={{backgroundColor: "#FAFBFE", border: "1px solid black", height: "180px", width: "270px", borderRadius: '1rem', border: "none", boxShadow: "1px 10px 1rem #e0e2e7"}}>
            <img src={Stethoscope} alt="doc-logo" />
            <p>Primary Care</p>
          </div>
          <div className="d-flex justify-content-center align-items-center flex-column" style={{backgroundColor: "#FAFBFE", border: "1px solid black", height: "180px", width: "270px", borderRadius: '1rem', border: "none", boxShadow: "1px 10px 1rem #e0e2e7"}}>
            <img src={y} alt="doc-logo" />
            <p>Cardiology</p>
          </div>
          <div className="d-flex justify-content-center align-items-center flex-column" style={{backgroundColor: "#FAFBFE", border: "1px solid black", height: "180px", width: "270px", borderRadius: '1rem', border: "none", boxShadow: "1px 10px 1rem #e0e2e7"}}>
            <img src={Heart} alt="doc-logo" />
            <p>MRI Resonance</p>
          </div>
          <div className="d-flex justify-content-center align-items-center flex-column" style={{backgroundColor: "#FAFBFE", border: "1px solid black", height: "180px", width: "270px", borderRadius: '1rem', border: "none", boxShadow: "1px 10px 1rem #e0e2e7"}}>
            <img src={Blood} alt="doc-logo" />
            <p>Blood Test</p>
          </div>
          <div className="d-flex justify-content-center align-items-center flex-column" style={{backgroundColor: "#FAFBFE", border: "1px solid black", height: "180px", width: "270px", borderRadius: '1rem', border: "none", boxShadow: "1px 10px 1rem #e0e2e7"}}>
            <img src={q} alt="doc-logo" />
            <p>Piscologist</p>
          </div>
          <div className="d-flex justify-content-center align-items-center flex-column" style={{backgroundColor: "#FAFBFE", border: "1px solid black", height: "180px", width: "270px", borderRadius: '1rem', border: "none", boxShadow: "1px 10px 1rem #e0e2e7"}}>
            <img src={Drugstore} alt="doc-logo" />
            <p>Laboratory</p>
          </div>
          <div className="d-flex justify-content-center align-items-center flex-column" style={{backgroundColor: "#FAFBFE", border: "1px solid black", height: "180px", width: "270px", borderRadius: '1rem', border: "none", boxShadow: "1px 10px 1rem #e0e2e7"}}>
            <img src={xray} alt="doc-logo" />
            <p>X-Ray</p>
          </div>
        </div>

        <div>
        <button type='button' className='btn text-light px-5' style={{backgroundColor: "#2AA8FF"}}>View All</button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
