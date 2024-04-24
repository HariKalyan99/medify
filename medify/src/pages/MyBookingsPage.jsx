import React from 'react'
import { Link, useNavigate } from 'react-router-dom'


const MyBookingsPage = () => {

    const navigate = useNavigate(); 
  return (
    <div>
        <h1>
        MyBookingsPage
        </h1>

        <h1>
            Home page
            <button onClick={() => navigate("/")}>Home</button>
        </h1>
    </div>
  )
}

export default MyBookingsPage