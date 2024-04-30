import React from 'react'
import bookHos from "../../assets/bookHos.svg";
import like from "../../assets/like.svg";

const MedicalCard = ({center}) => {
  return (
    <div  className="bookingLists">
                <div className="container d-flex justify-items-center align-items-center p-3 listSlots">
                  <div
                    style={{ width: "25%", height: "100%" }}
                    className="d-flex justify-content-start px-lg-4 subList"
                  >
                    <img src={bookHos} alt="healthCenter_logo" />
                  </div>
                  <div
                    className="d-flex flex-column justify-content-center subList"
                    style={{ width: "45%", height: "100%" }}
                  >
                    <h1 style={{ fontSize: "20px" }}>
                      {center.center["Hospital Name"]}
                    </h1>
                    <p className="fw-bold" style={{ fontSize: "14px" }}>
                      {center.center["Country Name"]}
                    </p>
                    <p style={{ fontSize: "14px" }}>
                      {center.center["Hospital Type"]}
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
                      {center.center["Hospital overall rating"]}{" "}
                    </span>
                  </div>
                  <div
                    className="d-flex justify-content-start align-items-start gap-5 pt-5 subList1"
                    style={{ height: "269px" }}
                  >
                    <div
                      className="pt-1 "
                      style={{
                        width: "84px",
                        height: "31px",
                        border: "1px solid #2AA7FF",
                        borderRadius: "5px",
                      }}
                    >
                      <p className="text-center slotText">{center.time}</p>
                    </div>
                    <div
                      className="pt-1 "
                      style={{
                        width: "128px",
                        height: "31px",
                        border: "1px solid #02A401",
                        borderRadius: "5px",
                      }}
                    >
                      <p className="text-center slotText">{center.date}</p>
                    </div>
                  </div>
                </div>
              </div>
  )
}

export default MedicalCard