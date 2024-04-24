import React, { createContext, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchHospitals from "../components/HospitalSearchBar/SearchHospitals";
import NavigationBar from "../components/HosptalNavigationBar/NavigationBar";
import Banner from "../components/banner/Banner";

import Herocontainer from "../components/Hero.jsx/Herocontainer";

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
      <h1>Hello</h1>
      </div>
    </div>
  );
};

export default LandingPage;
