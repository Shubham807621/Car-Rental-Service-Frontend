import React from 'react'


export default function Footer(props) {
  return (
    <div className={`footer d-flex justify-content-evenly bg-${props.mode}`} style={{color: props.mode==='dark'?'white':'black'}}>
        <div className="contact-container mt-4">
            <h3>Car Rental Service </h3>
            <p>We offer a range of the finest and most premium cars and bikes on rent.</p>
            <ul >
                <li className='mb-2'><i className="fa-solid fa-phone me-2"></i>123456789</li>
                <li className='mb-2'><i className="fa-solid fa-paper-plane me-2"></i>carrentalservice@gmail.com</li>
                <li className='mb-2'><i className="fa-solid fa-location-dot dot me-2" ></i>11/99 abc road, Mumbai</li>
            </ul>
        </div>

        <div className="info-container d-flex  w-50 justify-content-around mt-4">
            <div className="show-info">
                <h4>Shop Timing</h4>
                <p className='mt-4'>Monday - Friday:09:00 AM - 09:00 PM</p>
                <p>Saturday:09:00 AM - 07:00PM</p>
                <p>Sunday:Closed</p>
            </div>
           
            <div className="soical-media ">
                <h3 className='mb-4'>Follow Us</h3>
                <i className="fa-brands fa-instagram insta mx-2 fs-2"></i>  
                <i className="fa-brands fa-facebook fb mx-2 fs-2"></i> 
                <i className="fa-brands fa-x-twitter mx-2 fs-2"></i>
                <i className="fa-brands fa-youtube mx-2 fs-2"></i> 
            </div>

        </div>

    </div>
  )
}
