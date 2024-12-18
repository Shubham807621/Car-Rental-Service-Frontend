import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const baseUrl = "http://localhost:8080/api/cars";

export default function CarItem(props) {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get(baseUrl);

        // Process the data to include necessary details
        const carData = response.data.map((car) => ({
          id: car.carId,
          brandName: car.brandName,
          modelName: car.modelName,
          basePrice: car.basePrice,
          carNo: car.carNo,
          seatNo: car.seatNo,
          fuelType: car.fuelType,
          carAvailable: car.carAvailable,
          imageUrl: `${baseUrl}/${car.carId}/image`, // Construct image URL
          
        })
      
      );

        setCars(carData);
        
       
        
      } catch (error) {
        console.error('Error fetching cars:', error);
      }
    };

    fetchCars();
  }, [props.mode]); // Add props.mode if it is expected to change

  const navigate = useNavigate();
  const handleButtonClick = ()=>{
    navigate("/cart");
  };

  const handleStoreCarDetails = (car) => {
    localStorage.setItem('selectedCar', JSON.stringify(car));
   
  };


  return (
    <>
      {cars.length > 0 ? (
        cars.map((car) => (
          <div key={car.id} className='d-flex'>
            
            <div className={`cars border border-${props.mode === 'dark' ? 'white' : 'black'}`}>
              <img src={car.imageUrl} alt={`${car.brandName} ${car.modelName}`} />
              <h3>{car.brandName} {car.modelName}</h3>
              <p className='ms-3'>{car.basePrice}/Day</p>
              <hr />
              <div className='d-flex justify-content-around'>
                <p><i className="fa-solid fa-users"></i>{car.seatNo}</p>
                <p><i className="fa-solid fa-gas-pump"></i>{car.fuelType}</p>
              </div>
              <button className={`border border-${props.mode === 'dark' ? 'white' : 'black'}`} onClick={()=>{handleButtonClick(); handleStoreCarDetails(car);}}>Book Now</button>
            </div>
          </div>
        ))
      ) : (
        <h1>Loading........</h1>
      )}
    </>
  );
}
