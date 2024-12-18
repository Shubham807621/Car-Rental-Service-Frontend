import React from 'react'
import CarItem from './CarItem'


export default function Cars(props) {


    return (
        <div className='container my-5' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
          
   

          <h2 className='mt-5'>Choose Your Car to Ride</h2>
          <div className="row">
           
                <div className="d-flex flex-wrap justify-content-around" key={Cars.id} >
                    <CarItem mode={props.mode} {...Cars} />
                </div>
           
          </div>
        </div>
      );
}
