import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import NavigationBar from "../components/HosptalNavigationBar/NavigationBar";
import SearchHospitals from "../components/HospitalSearchBar/SearchHospitals";
import FaqSection from "../components/faq/FaqSection";
import AppFooter from "../components/Footer/AppFooter";
import Banner from "../components/banner/Banner";
import ad from "../assets/ad.svg";

import { healthCenterStore } from "../store/HealthStore";
import MedicalCard from "../components/medicalCard/MedicalCard";

const MyBookingsPage = () => {
  const [dataFromLocal, setDataFromLocal] = useState([]);

  const { getLocalData } = useContext(healthCenterStore);

  useEffect(() => {
    setDataFromLocal(getLocalData);
  }, []);

  return (
    <div>
      <Banner />
      <NavigationBar />

      <div className="container-fluid bluebar">
        <div className="d-flex justify-content-center w-100 container align-items-end">
          <h1
            className="w-50 fw-bold"
            style={{ fontSize: "40px", color: "white" }}
          >
            My Bookings
          </h1>
          <div className="container-fluid bluebar">
            <SearchHospitals from={"bookingPage"} />
          </div>
        </div>
      </div>

      <div className="container-fluid healthCenters">
        <div
          className="container d-flex justify-content-center gap-3 pt-5 healthCenters2"
          style={{ paddingBottom: "100px" }}
        >
          <div className="d-flex flex-column gap-5 pt-5 pb-5 subHealthCenter">
            {dataFromLocal.map((center, ind) => (
              <MedicalCard key={center.center["Provider ID"]} center={center} />
            ))}
          </div>
          <div className="w-25 bookingLists mt-5 advert">
            <img
              src={ad}
              alt="ads"
              className="h-100"
              style={{ width: "100%" }}
            />
          </div>
        </div>
      </div>
      <FaqSection />

      <AppFooter />
    </div>
  );
};

export default MyBookingsPage;
