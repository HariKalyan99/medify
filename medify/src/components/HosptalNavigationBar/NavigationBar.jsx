import React from 'react'
import logo from '../../assets/medlogo.svg'
import { Link} from 'react-router-dom'

const NavigationBar = ({becomeActive}) => {
  
  return (
    <nav className="navbar navbar-expand-lg text-light container-fluid"  style={{backgroundColor: "transparent", height: "96px"}}>
    <div className="container-fluid-lg container-xl">
      <Link to={"/"} className="navbar-brand" >
        <img src={logo} alt="medify-logo" />
      </Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="offcanvas" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
        <div className="offcanvas-header">
        <Link className="navbar-brand" to={"/"}>
        <img src={logo} alt="medify-logo" />
      </Link>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body d--mdflex justify-content-md-center align-items-md-center">
          <ul className="navbar-nav flex-grow-1 justify-content-end">
            <li className="nav-item"><Link to={"/search-results"} className={` navigationLink ${becomeActive === "findDoctors" && "doctorsActive"}`} href="#">Find Doctors</Link></li>
            <li className="nav-item"><a className=" navigationLink" href="#">Hospitals</a></li>
            <li className="nav-item"><a className=" navigationLink" href="#">Medicines</a></li>
            <li className="nav-item"><a className=" navigationLink" href="#">Surgeries</a></li>
            <li className="nav-item"><a className=" navigationLink" href="#">Software for Provider</a></li>
            <li className="nav-item"><a className=" navigationLink" href="#">Facilities</a></li>
          </ul>
          <div className='px-3'>
          <Link to={"/bookings"}>
          <button type='button' className='btn text-light' style={{backgroundColor: "#2AA8FF"}}>My Bookings</button>
          </Link>
          </div>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default NavigationBar