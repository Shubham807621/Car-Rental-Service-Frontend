import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Greeting(props) {
  
    const navigate= useNavigate();
    const handleButtonClick = () => {
        navigate("/"); // Navigate to the "/about" route
      };   
  
return (
    <div className='container my-5' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1>Your Car has been Successfully Booked.</h1>
        <button className='btn btn-dark my-3 ' style={{margin:"48%"}} onClick={handleButtonClick}>Go to HomePage</button>
    </div>
  )
}
