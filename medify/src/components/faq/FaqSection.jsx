import React from 'react'
import FAQ1 from "../../assets/FAQ1.svg";

import handheart from "../../assets/handheart.svg";
import smile from "../../assets/smile.svg";

const FaqSection = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center w-100 mt-5 mb-2">
        <p>Get Your Answer</p>
        <h1>Frequently Asked Questions</h1>
        <div className="d-flex justify-content-between align-items-center w-100">
          <div className=" position-relative d-flex">
            <img src={FAQ1} alt="doctor-caring" />
            <div className=" position-absolute top-50 ">
           <div className="d-flex w-100 h-100 justify-content-center align-items-center px-3" style={{backgroundColor: "white", borderRadius: "1rem"}}>
           <div className="d-flex m-3" >
           <img src={smile} alt="heart_in_hand" />
           </div>
           <div className="d-flex flex-column mt-3 justify-content-center align-items-start">
                <h3 style={{fontSize: "19px"}}>84K+</h3>
                <p style={{fontSize: "17px"}}>Happy patients</p>
           </div>
           </div>
              
            </div>
            <img src={handheart} alt="heart_in_hand" className=" position-absolute bottom-50 end-0"/>
          </div>
          <div
            className="accordion accordion-flush w-100"
            id="accordionFlushExample"
          >
            <div className="accordion-item m-4">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
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
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> class. This is
                  the first item's accordion body.
                </div>
              </div>
            </div>
            <div className="accordion-item  m-4">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
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
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
                  Placeholder content for this accordion, which is intended to
                  demonstrate the <code>.accordion-flush</code> class. This is
                  the second item's accordion body. Let's imagine this being
                  filled with some actual content.
                </div>
              </div>
            </div>
            <div className="accordion-item  m-4">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
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
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
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

            <div className="accordion-item  m-4">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed"
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
                className="accordion-collapse collapse"
                data-bs-parent="#accordionFlushExample"
              >
                <div className="accordion-body">
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
  )
}

export default FaqSection