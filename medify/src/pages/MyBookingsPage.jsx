import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import NavigationBar from '../components/HosptalNavigationBar/NavigationBar';
import SearchHospitals from '../components/HospitalSearchBar/SearchHospitals';
import FaqSection from '../components/faq/FaqSection';
import AppFooter from '../components/Footer/AppFooter';
import Banner from '../components/banner/Banner';


const MyBookingsPage = () => {

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
            {/* healthcenters to be populated  */}
        </div>
        <FaqSection />

        <AppFooter />
    </div>
  )
}

export default MyBookingsPage