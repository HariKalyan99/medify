import React from 'react'
import logo from '../../assets/medlogo.svg'

const NavigationBar = () => {
  return (
    <nav class="navbar navbar-expand-lg text-light container-fluid"  style={{backgroundColor: "transparent", height: "96px"}}>
    <div class="container-fluid-lg container-xl">
      <a class="navbar-brand" href="#">
        <img src={logo} alt="" />
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" aria-controls="offcanvas" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
        <div class="offcanvas-header">
        <a class="navbar-brand" href="#">
        <img src={logo} alt="medify-logo" />
      </a>
          <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div class="offcanvas-body d--mdflex justify-content-md-center align-items-md-center">
          <ul class="navbar-nav flex-grow-1 justify-content-end">
            <li class="nav-item"><a class=" navigationLink" href="#">Find Doctors</a></li>
            <li class="nav-item"><a class=" navigationLink" href="#">Hospitals</a></li>
            <li class="nav-item"><a class=" navigationLink" href="#">Medicines</a></li>
            <li class="nav-item"><a class=" navigationLink" href="#">Surgeries</a></li>
            <li class="nav-item"><a class=" navigationLink" href="#">Software for Provider</a></li>
            <li class="nav-item"><a class=" navigationLink" href="#">Facilities</a></li>
          </ul>
          <div className='px-3'>
          <button type='button' className='btn text-light' style={{backgroundColor: "#2AA8FF"}}>My Bookings</button>
          </div>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default NavigationBar