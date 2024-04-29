import React from 'react'
import heroImg from '../../assets/hero_image.svg'
const Herocontainer = () => {
  return (
    <div className='container d-flex w-100 justify-content-center align-items-start'>
          <div className=' h-100 w-50' style={{marginTop: "120px"}}>
            <h1 style={{fontSize: "31px"}} className='fs-5 fs-lg-1'>Skip the travel! Find Online</h1>
            <h1 className='fw-bold' style={{fontSize: "56px"}}>Medical <span style={{color: "#2AA7FF"}}>Centers</span></h1>
            <p>
            Connect instantly with a 24x7 specialist or choose to video visit a particular doctor.
            </p>
            <button type='button' className='btn text-light px-5' style={{backgroundColor: "#2AA8FF"}}>Find Centers</button>
          </div>
          <div className=' h-100 w-100 d-flex justify-content-center align-content-center'>
            <img src={heroImg} alt="hero_image" />
          </div>
        </div>
  )
}

export default Herocontainer