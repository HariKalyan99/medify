import React from 'react'
import xray from "../../assets/X-Ray.svg"
import Drugstore from "../../assets/Drugstore.svg";
import Stethoscope from "../../assets/Stethoscope.svg";
import Heart from "../../assets/Heart Rate Monitor.svg";
import Blood from "../../assets/Blood Sample.svg";
import y from "../../assets/y.svg";
import q from "../../assets/q.svg";


const Specializations = () => {
  return (
    <div className="specialization mt-5 d-flex flex-column justify-content-center align-items-center mb-5">
        <h1 className='findText'>Find by specialisation</h1>
        <div className="d-flex justify-content-md-center gap-md-3 justify-content-xl-between justify-content-lg-center flex-wrap align-items-center h-75 w-100 m-4 container g-5 gap-lg-3 mb-md-5 specialization2">
          <div
            className="d-flex justify-content-center align-items-center flex-column specializedContainer"
            style={{
              backgroundColor: "#FAFBFE",
              height: "180px",
              borderRadius: "1rem",
              border: "none",
              boxShadow: "1px 10px 1rem #e0e2e7",
            }}
          >
            <img src={Drugstore} alt="doc-logo" />
            <p>Dentistry</p>
          </div>
          <div
            className="d-flex justify-content-center align-items-center flex-column specializedContainer"
            style={{
              backgroundColor: "#FAFBFE",
              height: "180px",
              
              borderRadius: "1rem",
              border: "none",
              boxShadow: "1px 10px 1rem #e0e2e7",
            }}
          >
            <img src={Stethoscope} alt="doc-logo" />
            <p>Primary Care</p>
          </div>
          <div
            className="d-flex justify-content-center align-items-center flex-column specializedContainer"
            style={{
              backgroundColor: "#FAFBFE",
              height: "180px",
              
              borderRadius: "1rem",
              border: "none",
              boxShadow: "1px 10px 1rem #e0e2e7",
            }}
          >
            <img src={y} alt="doc-logo" />
            <p>Cardiology</p>
          </div>
          <div
            className="d-flex justify-content-center align-items-center flex-column specializedContainer"
            style={{
              backgroundColor: "#FAFBFE",
              height: "180px",
              
              borderRadius: "1rem",
              border: "none",
              boxShadow: "1px 10px 1rem #e0e2e7",
            }}
          >
            <img src={Heart} alt="doc-logo" />
            <p>MRI Resonance</p>
          </div>
          <div
            className="d-flex justify-content-center align-items-center flex-column specializedContainer"
            style={{
              backgroundColor: "#FAFBFE",
              height: "180px",
              
              borderRadius: "1rem",
              border: "none",
              boxShadow: "1px 10px 1rem #e0e2e7",
            }}
          >
            <img src={Blood} alt="doc-logo" />
            <p>Blood Test</p>
          </div>
          <div
            className="d-flex justify-content-center align-items-center flex-column specializedContainer"
            style={{
              backgroundColor: "#FAFBFE",
              height: "180px",
              
              borderRadius: "1rem",
              border: "none",
              boxShadow: "1px 10px 1rem #e0e2e7",
            }}
          >
            <img src={q} alt="doc-logo" />
            <p>Piscologist</p>
          </div>
          <div
            className="d-flex justify-content-center align-items-center flex-column specializedContainer"
            style={{
              backgroundColor: "#FAFBFE",
              height: "180px",
              
              borderRadius: "1rem",
              border: "none",
              boxShadow: "1px 10px 1rem #e0e2e7",
            }}
          >
            <img src={Drugstore} alt="doc-logo" />
            <p>Laboratory</p>
          </div>
          <div
            className="d-flex justify-content-center align-items-center flex-column specializedContainer"
            style={{
              backgroundColor: "#FAFBFE",
              height: "180px",
              
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
            className="btn text-light px-5 mt-lg-4 mb-lg-2 mb-3"
            style={{ backgroundColor: "#2AA8FF" }}
          >
            View All
          </button>
        </div>
      </div>
  )
}

export default Specializations