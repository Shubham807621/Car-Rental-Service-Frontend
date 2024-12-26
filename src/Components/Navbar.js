import React from 'react';
import { ReactComponent as Sun } from "../Images/Sun.svg";
import { ReactComponent as Moon } from "../Images/Moon.svg";
import "./DarkMode.css";
import {Link} from 'react-router-dom';



export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav  w-75">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link> 
            <Link className="nav-link" to="/addcar">Add Car</Link>  
            
          </div>
          <div className='dark_mode d-flex'>
            <input className='dark_mode_input' type='checkbox' id='darkmode-toggle' />
            <label className='dark_mode_label' htmlFor='darkmode-toggle'onClick={props.toggleMode}> <Sun /> <Moon /></label>
            <label htmlFor="darkmode-toggle" className='ms-3 ' style={{color: props.mode==='dark'?'white':'black'}}>Enable {props.mode==='dark'?'Light':'Dark'} Mode </label>
          </div>
        </div>
      </div>
    </nav>
    
    
  )
}
