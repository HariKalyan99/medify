import React, { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { healthCenterStore } from "../store/HealthStore";
import SearchHospitals from "../components/HospitalSearchBar/SearchHospitals";
import Banner from "../components/banner/Banner";
import NavigationBar from "../components/HosptalNavigationBar/NavigationBar";
import AppFooter from "../components/Footer/AppFooter";
import FaqSection from "../components/faq/FaqSection";
import tick from "../assets/tick.svg";

const SearchResultsPage = () => {
  const { getHealthCenter } = useContext(healthCenterStore);

  useEffect(() => {
    console.log(getHealthCenter);
  }, []);
  return (
    <div>
      {/* <h1>SearchResultsPage</h1>
<br />
        <h1>My Bookings</h1>
        <Link to={"/bookings"}>
            <button>Bookings</button>
        </Link>

        <div>
            <SearchHospitals from={"searchPage"}/>
        </div> */}

      <Banner />
      <NavigationBar becomeActive={"findDoctors"} />

      <div className="container-fluid bluebar">
        <SearchHospitals from={"searchPage"} />
      </div>

      <div className="container-fluid healthCenters">
        {/* healthcenters to be populated  */}
        <div
          className="container d-flex flex-column justify-content-center"
          style={{ paddingTop: "150px" }}
        >
          <h1 style={{ fontSize: "24px" }}>
            15 medical centers available in Alaska
          </h1>
          <div className="d-flex gap-4">
            <div>
              <img src={tick} alt="tick_img" />
            </div>
            <p style={{ fontSize: "16px" }}>
              Book appointments with minimum wait-time & verified doctor details
            </p>
          </div>
        </div>

        <div className="d-flex container justify-content-center gap-3">

        <div
          className="d-flex flex-column w-75 justify-content-start mt-3 align-items-start gap-4 "
          style={{ paddingBottom: "100px" }}
        >
          <div className="bookContainer w-100">
            
          </div>
          <div className="bookContainer w-100"></div>
          <div className="bookContainer w-100"></div>
        </div>

        <div className="w-25 bookAppointment mt-3">

        </div>
        </div>
      </div>
      <FaqSection />

      <AppFooter />
    </div>
  );
};

export default SearchResultsPage;
