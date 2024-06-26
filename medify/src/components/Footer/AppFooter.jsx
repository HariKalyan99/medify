import React from "react";
import app1 from "../../assets/app1.svg";
import app2 from "../../assets/app2.svg";
import arrow from "../../assets/arrow.svg";
import { FaGooglePlay } from "react-icons/fa";
import { FaApple } from "react-icons/fa";
import logo from "../../assets/medlogo.svg";
import f from "../../assets/f.svg";
import yt from "../../assets/yt.svg";
import t from "../../assets/t.svg";
import pn from "../../assets/pn.svg";
import ar from "../../assets/arrowright.svg";
import { IoIosSend } from "react-icons/io";

const AppFooter = () => {
  return (
    <div className="appDownload container-fluid">
      <div className="container-xl d-flex justify-content-between g-5 appDownload2 px-md-5 px-lg-0">
        <div className=" d-flex justify-content-between position-relative mt-5">
          <div
            className="w-50 position-relative px-md-5 px-lg-0"
            style={{ top: "80px", left: "50px", zIndex: "2" }}
          >
            <img src={app1} alt="app-download" className="appImg" />
          </div>
          <div
            className="w-50 position-absolute px-md-5 px-lg-0"
            style={{ left: "200px" }}
          >
            <img src={app2} alt="app-download" className="appImg" />
          </div>
        </div>

        <div className="d-flex justify-content-between align-items-center footApp">
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
                    height: "47px",
                    padding: "5px",
                    border: "1px solid #F0F0F0",
                  }}
                  className="appInput"
                />
              </div>
              <button
                type="button"
                className="btn text-light px-lg-2 px-xl-3 sendSmsBtn"
                style={{ backgroundColor: "#2AA8FF" }}
              >
                <span>
                  <IoIosSend />
                  <span className="smsText"> Send sms</span>
                </span>
              </button>
            </div>

            <div className="d-flex gap-5 mt-5">
              <button
                className="btn btn-dark playBtn"
                style={{ height: "69px" }}
              >
                <FaGooglePlay size={40} className="mb-2" />
                <span className="fw-bold fs-5 playText">Google Play</span>
              </button>
              <button
                className="btn btn-dark playBtn"
                style={{ height: "69px" }}
              >
                <FaApple size={40} className="mb-2" />
                <span className="fw-bold fs-5 playText">App Store</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="foot container-fluid d-flex flex-column position-relative z-2">
        <div className="container d-flex h-100 gap-5 justify-content-center mainFooter">
          <div className="w-100 d-flex flex-column justify-content-around subFooter1">
            <a className="navbar-brand" href="#">
              <img src={logo} alt="medify-logo" />
            </a>
            <div className="d-flex justify-content-between w-75">
              <a href="#">
                <img src={f} alt="fb" />
              </a>
              <a href="#">
                <img src={t} alt="x" />
              </a>
              <a href="#">
                <img src={yt} alt="yt" />
              </a>
              <a href="#">
                <img src={pn} alt="pt" />
              </a>
            </div>
          </div>
          <div className="w-100 d-flex flex-column justify-content-center align-items-start gap-4 subFooter2">
            <div>
              <img src={ar} alt="arrowList" />{" "}
              <span style={{ color: "white" }}>About Us</span>
            </div>
            <div>
              <img src={ar} alt="arrowList" />{" "}
              <span style={{ color: "white" }}> Our Pricing</span>
            </div>
            <div>
              <img src={ar} alt="arrowList" />{" "}
              <span style={{ color: "white" }}>Our Gallery</span>
            </div>
            <div>
              <img src={ar} alt="arrowList" />{" "}
              <span style={{ color: "white" }}>Appointment</span>
            </div>
            <div>
              <img src={ar} alt="arrowList" />{" "}
              <span style={{ color: "white" }}>Privacy policy</span>
            </div>
          </div>
          <div className="w-100 d-flex flex-column justify-content-center align-items-start gap-4 subFooter3">
            <div>
              <img src={ar} alt="arrowList" />{" "}
              <span style={{ color: "white" }}>Orthology</span>
            </div>
            <div>
              <img src={ar} alt="arrowList" />{" "}
              <span style={{ color: "white" }}>Neurology</span>
            </div>
            <div>
              <img src={ar} alt="arrowList" />{" "}
              <span style={{ color: "white" }}>Dental Care</span>
            </div>
            <div>
              <img src={ar} alt="arrowList" />{" "}
              <span style={{ color: "white" }}>Opthalmology</span>
            </div>
            <div>
              <img src={ar} alt="arrowList" />{" "}
              <span style={{ color: "white" }}>Cardiology</span>
            </div>
          </div>
          <div className="w-100 d-flex flex-column justify-content-center align-items-start gap-4 subFooter4">
            <div>
              <img src={ar} alt="arrowList" />{" "}
              <span style={{ color: "white" }}>About Us</span>
            </div>
            <div>
              <img src={ar} alt="arrowList" />{" "}
              <span style={{ color: "white" }}>Our Pricing</span>
            </div>
            <div>
              <img src={ar} alt="arrowList" />{" "}
              <span style={{ color: "white" }}>Our Gallery</span>
            </div>
            <div>
              <img src={ar} alt="arrowList" />{" "}
              <span style={{ color: "white" }}>Appointment</span>
            </div>
            <div>
              <img src={ar} alt="arrowList" />{" "}
              <span style={{ color: "white" }}>Privacy policy</span>
            </div>
          </div>
        </div>
        <div className="container">
          <hr style={{ color: "white" }} />
          <p className="text-light">
            Copyright ©2023 Tronice Nursing Home.com. All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
};

export default AppFooter;
