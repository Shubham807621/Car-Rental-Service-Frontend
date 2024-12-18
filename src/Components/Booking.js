import React from 'react'
import CarBuy from "../Images/3646377.jpg"
import ReturnCar from "../Images/8867909.jpg"

export default function Booking(props) {

    
  return (
   <>
       

        <div className="booking-block container bg-warning " style={{color: props.mode==='dark'?'white':'black'}}>
            <h2 className='booking-title'>Rent You Car</h2>

                <div className="booking-menu d-flex justify-content-around">
                    <div className="buying-block">
                            <h3>Buy a Car</h3>
                            <div className="buy-car mt-4 mb-4">
                                <img src={CarBuy} alt="" />
                            </div>
                            <a href="/customer" className='buy'>Buy a Car</a>
                    </div>
                    <div className="return-block">
                            <h3>Return a Car</h3>
                            <div className="return-car mt-4 mb-4">
                                <img src={ReturnCar} alt="" />
                            </div>
                            <a href="/returncar" className='buy'>Return a Car</a>
                    </div>
                </div>
        </div>

    </>
  )
}
