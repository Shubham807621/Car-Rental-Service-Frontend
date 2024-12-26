import React from 'react'
import Car from "../Images/car1.png"
import car1 from '../Images/image1.png'
import electricCar from "../Images/electric-car.png"
import priceTag from "../Images/price-tag.png"
import repair from "../Images/repair.png"

import Booking from './Booking'

export default function Mainblock(props) {
  return (
   <> 
        <div className='Main-block container d-flex justify-content-around' style={{color: props.mode==='dark'?'white':'black'}}>

            <div className="content-block ">
                <h1 style={{fontSize:"80px"}}>Drive Your Dream</h1>
                <p style={{fontSize:"20px" }} className='ms-3'>Unlock Your Journey with Our Rental Cars</p>
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

        <div className="info-block container d-flex justify-content-around"  style={{color: props.mode==='dark'?'white':'black'}}>
            <div className="content-block p-3" style={{width:'48%'}} >
                <h1>Why Choose Us?</h1>
                <p className='mt-4'>Discover a world of convenience, safety, and customization, paving the way for unforgettable adventures and seamless mobility solutions.</p>
                <div className={`info-box py-5 bg-${props.mode} `} style={{width:"530px", height:"500px",backgroundColor:"#f8f9fa" }}>
                    
                    <div className="box1 d-flex pe-2">
                      <img src={electricCar} alt=""  style={{width:"70px", margin:"15px" , backgroundColor:"#fff", padding:"10px ", borderRadius:"25px 0 0 25px"}} />
                        <div className="box2">
                            <h5 className='mt-3' style={{color:"black"}}>Deals For Every Budget</h5>
                            <p style={{fontSize:"15px", color:"#565656"}}>Incredible prices on every car, van, bike and package worldwide Book vehicles at incredible.</p>
                        </div>
                    </div>
                    <div className="box1 d-flex pe-2 mt-5">
                      <img src={priceTag} alt="" style={{width:"70px", margin:"15px" , backgroundColor:"#fff", padding:"10px ", borderRadius:"25px 0 0 25px"}}  />
                        <div className="box2">
                            <h5 className='mt-3'  style={{color:"black"}}>Flexible Pricing</h5>
                            <p style={{fontSize:"15px", color:"#565656"}}>customization, paving the way for unforgettable adventures seamless mobility solutions.</p>
                        </div>
                    </div>
                    <div className="box1 d-flex pe-2 mt-5">
                      <img  src={repair} alt="" style={{width:"70px", margin:"15px" , backgroundColor:"#fff", padding:"10px ", borderRadius:"25px 0 0 25px"}}  />
                        <div className="box2">
                            <h5 className='mt-3'  style={{color:"black"}}>Quality At Minimum Expense                            </h5>
                            <p style={{fontSize:"15px", color:"#565656"}}>customization, paving the way for unforgettable adventures seamless mobility solutions.</p>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div className="image1-block ">
                <img className="car-img "  src={car1} alt="car pic" />
            </div>

        </div>
    </>
  )
}
