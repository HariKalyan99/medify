import React from "react";
import SearchHospitals from "../components/HospitalSearchBar/SearchHospitals";
import NavigationBar from "../components/HosptalNavigationBar/NavigationBar";
import Banner from "../components/banner/Banner";

import Herocontainer from "../components/Hero.jsx/Herocontainer";
import Offercarousel from "../components/Offercarousel/Offercarousel";

import AppFooter from "../components/Footer/AppFooter";
import FaqSection from "../components/faq/FaqSection";
import Specializations from "../components/specialization/Specializations";
import PatientCaring from "../components/patientCaring/PatientCaring";
import LatestNews from "../components/latestnews/LatestNews";
import Contributions from "../components/Contribute/Contributions";
const LandingPage = () => {
  return (
    <div>
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

      <div
        className="container position-relative"
        style={{ marginTop: "200px" }}
      >
        <Offercarousel />
      </div>

      <Specializations />

      <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
        <h1>Our Medical Specialist</h1>
        <div
          className="container-fluid position-relative"
          style={{ marginTop: "100px" }}
        >
          <Offercarousel from={"specialist"} />
        </div>
      </div>

      <PatientCaring />

      <LatestNews />

      <Contributions />

      <FaqSection />

      <AppFooter />
    </div>
  );
};

export default LandingPage;
