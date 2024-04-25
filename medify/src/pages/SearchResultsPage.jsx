import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { healthCenterStore } from '../store/HealthStore';
import SearchHospitals from '../components/HospitalSearchBar/SearchHospitals';
import Banner from '../components/banner/Banner';
import NavigationBar from '../components/HosptalNavigationBar/NavigationBar';
import AppFooter from '../components/Footer/AppFooter';
import FaqSection from '../components/faq/FaqSection';


const SearchResultsPage = () => {

    const {getHealthCenter} = useContext(healthCenterStore);

    useEffect(() => {
        console.log(getHealthCenter)
    }, [])
  return (
    <div>
        {/* <h1>SearchResultsPage</h1>
<br />
        <h1>My Bookings</h1>
        <Link to={"/bookings"}>
            <button>Bookings</button>
        </Link>

        <div>
            <SearchHospitals from={"searchPage"}/>
        </div> */}

        <Banner />
        <NavigationBar becomeActive={"findDoctors"}/>


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

export default SearchResultsPage