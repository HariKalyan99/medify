import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { healthCenterStore } from '../store/HealthStore';
import SearchHospitals from '../components/HospitalSearchBar/SearchHospitals';


const SearchResultsPage = () => {

    const {getHealthCenter} = useContext(healthCenterStore);


    useEffect(() => {
        console.log(getHealthCenter)
    }, [])
  return (
    <div>
        <h1>SearchResultsPage</h1>
<br />
        <h1>My Bookings</h1>
        <Link to={"/bookings"}>
            <button>Bookings</button>
        </Link>

        <div>
            <SearchHospitals from={"searchPage"}/>
        </div>
    </div>
  )
}

export default SearchResultsPage