import React, { useContext, useEffect } from "react";
import { healthCenterStore } from "../../store/HealthStore";
import { IoIosSearch } from "react-icons/io";
import ambulance from '../../assets/ambulance.svg'
import Capsule from '../../assets/Capsule.svg'
import doctors from '../../assets/doctors.svg'
import labs from '../../assets/labs.svg'
import hospitals from '../../assets/hospitals.svg'
import { Link } from "react-router-dom";


const SearchHospitals = ({ from }) => {
  const {
    handleInputState,
    stateList,
    handleInputCity,
    cityList,
    searchForCenters,
  } = useContext(healthCenterStore);

  if (from === "searchPage") {
    return (
      <div>
        <div>
          <label htmlFor="exampleDataList" className="form-label">
            Datalist example
          </label>
          <input
            className="form-control"
            list="datalistOptions"
            id="exampleDataList"
            placeholder="Type to search..."
          />
          <datalist id="datalistOptions">
            <option />
          </datalist>
        </div>

        <hr />
        <div>
          <label htmlFor="exampleDataList2" className="form-label">
            Datalist example
          </label>
          <input
            className="form-control"
            list="datalistOptions2"
            id="exampleDataList2"
            placeholder="Type to search..."
          />
          <datalist id="datalistOptions2">
            <option />
          </datalist>
        </div>

        <button>Search</button>
      </div>
    );
  } else {
    return (
      <div className="container d-flex flex-column justify-content-center align-items-center">
        <div className="d-flex w-75 justify-content-between mt-5">
        <div >
          
          <input
            className="form-control"
            list="datalistOptions"
            id="exampleDataList"
            placeholder="Type to search..."
            onChange={(e) => handleInputState(e.target.value)}
            style={{backgroundColor: "#FAFBFE", width: "285px", height: "50px"}}
          />
          <datalist id="datalistOptions">
            {stateList.map((state, ind) => (
              <option key={state + ind} value={state} />
            ))}
          </datalist>
        </div>

        <div>
         
          <input
            className="form-control"
            list="datalistOptions2"
            id="exampleDataList2"
            placeholder="Type to search..."
            onChange={(e) => handleInputCity(e.target.value)}
            style={{backgroundColor: "#FAFBFE", width: "285px", height: "50px"}}
          />
          <datalist id="datalistOptions2">
            {cityList.map((city, ind) => (
              <option key={city + ind} value={city} />
            ))}
          </datalist>
        </div>

        
        <Link to={"/search-results"}><button onClick={() => searchForCenters("search")} disabled={stateList.length > 1 && cityList.length > 0 ? false : true} type='button' className='btn text-light px-5' style={{backgroundColor: "#2AA8FF"}}><IoIosSearch size={30}/> Search</button></Link>
        </div>

        <div className="mt-5">
          <h1 style={{fontSize: "20px"}}>You may be looking for</h1>
        </div>

        <div className="d-flex justify-content-between align-items-center h-100 w-100 m-4" >
          <div className="d-flex justify-content-center align-items-center flex-column" style={{backgroundColor: "#FAFBFE", border: "1px solid black", height: "153px", width: "203px", borderRadius: '1rem', border: "none", boxShadow: "1px 10px 1rem #e0e2e7"}}>
            <img src={doctors} alt="doc-logo" />
            <p>Doctors</p>
          </div>
          <div className="d-flex justify-content-center align-items-center flex-column" style={{backgroundColor: "#FAFBFE", border: "1px solid black", height: "153px", width: "203px", borderRadius: '1rem', border: "none", boxShadow: "1px 10px 1rem #e0e2e7"}}>
            <img src={labs} alt="doc-logo" />
            <p>Labs</p>
          </div>
          <div className="d-flex justify-content-center align-items-center flex-column" style={{backgroundColor: "#FAFBFE", border: "1px solid black", height: "153px", width: "203px", borderRadius: '1rem', border: "none", boxShadow: "1px 10px 1rem #e0e2e7"}}>
            <img src={hospitals} alt="doc-logo" />
            <p>Hospitals</p>
          </div>
          <div className="d-flex justify-content-center align-items-center flex-column" style={{backgroundColor: "#FAFBFE", border: "1px solid black", height: "153px", width: "203px", borderRadius: '1rem', border: "none", boxShadow: "1px 10px 1rem #e0e2e7"}}>
            <img src={Capsule} alt="doc-logo" />
            <p>Medical Store</p>
          </div>
          <div className="d-flex justify-content-center align-items-center flex-column" style={{backgroundColor: "#FAFBFE", border: "1px solid black", height: "153px", width: "203px", borderRadius: '1rem', border: "none", boxShadow: "1px 10px 1rem #e0e2e7"}}>
            <img src={ambulance} alt="doc-logo" />
            <p>Ambulance</p>
          </div>
        </div>
      </div>
    );
  }
};

export default SearchHospitals;
