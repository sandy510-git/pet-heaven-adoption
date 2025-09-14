import React from 'react';
import './popup.css';
import './Release.css';
import tickImage from '../Images/tick.png';

export class ReleaseForm extends React.Component {
  showPopup = () => {
    const popup = document.getElementById('popupbox');
    popup.style.display = 'block';
  };

  hidePopup = () => {
    const popup = document.getElementById('popupbox');
    popup.style.display = 'none';
  };

  render() {
    return (
      <div className="booking">
        <h1 className="heading-title">Release Your Pet!</h1><br />
        <form className="book-form">
          <div className="flex">

                <div class="inputBox">
                    <span>Pet's Name :</span>
                    <input type="text" placeholder="Enter Pet's Name" name="name"/>
                </div>

                <div class="inputBox">
                    <span>Age :</span>
                    <input type="number" placeholder="Enter age" name="name"/>
                </div>

                <div class="inputBox">
                    <span>Gender :</span>
                    <div>
                        <select id="car-type">
                            <option value="compact">Male</option>
                            <option value="sedan">Female</option>
                        </select>
                    </div>
                </div>

                <div class="inputBox">
                    <span>Date of Birth :</span>
                    <input type="date" placeholder="date" name="pick-up"/>
                </div>

                <div class="inputBox">
                    <span>Owner's Name :</span>
                    <input type="text" placeholder="Enter your name" name="name"/>
                </div>
                <div class="inputBox">
                    <span>Phone Number :</span>
                    <input type="tel" id="phone" name="phone" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required/>
                </div> 
                
                <div class = "inputBox">
                  <span>Enter your email:</span>
                  <input type="email" id="email" name="email" placeholder="Please enter email"/>
                </div>

          
                <div class = "inputBox">
                  <span>Address</span>
                  <input type="text" placeholder="Enter address" name="address"/>
                </div>

                {/* <div class="inputBox">
                    <span>Choose pick-up location :</span>
                    <div>
                        <select id="car-type">
                            <option value="compact">AZoom car rental office Jurong East</option>
                            <option value="sedan">AZoom car rental office Raffle City</option>
                            
                        </select>
                    </div>
                </div> */}
                {/* <div class="inputBox">
                    <span>Return Location</span>
                   
                    <input type="text" placeholder="Return car at designed car park" name="return"/>
                </div>
                <div class="inputBox">
                    <span>Pick-up Date :</span>
                    <input type="date" placeholder="date" name="pick-up"/>
                </div>
                <div class="inputBox">
                    <span>Return Date :</span>
                    <input type="date" placeholder="date" name="return"/>
                </div> */}
          </div>
        </form>
        <button id="sub-btn" onClick={this.showPopup}>Submit</button>

        {/* Popup */}
        <div id="popupbox" class="pop">
          <div className="popup" id="pp">
          <img src={tickImage} width="100" height="100" alt="tick image" />
            <h2>Successful!</h2>
            <p>Your submission has been successfully completed.Your form is to be mailed to the administrator.Thanks!</p>
            <button type="button" onClick={this.hidePopup}>OK</button>
          </div>
        </div>
      </div>
    );
  }
}


