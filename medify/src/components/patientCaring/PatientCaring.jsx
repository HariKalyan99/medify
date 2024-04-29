import React from 'react'
import Frame from "../../assets/Frame.svg";
import pc1 from "../../assets/pc1.svg";
import pc2 from "../../assets/pc2.svg";
import liststyle from "../../assets/liststyle.svg";


const PatientCaring = () => {
  return (
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
  )
}

export default PatientCaring