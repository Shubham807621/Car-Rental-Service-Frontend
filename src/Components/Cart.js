import axios from 'axios';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Cart(props) {
  // Retrieving user and car details from localStorage
  const user = JSON.parse(localStorage.getItem('user')) || {};
  const cars = JSON.parse(localStorage.getItem('selectedCar')) || {};

  // Navigate function to go back to the cars page
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/greeting");
  };

  const menuPage = () => {
    navigate("/cars");
  };
  // Handle form submission for booking
  const handleSubmit = (e) => {
    e.preventDefault();

    // Ensure all required properties exist in user and cars objects
    const name = user.username;
    const mobileNo = user.mobileNo;
    const email = user.email;
    const modelName = cars.modelName;
    const brandName = cars.brandName;
    const carNo= cars.carNo;
    const basePrice = cars.basePrice;
    const pickupDate = user.pickupDate; // from cars, not user
    const returnDate = user.returnDate; // from cars, not user

    const data = { name, mobileNo, email, modelName, brandName,basePrice, carNo,pickupDate, returnDate };

    // Send data to the server
    axios
      .post("http://localhost:8080/api/cart  ", data)
      .then((response) => {
        console.log(response);
        alert("Booking successfully added!");
      })
      .catch((error) => {
        console.error(error);
        alert("Error in adding details");
      });
  };

  return (
    <div className='container my-3' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
      <h2>Here is your booking details</h2>
      <p>Your Name : {user.username}</p>
      <p>Your Mobile Number : {user.mobileNo}</p>
      <p>Your Email Address : {user.email}</p>
      <p>Car Name : {cars.brandName} {cars.modelName}</p>
      <p>Car Id : {cars.carNo}</p>
      <p>Base Price : {cars.basePrice} Rupee</p>
      <p>Pick Up Date : {user.pickupDate}</p>
      <p>Return Date : {user.returnDate}</p>

      {/* Wrap the booking button in a form, so the submit button works correctly */}
      <form 
        onClick={handleButtonClick}
        onSubmit={handleSubmit}
        className='my-4'>
        <button type="submit" className='btn btn-dark me-2'>
          Book Now
        </button>
      </form>
      
      <button className='btn btn-dark' onClick={menuPage}>
        Return to Menu page
      </button>
    </div>
  );
}
