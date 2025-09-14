import React from 'react';
import './ContactForm.css'; // Import your CSS file

function ContactForm() {
  return (
    <div className="main-block">
      <div className="left-part">
        <i className="fas fa-envelope"></i>
        <i className="fas fa-at"></i>
        <i className="fas fa-mail-bulk"></i>
      </div>
      <form action="/con" className = "con">
        <h1 className = "ccc">Contact Us</h1>
        <div>
          <input className="fname" type="text" name="name" placeholder="Full name" />
          <input className="fname" type="text" name="name" placeholder="Email" />
          <input className="fname" type="text" name="name" placeholder="Phone number" />
          {/* <input className="fname" type="text" name="name" placeholder="Website" /> */}
        </div>
        <p className="ppp">Message</p>
        <div >
          <textarea className="info"rows="4"></textarea>
        </div>
        <button type="submit" className="ssub">Submit</button>
      </form>
    </div>
  );
}

export default ContactForm;
