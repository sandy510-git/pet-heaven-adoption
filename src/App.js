import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Adopt from './components/Adopt';
import {PetCard} from './components/PetCard';
import {Register} from './components/Register';
import {ReleaseForm} from './components/ReleaseForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';
import ContactForm from './components/Contact';
import {Home} from './components/Home';

export default function App() {
  return (
    <> 
      <BrowserRouter> 

      
        <Navbar />
        
        <Routes>       
          <Route path = "/" exact element={<Home/>}/>
          <Route path="/pets" exact element={<PetCard />} />
          <Route path = "/adopt" exact element={<Adopt/>} /> 
          <Route path = "/supporter" exact element={<Register/>}/>
          <Route path = "/services" exact element={<ReleaseForm/>}/>
          <Route path = "/about" exact element={<About/>}/>
          <Route path = "/cancel" exact element={<About/>}/>
          <Route path = "/get" exact element={<PetCard/>}/>
          <Route path = "/contact" exact element={<ContactForm/>}/>
          <Route path = "/home" exact element={<Home/>}/>
         </Routes>

      </BrowserRouter>
      
      
     </>
    
  );
}



