import React from 'react'
import CarBuy from "../Images/3646377.jpg"
import ReturnCar from "../Images/8867909.jpg"
import { useNavigate } from 'react-router-dom'

export default function Booking(props) {

    const navigate = useNavigate();
    const handleButtonClick = () => {
        navigate("/customer"); // Navigate to the "/about" route
      }; 

    const handleClick = () => {
        navigate("/returncar"); // Navigate to the "/about" route
    };   

  return (
   <>
       

        <div className={`booking-block container bg-${props.mode}`} style={{color: props.mode==='dark'?'white':'black'}} >
            <h2 className='booking-title'>Rent You Car</h2>

                <div className="booking-menu d-flex justify-content-around">
                    <div className="buying-block">
                            <h3>Buy a Car</h3>
                            <div className="buy-car mt-4 mb-4">
                                <img src={CarBuy} alt="" />
                            </div>
                            {/* <a href="/customer" className='buy'>Buy a Car</a> */}
                            <button type="submit" className={`btn btn-lg btn-${props.mode === 'dark'?'light':'dark'} ms-4 mt-3`} onClick={handleButtonClick} >Buy Car</button>

                    </div>
                    <div className="return-block">
                            <h3>Return a Car</h3>
                            <div className="return-car mt-4 mb-4">
                                <img src={ReturnCar} alt="" />
                            </div>
                            <button type="submit" className={`btn btn-lg btn-${props.mode === 'dark'?'light':'dark'} ms-4 mt-3`} onClick={handleClick} >Return Car</button>

                    </div>
                </div>
        </div>

    </>
  )
}
