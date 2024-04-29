import React from 'react'

import con1 from "../../assets/con1.svg";
import con2 from "../../assets/con2.svg";
import con3 from "../../assets/con3.svg";
import con4 from "../../assets/con4.svg";

const Contributions = () => {
  return (
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
  )
}

export default Contributions