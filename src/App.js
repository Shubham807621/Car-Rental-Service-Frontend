
import './App.css';

import React , {useState} from 'react'
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Mainblock from './Components/Main-block';


import {BrowserRouter, Route, Routes} from 'react-router-dom';

import About from './Components/About';
import AddCar from './Components/AddCar';
import Cars from './Components/Cars';
import Customer from './Components/Customer';
import Cart from './Components/Cart';
import Greeting from './Components/Greeting';
import ReturnCar from './Components/ReturnCar';





function App() {
  const [mode, setMode] = useState('light');

  const toggleMode = ()=>{

    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#282d31';
      
    }
    else{
      setMode('light');
      document.body.style.backgroundColor='white';

    }
  }

  return (
    <>
      <BrowserRouter>
          <Navbar title="Car Rental Service"  mode={mode}  toggleMode={toggleMode}></Navbar>
            <Routes>
                <Route path='/' element={<Mainblock mode={mode}/>}></Route>
                <Route path='/about' element={<About mode={mode}/>}></Route>
                <Route path='/cars' element={<Cars mode={mode}/>}></Route>
                <Route path='/addcar' element={<AddCar mode={mode}/>}></Route>
                <Route path='/customer' element={<Customer/>}></Route>
                <Route path='/cart' element={<Cart mode={mode}/>}></Route>
                <Route path='/greeting' element={<Greeting mode={mode}/>}></Route>
                <Route path='/returncar' element={<ReturnCar mode={mode}/>}></Route>
            </Routes>
        
          <Footer mode={mode}></Footer>
         
      </BrowserRouter>

    
    </>
  );
}

export default App;
