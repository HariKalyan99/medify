import React from 'react'

import cardimg from "../../assets/cardimg.svg";
import reb from "../../assets/reb.svg";


const LatestNews = () => {
  return (
    <div className="container d-flex flex-column justify-content-center align-items-center mt-5 mb-5">
        <p>Blog & News</p>

        <h1>Read Our Latest News</h1>
        {/* album  */}

        <div className="album py-5 ">
          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            <div className="col">
              <div className="card shadow-sm">
                <img src={cardimg} alt="cardimg" />
                <div className="card-body">
                  <p>Medical | March 31, 2022</p>
                  <p className="card-text">
                    6 Tips To Protect Your Mental Health When You're Sick
                  </p>
                  <div className="d-flex justify-content-start align-items-center">
                    <div>
                      <img src={reb} alt="" />
                    </div>
                    <p className="m-2">Rebecca Lee</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
                <img src={cardimg} alt="cardimg" />
                <div className="card-body">
                  <p>Medical | March 31, 2022</p>
                  <p className="card-text">
                    6 Tips To Protect Your Mental Health When You're Sick
                  </p>
                  <div className="d-flex justify-content-start align-items-center">
                    <div>
                      <img src={reb} alt="" />
                    </div>
                    <p className="m-2">Rebecca Lee</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="col">
              <div className="card shadow-sm">
                <img src={cardimg} alt="cardimg" />
                <div className="card-body">
                  <p>Medical | March 31, 2022</p>
                  <p className="card-text">
                    6 Tips To Protect Your Mental Health When You're Sick
                  </p>
                  <div className="d-flex justify-content-start align-items-center">
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
  )
}

export default LatestNews