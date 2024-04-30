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
  const { getHealthCenter, captureBooks } = useContext(healthCenterStore);

  const [bookingOpen, setBookingOpen] = useState(false);

  const [hospitalId, setHospitalId] = useState("");

  const [getDateLocal, setDateLocal] = useState("");

  const [geTimeLocal, setTimeLocal] = useState("");

  const timeForLocal = (val) => {
    setTimeLocal(val);
  };
  const dateForLocal = (val) => {
    setDateLocal(val);
  };

  const addToLocal = (e, center) => {
    e.preventDefault();
    const booking = {
      time: geTimeLocal,
      date: getDateLocal,
      center,
    };
    captureBooks(booking);

    setBookingOpen(!bookingOpen);
    setTimeLocal("");
  };

  useEffect(() => {
    setHospitalId(hospitalId);
  }, [hospitalId]);

  return (
    <div className="h-100">
      <Banner />
      <NavigationBar becomeActive={"findDoctors"} />

      <div className="container-fluid bluebar">
        <SearchHospitals from={"searchPage"} />
      </div>

      <div className="container-fluid healthCenters">
        <div
          className="container d-flex flex-column justify-content-center"
          style={{ paddingTop: "150px" }}
        >
          {getHealthCenter.length < 1 ? (
            <h1 style={{ fontSize: "24px" }}>Search for Medical centers</h1>
          ) : (
            <h1 style={{ fontSize: "24px" }}>
              {getHealthCenter.length} medical centers available in{" "}
              {getHealthCenter[0].City}
            </h1>
          )}
          <div className="d-flex gap-4">
            <div>
              <img src={tick} alt="tick_img" />
            </div>
            <p style={{ fontSize: "16px" }}>
              Book appointments with minimum wait-time & verified doctor details
            </p>
          </div>
        </div>

        <div className={`d-flex container justify-content-center gap-3 position-relative ${!getHealthCenter.length < 1 && 'mainBook'}`}>
          <div
            className={`d-flex flex-column justify-content-start mt-3 align-items-start gap-4 ${!getHealthCenter.length < 1 && 'mainBook2'}`}
            style={{ paddingBottom: "100px" }}
          >
            {getHealthCenter.length < 1 ? (
              <div className="bookContainer w-100 h-100 d-flex flex-column pb-5 pt-2">
                <div className="w-100 d-flex justify-content-center align-items-center bookContainer1 px-5">
                  <div className="px-2" style={{ height: "100%" }}>
                    <img src={bookHos} alt="healthCenter_logo" />
                  </div>
                  <div className="d-flex flex-column justify-content-center align-items-center pt-4">
                    <h1>Uh, Oh...</h1>
                    <h1>No health center found</h1>
                    <p>Search for health centers in your location</p>
                  </div>
                </div>
              </div>
            ) : (
              getHealthCenter.map((center, ind) => (
                <div
                  key={center["Provider ID"]}
                  className="bookContainer w-100 h-100 d-flex flex-column pb-5 pt-2 "
                >
                  <div className="w-100 d-flex bookContainer1">
                    <div
                      className="px-lg-5 subBookContainer"
                      style={{ width: "25%", height: "100%" }}
                    >
                      <img src={bookHos} alt="healthCenter_logo" />
                    </div>
                    <div
                      className="d-flex flex-column justify-content-center pt-4 subBookContainer"
                      style={{ width: "45%", height: "100%" }}
                    >
                      <h1 className="hospitalNameText" >
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
                          <span
                            style={{
                              color: "#787887",
                              fontSize: "14px",
                              textDecoration: "line-through",
                            }}
                          >
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
                        <img src={like} alt="like_badge" />{" "}
                        {center["Hospital overall rating"]}{" "}
                      </span>
                    </div>

                    <div
                      className="d-flex flex-column justify-content-end align-items-center px-2 pb-4 subBookContainer"
                      style={{ width: "30%" }}
                    >
                      <div>
                      <p
                        style={{
                          color: "#02A401",
                          fontSize: "14px",
                          textAlign: "center",
                        }}
                      >
                        Available Today
                      </p>
                      </div>
                      {bookingOpen && center["Provider ID"] === hospitalId ? (
                       <div>
                         <button
                          type="button"
                          className="btn text-light px-5"
                          style={{ backgroundColor: "#2AA8FF" }}
                          onClick={() => {
                            setBookingOpen(false);
                            setHospitalId("");
                            setTimeLocal("");
                            setDateLocal("");
                          }}
                        >
                          <span className="fsize">Cancel booking</span>
                        </button>
                       </div>
                      ) : (
                        <div>
                          <button
                          type="button"
                          className="btn text-light px-5"
                          style={{ backgroundColor: "#2AA8FF" }}
                          onClick={() => {
                            setBookingOpen(true);
                            setHospitalId(center["Provider ID"]);
                          }}
                        >
                          <span className="fsize">Book FREE Center Visit</span>
                        </button>
                        </div>
                      )}
                    </div>
                  </div>
                  {/* book open */}
                  {bookingOpen && center["Provider ID"] === hospitalId && (
                    <form onSubmit={(e) => addToLocal(e, center)}>
                      <div
                        className="mt-3 d-flex justify-content-center"
                        style={{
                          width: "100%",
                          borderTop: "1px solid #E8E8F0",
                        }}
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
                        }}
                      >
                        <div className="d-flex justify-content-center align-items-center position-relative arrowBack">
                          <div
                            style={{
                              height: "60px",
                              width: "60px",
                              borderRadius: "50%",
                              border: "1px solid #E8E8F0",
                              left: "39px",
                              backgroundColor: "white",
                            }}
                            className="position-absolute"
                          ></div>
                          <div
                            className="h-25 pt-4 px-5"
                            style={{ width: "100%" }}
                          >
                            {/* carousel */}
                            <div>
                              <Offercarousel
                                from={"bookingDates"}
                                dateForLocal={dateForLocal}
                              />
                            </div>
                          </div>
                          <div
                            style={{
                              height: "60px",
                              width: "60px",
                              borderRadius: "50%",
                              border: "1px solid #E8E8F0",
                              right: "39px",
                              backgroundColor: "white",
                            }}
                            className="position-absolute"
                          ></div>
                        </div>
                        <div
                          className="w-100 h-25 d-flex gap-lg-5 gap-md-2 justify-content-start align-items-center dateTimeContainer"
                          style={{ borderBottom: "1px solid #E8E8F0" }}
                        >
                          <p
                            className="pt-3 px-md-5 mor "
                            style={{ fontSize: "14px", paddingLeft: "50px" }}
                          >
                            Morning
                          </p>
                          <div className="w-100 d-flex btnDiv">
                          <button
                            style={{
                              border: "1px solid #2AA7FF",
                            }}
                            className={`btn timeBtn mx-md-3 ${
                              geTimeLocal === "11:30 AM" && "timeBtnActive"
                            }`}
                            type="button"
                            onClick={() => timeForLocal("11:30 AM")}
                          >
                            <span className="timeSize">11:30 AM</span>
                          </button>
                          </div>
                        </div>
                        <div
                          className="w-100 h-25 d-flex gap-lg-5 gap-md-2 justify-content-start align-items-center  dateTimeContainer"
                          style={{ borderBottom: "1px solid #E8E8F0" }}
                        >
                          <p
                            className="pt-3 px-md-5 aft "
                            style={{ fontSize: "14px", paddingLeft: "40px" }}
                          >
                            Afternoon
                          </p>
                          <div className="w-100 d-flex btnDiv">
                          <button
                            style={{
                              border: "1px solid #2AA7FF",
                            }}
                            className={`btn timeBtn ${
                              geTimeLocal === "12:00 PM" && "timeBtnActive"
                            }`}
                            type="button"
                            onClick={() => timeForLocal("12:00 PM")}
                          >
                            <span className="timeSize">12:00 PM</span>
                          </button>
                          <button
                            style={{
                              border: "1px solid #2AA7FF",
                            }}
                            className={`btn timeBtn ${
                              geTimeLocal === "12:30 PM" && "timeBtnActive"
                            }`}
                            type="button"
                            onClick={() => timeForLocal("12:30 PM")}
                          >
                            <span className="timeSize">12:30 PM</span>
                          </button>
                          <button
                            style={{
                              border: "1px solid #2AA7FF",
                            }}
                            className={`btn timeBtn ${
                              geTimeLocal === "01:00 PM" && "timeBtnActive"
                            }`}
                            type="button"
                            onClick={() => timeForLocal("01:00 PM")}
                          >
                            <span className="timeSize">01:00 PM</span>
                          </button>
                          <button
                            style={{
                              border: "1px solid #2AA7FF",
                            }}
                            className={`btn timeBtn ${
                              geTimeLocal === "02:00 PM" && "timeBtnActive"
                            }`}
                            type="button"
                            onClick={() => timeForLocal("02:00 PM")}
                          >
                            <span className="timeSize">02:00 PM</span>
                          </button>
                          <button
                            style={{
                              border: "1px solid #2AA7FF",
                            }}
                            className={`btn timeBtn ${
                              geTimeLocal === "02:30 PM" && "timeBtnActive"
                            }`}
                            type="button"
                            onClick={() => timeForLocal("02:30 PM")}
                          >
                            <span className="timeSize">02:30 PM</span>
                          </button>
                          </div>
                        </div>
                        <div className="w-100 h-25 d-flex gap-lg-5 gap-md-2 justify-content-start align-items-center dateTimeContainer">
                          <p
                            className="pt-3 px-md-5 eve mx-md-2"
                            style={{ fontSize: "14px", paddingLeft: "50px" }}
                          >
                            Evening
                          </p>
                          <div className="w-100 d-flex btnDiv">
                          <button
                            style={{
                              border: "1px solid #2AA7FF",
                            }}
                            className={`btn timeBtn  ${
                              geTimeLocal === "06:00 PM" && "timeBtnActive"
                            }`}
                            type="button"
                            onClick={() => timeForLocal("06:00 PM")}
                          >
                            <span className="timeSize">06:00 PM</span>
                          </button>
                          <button
                            style={{
                              border: "1px solid #2AA7FF",
                            }}
                            className={`btn timeBtn ${
                              geTimeLocal === "06:30 PM" && "timeBtnActive"
                            }`}
                            type="button"
                            onClick={() => timeForLocal("06:30 PM")}
                          >
                            <span className="timeSize">06:30 PM</span>
                          </button>
                          <button
                            style={{
                              border: "1px solid #2AA7FF",
                            }}
                            className={`btn timeBtn ${
                              geTimeLocal === "07:00 PM" && "timeBtnActive"
                            }`}
                            type="button"
                            onClick={() => timeForLocal("07:00 PM")}
                          >
                            <span className="timeSize">07:00 PM</span>
                          </button>
                          <button
                            style={{
                              border: "1px solid #2AA7FF",
                            }}
                            className={`btn timeBtn ${
                              geTimeLocal === "07:30 PM" && "timeBtnActive"
                            }`}
                            type="button"
                            onClick={() => timeForLocal("07:30 PM")}
                          >
                            <span className="timeSize">07:30 PM</span>
                          </button>
                          </div>
                        </div>
                      </div>
                      <div className="d-flex justify-content-center">
                        <button
                          type="submit"
                          className="btn text-light px-5"
                          style={{ backgroundColor: "#2AA8FF" }}
                          disabled={getDateLocal && geTimeLocal ? false : true}
                          data-bs-toggle="modal"
                          data-bs-target="#exampleModal"
                        >
                          Book
                        </button>
                      </div>
                      <div
                        class="modal fade"
                        id="exampleModal"
                        tabindex="-1"
                        aria-labelledby="exampleModalLabel"
                        aria-hidden="true"
                      >
                        <div class="modal-dialog">
                          <div class="modal-content">
                            <div class="modal-header">
                              <h1
                                class="modal-title fs-5"
                                id="exampleModalLabel"
                              >
                                Booked {center["Hospital Name"]}!
                              </h1>
                              <button
                                type="button"
                                class="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                              ></button>
                            </div>
                            <div class="modal-body">
                              Your free appointment is booked on {getDateLocal}{" "}
                              @ {geTimeLocal}
                              <p>
                                Note:{" "}
                                <small style={{ color: "#2AA8FF" }}>
                                  {" "}
                                  make sure you are 10 minutes early and take
                                  precautionary measures before coming to the
                                  venue
                                </small>
                              </p>
                            </div>
                            <div class="modal-footer">
                              <button
                                type="button"
                                class="btn btn-secondary"
                                data-bs-dismiss="modal"
                              >
                                Close
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </form>
                  )}
                </div>
              ))
            )}
          </div>

          {!getHealthCenter.length < 1 && <div className="w-25 bookAppointment mt-0 mt-lg-3 mb-5">
            <img src={ad} alt="ads" />
          </div>}
        </div>
      </div>
      <FaqSection />

      <AppFooter />
    </div>
  );
};

export default SearchResultsPage;
