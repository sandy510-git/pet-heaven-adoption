
import React from 'react';
import './Home.css'; 
import { Link } from 'react-router-dom';
import ihome from '../Images/p3.jpeg';
export function Home() {
  return (
    <> 
       <div className="full-page">
         <div className='image'> 
       <h1> Welcome from Pet Heaven </h1>
       <p> The Society for the Pet Heaven  – aims to protect all animals from cruelty, neglect and ill treatment that often results from ignorance of animals and their needs.</p>
      
       <img src={ihome} width="100%" height="60%"  alt="..." /></div>
    </div>  
    </>
  );
};


