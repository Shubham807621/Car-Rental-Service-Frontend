import React, { useState } from "react";
import axios from 'axios';

const AddCar = (props) => {
  const [car, setCar] = useState({
    modelName: "",
    brandName: "",
    basePrice: "",
    carNo: "",
    seatNo: "",
    fuelType: "",
    carAvailable: false,
    
  });
  const [image, setImage] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCar({ ...car, [name]: value });
  };

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
    // setCar({...car, image: e.target.files[0]})
  };

  const submitHandler = (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("imageFile", image);
    formData.append(
      "car",
      new Blob([JSON.stringify(car)], { type: "application/json" })
    );

    axios
      .post("http://localhost:8080/api/addcar", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("Car added successfully:", response.data);
        alert("Car added successfully");
      })
      .catch((error) => {
        console.error("Error adding car:", error);
        alert("Error adding car");
      });
  };

  return (
    <div className="container mb-5" style={{color: props.mode==='dark'?'white':'black'}}>
    <div className="center-container">
      <form className="row g-3 pt-5" onSubmit={submitHandler}>
        <div className="col-md-6">
          <label className="form-label">
            <h6>Model Name</h6>
          </label>
          <input type="text" className="form-control" placeholder="Model Name" onChange={handleInputChange} value={car.modelName} name="modelName"/>
        </div>
        <div className="col-md-6">
          <label className="form-label">
            <h6>Brand Name</h6>
          </label>
          <input type="text" name="brandName" className="form-control" placeholder="Brand Name" value={car.brandName} onChange={handleInputChange} id="brandName"/>
        </div>

        <div className="col-md-6">
          <label className="form-label">
            <h6>Car Id</h6>
          </label>
          <input type="text" name="carNo" className="form-control" placeholder="Car Id" value={car.carNo} onChange={handleInputChange} id="carNo"/>
        </div>
    
        <div className="col-6">
          <label className="form-label">
            <h6>Base Price</h6>
          </label>
          <input type="number" className="form-control" placeholder="Eg: $100" onChange={handleInputChange} value={car.basePrice} name="basePrice" id="basePrice" />
        </div>

        <div className="col-6">
          <label className="form-label">
            <h6>Number of Seat</h6>
          </label>
          <input type="number" className="form-control" placeholder="Eg: 4" onChange={handleInputChange} value={car.seatNo} name="seatNo" id="seatNo" />
        </div>
     

        <div className="col-md-6">
          <label className="form-label">
            <h6>fuel Type</h6>
          </label>
          <input type="text" className="form-control" placeholder="petrol" onChange={handleInputChange} value={car.fuelType} name="fuelType" id="fuelType"/>
        </div>
        
        {/* <input className='image-control' type="file" name='file' onChange={(e) => setCar({...car, image: e.target.files[0]})} />
    <button className="btn btn-primary" >Add Photo</button>  */}
        <div className="col-md-4">
          <label className="form-label">
            <h6>Image</h6>
          </label>
          <input className="form-control" type="file" onChange={handleImageChange} />
        </div>
        <div className="col-12">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" name="carAvailable" id="gridCheck" checked={car.carAvailable} 
            onChange={(e) =>
                setCar({ ...car, carAvailable: e.target.checked })
              }
            />
            <label className="form-check-label">Product Available</label>
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className={`btn btn-${props.mode === 'dark'?'light':'dark'} ms-4 mt-3`}   >Submit</button>
        </div>
      </form>
    </div>
    </div>
  );
};

export default AddCar;
