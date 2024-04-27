import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { healthCenterStore } from "../store/HealthStore";
import SearchHospitals from "../components/HospitalSearchBar/SearchHospitals";
import Banner from "../components/banner/Banner";
import NavigationBar from "../components/HosptalNavigationBar/NavigationBar";
import AppFooter from "../components/Footer/AppFooter";
import FaqSection from "../components/faq/FaqSection";
import tick from "../assets/tick.svg";
import bookHos from "../assets/bookHos.svg";
import like from "../assets/like.svg";
import ad from "../assets/ad.svg";
import Offercarousel from "../components/Offercarousel/Offercarousel";

const SearchResultsPage = () => {
  const { getHealthCenter } = useContext(healthCenterStore);


  const [bookingOpen, setBookingOpen] = useState(false);

  const [hospitalId, setHospitalId] = useState("");

  const [getDateLocal, setDateLocal] = useState("");

  const [geTimeLocal, setTimeLocal] = useState("");

  const [bookingSlots, setBookingSlots] = useState([]);

  const timeForLocal = (val) => {
    setTimeLocal(val);
  }
  const dateForLocal = (val) => {
    setDateLocal(val);
  }

  const addToLocal = (e, center) => {
    e.preventDefault();
    const booking = {
      time: geTimeLocal,
      date: getDateLocal,
      center
    }
    setBookingSlots([booking, ...bookingSlots])
  }


  useEffect(() => {
      localStorage.setItem('bookingSlot', JSON.stringify(bookingSlots));
  }, [bookingSlots])



  useEffect(() => {
    setHospitalId(hospitalId)
  }, [hospitalId]);


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
          {getHealthCenter.length < 1 ? <h1 style={{ fontSize: "24px" }}>
            Search for Medical centers
          </h1>  : <h1 style={{ fontSize: "24px" }}>
            {getHealthCenter.length} medical centers available in {getHealthCenter[0].City}
          </h1>}
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
            className="d-flex flex-column w-75 justify-content-start mt-3 align-items-start gap-4"
            style={{ paddingBottom: "100px" }}
          >
            {getHealthCenter.length < 1 ? <div className="bookContainer w-100 h-100 d-flex flex-column pb-5 pt-2">
              <div className="w-100 d-flex justify-content-center align-items-center">
                <div className="px-5" style={{ height: "100%" }}>
                  <img src={bookHos} alt="healthCenter_logo" />
                </div>
                    <div className="d-flex flex-column justify-content-center align-items-center pt-4">
                    <h1>Uh, Oh...</h1>
                    <h1>No health center found</h1>
                    <p>Search for health centers in your location</p>
                    </div>
              </div>
            </div>  : getHealthCenter.map((center, ind) => <div key={center["Provider ID"]} className="bookContainer w-100 h-100 d-flex flex-column pb-5 pt-2">
              <div className="w-100 d-flex">
                <div className="px-5" style={{ width: "25%", height: "100%" }}>
                  <img src={bookHos} alt="healthCenter_logo" />
                </div>
                <div
                  className="d-flex flex-column justify-content-center pt-4"
                  style={{ width: "45%", height: "100%" }}
                >
                  <h1 style={{ fontSize: "20px" }}>
                    {center["Hospital Name"]}
                  </h1>
                  <p className="fw-bold" style={{ fontSize: "14px" }}>
                  {center.City}, {center["Country Name"]}
                  </p>
                  <p style={{ fontSize: "14px" }}>
                  {center["Hospital Type"]}
                  </p>
                  <div className="d-flex justify-content-between">
                    <p>
                      <span
                        className="fw-bold"
                        style={{ color: "#02A401", fontSize: "14px" }}
                      >
                        FREE
                      </span>{" "}
                      <span style={{ color: "#787887", fontSize: "14px", textDecoration: "line-through"}}>
                        ₹500
                      </span>{" "}
                      Consultation fee at clinic
                    </p>
                  </div>
                  <div
                    className="mb-3"
                    style={{ width: "100%", border: "1px dashed #E8E8F0" }}
                  ></div>
                  <span
                    class="badge"
                    style={{ width: "44px", backgroundColor: "#02A401" }}
                  >
                    {" "}
                    <img src={like} alt="like_badge" /> {center["Hospital overall rating"]}{" "}
                  </span>
                </div>

                <div
                  className="d-flex flex-column justify-content-end align-content-center px-2 pb-4"
                  style={{ width: "30%", height: "100%" }}
                >
                  <p
                    style={{
                      color: "#02A401",
                      fontSize: "14px",
                      textAlign: "center",
                    }}
                  >
                    Available Today
                  </p>
                   {bookingOpen && center["Provider ID"] === hospitalId ? <button
                    type="button"
                    className="btn text-light px-5"
                    style={{ backgroundColor: "#2AA8FF" }}
                    onClick={() => {
                    setBookingOpen(false)
                    setHospitalId(center["Provider ID"])
                    }
                }
                  >
                    Cancel booking
                  </button>  : <button
                    type="button"
                    className="btn text-light px-5"
                    style={{ backgroundColor: "#2AA8FF" }}
                    onClick={() => {
                    setBookingOpen(true)
                    setHospitalId(center["Provider ID"])
                    }
                }
                  >
                    Book FREE Center Visit
                  </button> }
                </div>
              </div>
              {/* book open */}
              {bookingOpen && center["Provider ID"] === hospitalId && 
              <form onSubmit={(e) => addToLocal(e, center)}>
                <div
                  className="mt-3 d-flex justify-content-center"
                  style={{ width: "100%", borderTop: "1px solid #E8E8F0" }}
                >
                  <div
                    style={{
                      backgroundColor: "#02A401",
                      height: "5px",
                      width: "44px",
                      borderRadius: "1rem",
                    }}
                  ></div>
                </div>

                <div
                  style={{
                    height: "402px",
                    backgroundColor: "white",
                  }}
                >
                  <div className="d-flex justify-content-center align-items-center position-relative">
                    <div style={{height: "60px", width: "60px", borderRadius: "50%", border: "1px solid #E8E8F0", left: "39px",top:"12px", backgroundColor: "white"}} className="position-absolute"></div>
                    <div
                    className="h-25 pt-4 px-5"
                    style={{width: "100%"}}
                    
                  >
                    {/* carousel */}
                    <div >
                        
                    <Offercarousel from={"bookingDates"} dateForLocal={dateForLocal}/>
                    </div>
                  </div>
                    <div style={{height: "60px", width: "60px", borderRadius: "50%", border: "1px solid #E8E8F0", right: "39px",top:"12px", backgroundColor: "white" }} className="position-absolute"></div>
                  </div>
                  <div
                    className="w-100 h-25 d-flex gap-5 justify-content-start align-items-center"
                    style={{ borderBottom: "1px solid #E8E8F0" }}
                  >
                    <p
                      className="pt-3"
                      style={{ fontSize: "14px", paddingLeft: "50px" }}
                    >
                      Morning
                    </p>
                    <button
                      style={{
                        backgroundColor: "white",
                        border: "1px solid #2AA7FF",
                      }}
                      className="btn"
 type="button"
                      onClick={() => timeForLocal("11:30 AM")}
                    >
                      11:30 AM
                    </button>
                  </div>
                  <div
                    className="w-100 h-25 d-flex gap-5 justify-content-start align-items-center"
                    style={{ borderBottom: "1px solid #E8E8F0" }}
                  >
                    <p
                      className="pt-3"
                      style={{ fontSize: "14px", paddingLeft: "40px" }}
                    >
                      Afternoon
                    </p>
                    <button
                      style={{
                        backgroundColor: "white",
                        border: "1px solid #2AA7FF",
                      }}
                      className="btn"
 type="button"
                      onClick={() => timeForLocal("12:00 PM")}
                    >
                      12:00 PM
                    </button>
                    <button
                      style={{
                        backgroundColor: "white",
                        border: "1px solid #2AA7FF",
                      }}
                      className="btn"
 type="button"
                      onClick={() => timeForLocal("12:30 PM")}
                    >
                      12:30 PM
                    </button>
                    <button
                      style={{
                        backgroundColor: "white",
                        border: "1px solid #2AA7FF",
                      }}
                      className="btn"
 type="button"
                      onClick={() => timeForLocal("01:00 PM")}
                    >
                      01:00 PM
                    </button>
                    <button
                      style={{
                        backgroundColor: "white",
                        border: "1px solid #2AA7FF",
                      }}
                      className="btn"
 type="button"
                      onClick={() => timeForLocal("02:00 PM")}
                    >
                      02:00 PM
                    </button>
                    <button
                      style={{
                        backgroundColor: "white",
                        border: "1px solid #2AA7FF",
                      }}
                      className="btn"
 type="button"
                      onClick={() => timeForLocal("02:30 PM")}
                    >
                      02:30 PM
                    </button>
                  </div>
                  <div className="w-100 h-25 d-flex gap-5 justify-content-start align-items-center">
                    <p
                      className="pt-3"
                      style={{ fontSize: "14px", paddingLeft: "50px" }}
                    >
                      Evening
                    </p>
                    <button
                      style={{
                        backgroundColor: "white",
                        border: "1px solid #2AA7FF",
                      }}
                      className="btn"
 type="button"
                      onClick={() => timeForLocal("06:00 PM")}
                    >
                      06:00 PM
                    </button>
                    <button
                      style={{
                        backgroundColor: "white",
                        border: "1px solid #2AA7FF",
                      }}
                      className="btn"
 type="button"
                      onClick={() => timeForLocal("06:30 PM")}
                    >
                      06:30 PM
                    </button>
                    <button
                      style={{
                        backgroundColor: "white",
                        border: "1px solid #2AA7FF",
                      }}
                      className="btn"
 type="button"
                      onClick={() => timeForLocal("07:00 PM")}
                    >
                      07:00 PM
                    </button>
                    <button
                      style={{
                        backgroundColor: "white",
                        border: "1px solid #2AA7FF",
                      }}
                      className="btn"
 type="button"
                      onClick={() => timeForLocal("07:30 PM")}
                    >
                      07:30 PM
                    </button>
                  </div>
                </div>
                <button type="submit">Book</button>
              </form>}
            </div>)}
            
            
          </div>

          <div className="w-25 bookAppointment mt-3">
            <img src={ad} alt="ads" />
          </div>
        </div>
      </div>
      <FaqSection />

      <AppFooter />
    </div>
  );
};

export default SearchResultsPage;
