import React from 'react'
import Car from "../Images/car1.png"


import Booking from './Booking'

export default function Mainblock(props) {
  return (
   <> 
        <div className='Main-block container d-flex justify-content-between' style={{color: props.mode==='dark'?'white':'black'}}>

            <div className="content-block ">
                <h1 style={{fontSize:"80px"}}>Drive Your Dream</h1>
                <p style={{fontSize:"20px"}} className='ms-2'>Unlock Your Journey with Our Rental Cars</p>
            </div>


            <div className="image-block">
                <img className="car-img" src={Car} alt="Car Logo" />
            </div>

        </div>
        <Booking mode={props.mode} {...Mainblock}></Booking>

        {/* <div className="booking-block container  " style={{color: props.mode==='dark'?'white':'black'}}>
            <h2 className='booking-title'>Rent You Car</h2>

                <div className="booking-menu d-flex justify-content-around">
                    <div className="buying-block">
                            <h3>Buy a Car</h3>
                            <div className="buy-car mt-4 mb-4">
                                <img src={CarBuy} alt="" />
                            </div>
                            <a href="/cars" className='buy'>Buy a Car</a>
                    </div>
                    <div className="return-block">
                            <h3>Return a Car</h3>
                            <div className="return-car mt-4 mb-4">
                                <img src={ReturnCar} alt="" />
                            </div>
                            <a href="#" className='buy'>Return a Car</a>
                    </div>
                </div>
        </div> */}
    </>
  )
}
