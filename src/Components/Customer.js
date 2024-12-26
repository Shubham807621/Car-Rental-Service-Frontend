import React from 'react'
import axios from 'axios';

import { useNavigate } from 'react-router-dom';


export default function Customer(props) {

  const handleSubmit = (e) =>{
    e.preventDefault();

    const name = e.target.name.value;
    const mobileNo = e.target.mobileNo.value;
    const email = e.target.email.value;
    const city = e.target.city.value;
    const state = e.target.state.value;
    const pincode = e.target.pincode.value;
    const pickupDate = e.target.pickupDate.value;
    const returnDate = e.target.returnDate.value;

    const data = {name, mobileNo, email, city, state, pincode,pickupDate,returnDate};
    axios 
        .post("http://localhost:8080/api/customer", data)
        .then((response)=>{
            console.log(response);
            e.target.reset();
            const user = {
              "username": name,
              'email': email,
              'mobileNo':mobileNo,
              'pickupDate':pickupDate,
              'returnDate':returnDate
            };

            localStorage.setItem('user', JSON.stringify(user));

           
        })
        .catch((error)=>{
            console.log(error);
            alert("Error in adding Customer Details ");

        })
  }
 


  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/cars"); // Navigate to the "/about" route
  };     

  return (
    <>
    <div className={`Form-block container bg-${props.mode}`} style={{color: props.mode==='dark'?'white':'black'}} >
            <h2 className='booking-title pt-5'>Please Enter You Details</h2>
                <form className='mt-4' onSubmit={handleSubmit} >
                        <input type="text" placeholder='Enter Your Name' name='name'/>
                        <input type="text" placeholder='Enter Your Mobile Number' name='mobileNo'/>
                        <input type="text" placeholder='Enter Your Email Address' name='email' />
                        <input type="text" placeholder='Enter Your City' name='city'/>
                        <input type="text" placeholder='Enter Your State' name='state'/>
                        <input type="number" placeholder='Enter Your Pincode' name='pincode'/> 
                        <input type="date" placeholder='Enter Your State' name='pickupDate'/>
                        <input type="date" placeholder='Enter Your State' name='returnDate'/> <br />

                        <button type="submit" className={`btn btn-${props.mode === 'dark'?'light':'dark'} ms-4 mt-3`} onClick={handleButtonClick} >Submit</button>

                </form>
        </div>

    </>
  )
}
