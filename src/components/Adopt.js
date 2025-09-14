import React, { useState } from 'react';
import './Adopt.css'; 
import './popup.css';

import tickImage from '../Images/tick.png';

const Adopt = () => {
  const [showPopup, setShowPopup] = useState(false);

  const showPopupBox = () => {
    setShowPopup(true);
  };

  const hidePopupBox = () => {
    setShowPopup(false);
  };

  return (
    <div className="container">
      <form action="">
        <div className="row">
          <div className="col">
            <h3 className="title">Adoption Application and Contract</h3>
            <div className="inputBox">
              <span>Perspective Pet Parent </span>
              <input type="text" placeholder="Please enter your name" />
            </div>

            <div className="inputBox">
              <span>Name of pets you wish to adopt </span>
              <input type="text" placeholder="Please enter the name of pet" />
            </div>

            <div className="inputBox">
                <span>Enter your email:</span>
                <input type="email" id="email" name="email" placeholder="Please enter email"/>
            </div>

        
            <div className = "inputBox">
                <span> Enter phone number: </span>
                <input type="tel" id="phone" name="phone" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
            </div>
            
            {/* <div className="inputBox">
              <span>Numbers of Days:</span>
              <input type="number" placeholder="Please type the days"  />
            </div> */}


            <div className="radio">
              <span>Have you ever surrendered a pet you own to any animal shelter including a "low" or "no kill" shelter?</span><br />
              <input type="radio" name="yes_no" defaultChecked/>Yes<br />
              <input type="radio" name="yes_no"  />No
            </div>

            <div className="inputBox">
              <span>If you have to leave town, emergently or planned, where would your pet stay?</span>
              <textarea rows="4" cols="30" name="comment" form="usrform">Enter text here...</textarea>
            </div>

            <div className="inputBox">
              <span>How would you deal with behavioral issues such as barking, chewing, destructive behavior, bathroom accidents indoors, unruly leash behaviors in your pet?</span>
              <textarea rows="4" cols="30" name="comment" form="usrform">Enter text here...</textarea>
            </div>

            
            <div className="radio">
              <span>Have you ever been convicted of an animal related crime, such as cruelty to animals, animal theft, or animal abandonment?</span><br />
              <input type="radio" name="yes_no" />Yes<br />
              <input type="radio" name="yes_no" defaultChecked />No
            </div>

            

            <div className="inputBox">
              <span>If you answered "Yes" please provide a detailed description:</span>
              <textarea rows="4" cols="30" name="comment" form="usrform">Enter text here...</textarea>
            </div>

            <ul> <li> By clicking the submit button, I understand that Gone to the Dogs Rescue Inc. will disclose any of the pet's health or behavior issues known by the above named rescue group before adoption is completed.  </li>
            <li> By clicking the submit button, I agree to indemnify and hold harmless Gone to the Dogs Rescue Inc. against any losses, lawsuits, claims, injury, damages incurred by me or to any persons or property by my adopted pet, once adoption has been completed. </li></ul>

            <div className="inputBox">
              <span>Signature of Potential Pet Parent</span>
              <input type="text" />
            </div>

           
          </div>
        </div>
      </form>
      <div className="center-button">
        <button className="styled-button" onClick={showPopupBox}>Submit</button>
      </div>

      {/* POP UP Box */}
      <div style={{ display: showPopup ? 'block' : 'none' }} id="popupbox">
        <div className="popup" id="popup">
        
          <img src={tickImage} width="100" height="100" alt="tick image" />

          <h2>Successful!</h2>
          <p>Your submission has been successfully completed.Your form is to be mailed to the administrator.Thanks!  </p>
          <button type="button" onClick={hidePopupBox}>OK</button>
        </div>
      </div>
    </div>
  );
};

export default Adopt;
