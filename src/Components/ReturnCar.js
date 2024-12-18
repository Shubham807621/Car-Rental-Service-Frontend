import axios from 'axios';
import React, { useState } from 'react';

export default function ReturnCar() {

    const [message , setMessage] = useState('');
    const [messageType, setMessageType] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault();

        const carNo = parseInt(e.target.carNo.value);

        // Make the DELETE request
        axios
            .delete(`http://localhost:8080/api/returncar/${carNo}`)
            .then((response) => {
                // alert("Car successfully returned");
                setMessageType('success');
                setMessage(`Car has been rentured Successfully`);
                e.target.reset(); // Reset the form after successful deletion
            })
            .catch((error) => {
                // alert("Please enter the correct Car Number or try again later");
                setMessageType('error');
             setMessage('Please enter the correct Car Number or try again later');
                console.error(error); // Log the error for debugging
            });
    };

    return (
        <div className="container my-5">
            <form onSubmit={handleSubmit} className='mb-5' >
                <input className='delete-input' type="number"  name="carNo"  id="carNo"  placeholder="Enter Car ID"  required />
                <button type="submit" className="btn btn-dark">Submit</button>
            </form>

            {message && (
                <h3 className='my-5 message' style={{ color: messageType === 'error' ? 'red' : 'green' }}>
                    {message}
                </h3>
            )}

            <button className='btn btn-dark fs-3 my-3' style={{marginLeft:"38%"}}>Go to Home Page</button>
        </div>
        
    );
}
