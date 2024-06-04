import React, { useRef } from 'react';
import contact from './images/contact-removebg-preview.png'
import './ContactUs.css'; // Import your CSS file for styling
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form =useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7cbriby', 'template_sl1b8w7', form.current, '2CsqJ4WB-GGnQ6v62')
      .then((result) => {
        console.log(result.text);
        alert("Send mail Successfully")
      }, (error) => {
        console.log(error.text);
      });
    e.target.reset()
  };
  return (
    <div className="contact-us-container">
      <div className="form-container">
        {/* Form */}
        <form className='form-box' ref={form} onSubmit={sendEmail}>
          <p className='form-heading'>Contact Us</p>
          <div className="form-group">
            <label className='contact-label' htmlFor="name">Name:</label>
            <input className='contact-input' type="text" id="name" name="user_name" />
          </div>

          <div className="form-group">
            <label  className='contact-label' htmlFor="email">Email:</label>
            <input className='contact-input' type="email" id="email" name="user_email" />
          </div>

          <div className="form-group">
            <label  className='contact-label' htmlFor="number">Mobile No:</label>
            <input className='contact-input' type="number" id="email" name="user_mobile" />
          </div>

          <div className="form-group">
          <label className='contact-label' htmlFor="message">message</label>
          <textarea className='contact-input' name='message'row={3}></textarea>
        </div>
      
          <button type="submit" className='contactus-button'>Submit</button>
        </form>
      </div>

      <div className="image-container">
        {/* Image */}
        <img src={contact} alt="Contact" />
      </div>
    </div>
  );
}

export default ContactUs;
