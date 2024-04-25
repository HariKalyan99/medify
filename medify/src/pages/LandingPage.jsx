import React, { createContext, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import SearchHospitals from "../components/HospitalSearchBar/SearchHospitals";
import NavigationBar from "../components/HosptalNavigationBar/NavigationBar";
import Banner from "../components/banner/Banner";

import Herocontainer from "../components/Hero.jsx/Herocontainer";
import Offercarousel from "../components/Offercarousel/Offercarousel";

import xray from "../assets/X-Ray.svg";
import Drugstore from "../assets/Drugstore.svg";
import Stethoscope from "../assets/Stethoscope.svg";
import Heart from "../assets/Heart Rate Monitor.svg";
import Blood from "../assets/Blood Sample.svg";
import y from "../assets/y.svg";
import q from "../assets/q.svg";
import Frame from "../assets/Frame.svg";
import pc1 from "../assets/pc1.svg";
import pc2 from "../assets/pc2.svg";
import liststyle from "../assets/liststyle.svg";
import cardimg from "../assets/cardimg.svg";
import reb from "../assets/reb.svg";
import con1 from "../assets/con1.svg";
import con2 from "../assets/con2.svg";
import con3 from "../assets/con3.svg";
import con4 from "../assets/con4.svg";
import FAQ1 from "../assets/FAQ1.svg";
import app1 from "../assets/app1.svg";
import app2 from "../assets/app2.svg";
import arrow from "../assets/arrow.svg";
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import logo from "../assets/medlogo.svg";
import f from "../assets/f.svg";
import yt from "../assets/yt.svg";
import t from "../assets/t.svg";
import pn from "../assets/pn.svg";
import ar from "../assets/arrowright.svg";

const LandingPage = () => {
  return (
    <div>
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
      <div
        className="container position-relative"
        style={{ marginTop: "200px" }}
      >
        <Offercarousel />
      </div>

      <div className="specialization mt-5 d-flex flex-column justify-content-center align-items-center mb-5">
        <h1>Find by specialisation</h1>
        <div className="d-flex justify-content-between flex-wrap align-items-center h-75 w-100 m-4 container g-5">
          <div
            className="d-flex justify-content-center align-items-center flex-column"
            style={{
              backgroundColor: "#FAFBFE",
              height: "180px",
              width: "270px",
              borderRadius: "1rem",
              border: "none",
              boxShadow: "1px 10px 1rem #e0e2e7",
            }}
          >
            <img src={Drugstore} alt="doc-logo" />
            <p>Dentistry</p>
          </div>
          <div
            className="d-flex justify-content-center align-items-center flex-column"
            style={{
              backgroundColor: "#FAFBFE",
              height: "180px",
              width: "270px",
              borderRadius: "1rem",
              border: "none",
              boxShadow: "1px 10px 1rem #e0e2e7",
            }}
          >
            <img src={Stethoscope} alt="doc-logo" />
            <p>Primary Care</p>
          </div>
          <div
            className="d-flex justify-content-center align-items-center flex-column"
            style={{
              backgroundColor: "#FAFBFE",
              height: "180px",
              width: "270px",
              borderRadius: "1rem",
              border: "none",
              boxShadow: "1px 10px 1rem #e0e2e7",
            }}
          >
            <img src={y} alt="doc-logo" />
            <p>Cardiology</p>
          </div>
          <div
            className="d-flex justify-content-center align-items-center flex-column"
            style={{
              backgroundColor: "#FAFBFE",
              height: "180px",
              width: "270px",
              borderRadius: "1rem",
              border: "none",
              boxShadow: "1px 10px 1rem #e0e2e7",
            }}
          >
            <img src={Heart} alt="doc-logo" />
            <p>MRI Resonance</p>
          </div>
          <div
            className="d-flex justify-content-center align-items-center flex-column"
            style={{
              backgroundColor: "#FAFBFE",
              height: "180px",
              width: "270px",
              borderRadius: "1rem",
              border: "none",
              boxShadow: "1px 10px 1rem #e0e2e7",
            }}
          >
            <img src={Blood} alt="doc-logo" />
            <p>Blood Test</p>
          </div>
          <div
            className="d-flex justify-content-center align-items-center flex-column"
            style={{
              backgroundColor: "#FAFBFE",
              height: "180px",
              width: "270px",
              borderRadius: "1rem",
              border: "none",
              boxShadow: "1px 10px 1rem #e0e2e7",
            }}
          >
            <img src={q} alt="doc-logo" />
            <p>Piscologist</p>
          </div>
          <div
            className="d-flex justify-content-center align-items-center flex-column"
            style={{
              backgroundColor: "#FAFBFE",
              height: "180px",
              width: "270px",
              borderRadius: "1rem",
              border: "none",
              boxShadow: "1px 10px 1rem #e0e2e7",
            }}
          >
            <img src={Drugstore} alt="doc-logo" />
            <p>Laboratory</p>
          </div>
          <div
            className="d-flex justify-content-center align-items-center flex-column"
            style={{
              backgroundColor: "#FAFBFE",
              height: "180px",
              width: "270px",
              borderRadius: "1rem",
              border: "none",
              boxShadow: "1px 10px 1rem #e0e2e7",
            }}
          >
            <img src={xray} alt="doc-logo" />
            <p>X-Ray</p>
          </div>
        </div>
        <div>
          <button
            type="button"
            className="btn text-light px-5"
            style={{ backgroundColor: "#2AA8FF" }}
          >
            View All
          </button>
        </div>
      </div>

      <div className="container-fluid d-flex flex-column justify-content-center align-items-center">
        <h1>Our Medical Specialist</h1>
        <div
          className="container-fluid position-relative"
          style={{ marginTop: "100px" }}
        >
          <Offercarousel from={"specialist"} />
        </div>
      </div>

      <div className="patientCaring d-flex justify-content-center">
        <div className="container m-5 d-flex" style={{ gap: "100px" }}>
          <div className="d-flex flex-column">
            <div className="w-100 d-flex justify-content-evenly">
              <div
                style={{
                  height: "86px",
                  backgroundColor: "white",
                  width: "234px",
                  top: "100px",
                  left: "70px",
                  borderRadius: "1rem",
                }}
                className="d-flex flex-column justify-content-center align-items-center position-relative z-2"
              >
                <div className="d-flex justify-content-center align-items-center">
                  <img src={Frame} alt="patientcaring-1" height={30} />
                  <p style={{ fontSize: "16px" }} className="mt-3 px-2">
                    Free Consultation
                  </p>
                </div>
                <p>Consultation with the best</p>
              </div>

              <div className=" position-relative top-0">
                <img src={pc1} alt="" />
              </div>
            </div>

            <div
              className=" position-relative"
              style={{ top: "-50px", left: "50px" }}
            >
              <img src={pc2} alt="patientcaring-2" />
            </div>
          </div>
          <div className="d-flex flex-column w-50 justify-content-center align-items-start">
            <p>HELPING PATIENTS FROM AROUND THE GLOBE!!</p>
            <h1>Patient Caring</h1>

            <p className="mt-5 mb-5">
              Our goal is to deliver quality of care in a courteous, respectful,
              and compassionate manner. We hope you will allow us to care for
              you and strive to be the first and best choice for healthcare.
            </p>

            <div>
              <img src={liststyle} alt="liststyle" /> Stay Updated About Your
              Health
            </div>
            <div>
              <img src={liststyle} alt="liststyle" /> Check Your Results Online
            </div>
            <div>
              <img src={liststyle} alt="liststyle" /> Manage Your Appointments
            </div>
          </div>
        </div>
      </div>

      <div className="container d-flex flex-column justify-content-center align-items-center mt-5 mb-5">
        <p>Blog & News</p>

        <h1>Read Our Latest News</h1>
        {/* album  */}

        <div class="album py-5 ">
          <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div class="col">
              <div class="card shadow-sm">
                <img src={cardimg} alt="cardimg" />
                <div class="card-body">
                  <p>Medical | March 31, 2022</p>
                  <p class="card-text">
                    6 Tips To Protect Your Mental Health When You're Sick
                  </p>
                  <div class="d-flex justify-content-start align-items-center">
                    <div>
                      <img src={reb} alt="" />
                    </div>
                    <p className="m-2">Rebecca Lee</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card shadow-sm">
                <img src={cardimg} alt="cardimg" />
                <div class="card-body">
                  <p>Medical | March 31, 2022</p>
                  <p class="card-text">
                    6 Tips To Protect Your Mental Health When You're Sick
                  </p>
                  <div class="d-flex justify-content-start align-items-center">
                    <div>
                      <img src={reb} alt="" />
                    </div>
                    <p className="m-2">Rebecca Lee</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="col">
              <div class="card shadow-sm">
                <img src={cardimg} alt="cardimg" />
                <div class="card-body">
                  <p>Medical | March 31, 2022</p>
                  <p class="card-text">
                    6 Tips To Protect Your Mental Health When You're Sick
                  </p>
                  <div class="d-flex justify-content-start align-items-center">
                    <div>
                      <img src={reb} alt="" />
                    </div>
                    <p className="m-2">Rebecca Lee</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid contribute d-flex justify-content-center mb-2">
        <div className="container d-flex justify-content-center align-items-center">
          <div className="w-50">
            <p>CARING FOR THE HEALTH OF YOU AND YOUR FAMILY.</p>
            <h1>Our Families</h1>
            <p>
              We will work with you to develop individualised care plans,
              including management of chronic diseases. If we cannot assist, we
              can provide referrals or advice about the type of practitioner you
              require. We treat all enquiries sensitively and in the strictest
              confidence.
            </p>
          </div>
          <div className="w-50 d-flex justify-content-evenly">
            <div className="d-flex flex-column">
              <div
                className="d-flex justify-content-center align-items-center flex-column mb-5"
                style={{
                  backgroundColor: "#FAFBFE",
                  height: "304px",
                  width: "242px",
                  borderRadius: "1rem",
                  border: "none",
                  boxShadow: "1px 10px 1rem #e0e2e7",
                }}
              >
                <img src={con1} alt="doc-logo" />
                <h1>5000+</h1>
                <p>Dentistry</p>
              </div>
              <div
                className="d-flex justify-content-center align-items-center flex-column "
                style={{
                  backgroundColor: "#FAFBFE",
                  height: "304px",
                  width: "242px",
                  borderRadius: "1rem",
                  border: "none",
                  boxShadow: "1px 10px 1rem #e0e2e7",
                }}
              >
                <img src={con2} alt="doc-logo" />
                <h1>1000+</h1>
                <p>Dentistry</p>
              </div>
            </div>
            <div className="d-flex flex-column">
              <div
                className="d-flex justify-content-center align-items-center flex-column mt-5"
                style={{
                  backgroundColor: "#FAFBFE",
                  height: "304px",
                  width: "242px",
                  borderRadius: "1rem",
                  border: "none",
                  boxShadow: "1px 10px 1rem #e0e2e7",
                }}
              >
                <img src={con3} alt="doc-logo" />
                <h1>200+</h1>
                <p>Dentistry</p>
              </div>
              <div
                className="d-flex justify-content-center align-items-center flex-column mt-5"
                style={{
                  backgroundColor: "#FAFBFE",
                  height: "304px",
                  width: "242px",
                  borderRadius: "1rem",
                  border: "none",
                  boxShadow: "1px 10px 1rem #e0e2e7",
                }}
              >
                <img src={con4} alt="doc-logo" />
                <h1>700+</h1>
                <p>Dentistry</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container d-flex flex-column justify-content-center align-items-center w-100 mt-5 mb-2">
        <p>Get Your Answer</p>
        <h1>Frequently Asked Questions</h1>
        <div className="d-flex justify-content-between align-items-center w-100">
          <div>
            <img src={FAQ1} alt="doctor-caring" />
          </div>
          <div
            class="accordion accordion-flush w-100"
            id="accordionFlushExample"
          >
            <div class="accordion-item m-4">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseOne"
                  aria-expanded="false"
                  aria-controls="flush-collapseOne"
                >
                  Why choose our medical for your family?
                </button>
              </h2>
              <div
                id="flush-collapseOne"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> class. This is
                  the first item's accordion body.
                </div>
              </div>
            </div>
            <div class="accordion-item  m-4">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseTwo"
                  aria-expanded="false"
                  aria-controls="flush-collapseTwo"
                >
                  Why we are different from others?
                </button>
              </h2>
              <div
                id="flush-collapseTwo"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> class. This is
                  the second item's accordion body. Let's imagine this being
                  filled with some actual content.
                </div>
              </div>
            </div>
            <div class="accordion-item  m-4">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseThree"
                  aria-expanded="false"
                  aria-controls="flush-collapseThree"
                >
                  Trusted & experience senior care & love
                </button>
              </h2>
              <div
                id="flush-collapseThree"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> class. This is
                  the third item's accordion body. Nothing more exciting
                  happening here in terms of content, but just filling up the
                  space to make it look, at least at first glance, a bit more
                  representative of how this would look in a real-world
                  application.
                </div>
              </div>
            </div>

            <div class="accordion-item  m-4">
              <h2 class="accordion-header">
                <button
                  class="accordion-button collapsed"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#flush-collapseFour"
                  aria-expanded="false"
                  aria-controls="flush-collapseFour"
                >
                  How to get appointment for emergency cases?
                </button>
              </h2>
              <div
                id="flush-collapseFour"
                class="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div class="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> class. This is
                  the third item's accordion body. Nothing more exciting
                  happening here in terms of content, but just filling up the
                  space to make it look, at least at first glance, a bit more
                  representative of how this would look in a real-world
                  application.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="appDownload container-fluid">
        <div className="container d-flex justify-content-between g-5 ">
          <div className=" d-flex justify-content-between position-relative mt-5">
            <div
              className="w-50 position-relative"
              style={{ top: "80px", left: "50px", zIndex: "2" }}
            >
              <img src={app1} alt="app-download" />
            </div>
            <div className="w-50 position-absolute" style={{ left: "200px" }}>
              <img src={app2} alt="app-download" />
            </div>
          </div>

          <div className="w-50 d-flex justify-content-between align-items-center">
            <div className="w-25 d-flex justify-content-center">
              <img src={arrow} alt="arrow" />
            </div>
            <div className="w-75">
              <h1>Download the</h1>
              <h1>Medify App</h1>
              <p>Get the link to download the app</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="d-flex">
                  <input
                    type="text"
                    readOnly
                    style={{
                      width: "45px",
                      height: "47px",
                      border: "1px solid #F0F0F0",
                    }}
                    placeholder=" +91"
                  />
                  <input
                    type="text"
                    style={{
                      width: "316px",
                      height: "47px",
                      padding: "5px",
                      border: "1px solid #F0F0F0",
                    }}
                  />
                </div>
                <button
                  type="button"
                  className="btn text-light px-3"
                  style={{ backgroundColor: "#2AA8FF", height: "47px" }}
                >
                  Send sms
                </button>
              </div>

              <div className="d-flex gap-5 mt-5">
                <button
                  className="btn btn-dark"
                  style={{ width: "224px", height: "69px" }}
                >
                  <FaGooglePlay size={40} className="mb-2" />
                  <span className="fw-bold fs-4">Google Play</span>
                </button>
                <button
                  className="btn btn-dark"
                  style={{ width: "224px", height: "69px" }}
                >
                  <FaApple size={40} className="mb-2" />
                  <span className="fw-bold fs-4">App Store</span>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="foot container-fluid d-flex flex-column position-relative z-2">
          <div className="container d-flex h-100 gap-5 justify-content-center">
            <div className="w-100 d-flex flex-column justify-content-around ">
              <a class="navbar-brand" href="#">
                <img src={logo} alt="medify-logo" />
              </a>
              <div className="d-flex justify-content-between w-75">
                <a href="#"><img src={f} alt="fb" /></a>
                <a href="#"><img src={t} alt="x" /></a>
                <a href="#"><img src={yt} alt="yt" /></a>
                <a href="#"><img src={pn} alt="pt" /></a>
              </div>
            </div>
            <div className="w-100 d-flex flex-column justify-content-center align-items-start gap-4">
            <div>
              <img src={ar} alt="arrowList" /> <span style={{color: "white"}}>About Us</span>
             
            </div>
            <div>
              <img src={ar} alt="arrowList" />  <span style={{color: "white"}}> Our Pricing</span>
            </div>
            <div>
              <img src={ar} alt="arrowList" /> <span style={{color: "white"}}>Our Gallery</span>
            </div>
            <div>
              <img src={ar} alt="arrowList" /> <span style={{color: "white"}}>Appointment</span>
            </div>
            <div>
              <img src={ar} alt="arrowList" /> <span style={{color: "white"}}>Privacy policy</span>
            </div>
            </div>
            <div className="w-100 d-flex flex-column justify-content-center align-items-start gap-4">
            <div>
              <img src={ar} alt="arrowList" /> <span style={{color: "white"}}>Orthology</span>
             
            </div>
            <div>
              <img src={ar} alt="arrowList" /> <span style={{color: "white"}}>Neurology</span>
            </div>
            <div>
              <img src={ar} alt="arrowList" /> <span style={{color: "white"}}>Dental Care</span>
            </div>
            <div>
              <img src={ar} alt="arrowList" /> <span style={{color: "white"}}>Opthalmology</span>
            </div>
            <div>
              <img src={ar} alt="arrowList" /> <span style={{color: "white"}}>Cardiology</span>
            </div>
            </div>
            <div className="w-100 d-flex flex-column justify-content-center align-items-start gap-4">
            <div>
              <img src={ar} alt="arrowList" /> <span style={{color: "white"}}>About Us</span>
             
            </div>
            <div>
              <img src={ar} alt="arrowList" /> <span style={{color: "white"}}>Our Pricing</span>
            </div>
            <div>
              <img src={ar} alt="arrowList" /> <span style={{color: "white"}}>Our Gallery</span>
            </div>
            <div>
              <img src={ar} alt="arrowList" /> <span style={{color: "white"}}>Appointment</span>
            </div>
            <div>
              <img src={ar} alt="arrowList" /> <span style={{color: "white"}}>Privacy policy</span>
            </div>
            </div>
          
          </div>
          <div className="container">
          <hr style={{color: "white"}}/>
            <p className="text-light">Copyright ©2023 Tronice Nursing Home.com. All Rights Reserved</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
