import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import NavigationBar from '../components/HosptalNavigationBar/NavigationBar';
import SearchHospitals from '../components/HospitalSearchBar/SearchHospitals';
import FaqSection from '../components/faq/FaqSection';
import AppFooter from '../components/Footer/AppFooter';
import Banner from '../components/banner/Banner';
import ad from "../assets/ad.svg";
import bookHos from "../assets/bookHos.svg";
import like from "../assets/like.svg";
import { healthCenterStore } from '../store/HealthStore';

const MyBookingsPage = () => {

    const [dataFromLocal, setDataFromLocal] = useState([]);

    const {getLocalData} = useContext(healthCenterStore);

    useEffect(() => {
      setDataFromLocal(getLocalData);
            //make a booking list array as a common producer using the context api..
    } , [])

    // const navigate = useNavigate(); 
  return (
    <div>
        {/* <h1>
        MyBookingsPage
        </h1>

        <h1>
            Home page
            
            <button onClick={() => navigate("/")}>Home</button>
        </h1> */}

<Banner />
        <NavigationBar />


        <div className='container-fluid bluebar'>
            <SearchHospitals from={"searchPage"}/>
        </div>

        <div className='container-fluid healthCenters'>
            <div className='container d-flex justify-content-center gap-3 pt-5' style={{paddingBottom: "100px"}}>
                <div className='w-75 d-flex flex-column gap-5 pt-5 pb-5'>
                {dataFromLocal.map((center, ind) => <div key={center.center["Provider ID"]} className='bookingLists'>
                    <div className='container d-flex justify-content-center align-items-center p-3'>
                        <div style={{width: "25%", height: "100%" }} className='d-flex justify-content-start px-4'>
                        <img src={bookHos} alt="healthCenter_logo" />
                        </div>
                        <div
                      className="d-flex flex-column justify-content-center"
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
                      className="d-flex justify-content-start align-items-start gap-5 pt-5"
                      style={{ width: "30%", height: "269px" }}
                    >
                     <div className='pt-1' style={{width: "84px", height: "31px", border: "1px solid #2AA7FF", borderRadius: "5px"}}>
                        <p className='text-center'>{center.time}</p>
                     </div>
                     <div className='pt-1' style={{width: "128px", height: "31px", border: "1px solid #02A401", borderRadius: "5px"}}>
                     <p className='text-center'>{center.date}</p>
                     </div>
                    </div>
                    </div>
                </div>)}
                
                
                </div>
                <div className="w-25 bookingLists mt-5">
            <img src={ad} alt="ads" className='h-100' style={{width: "100%"}}/>
          </div>
            </div>
        </div>
        <FaqSection />

        <AppFooter />
    </div>
  )
}

export default MyBookingsPage