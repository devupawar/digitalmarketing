import React from 'react';
import './Footer.css'; // Import your CSS file for styling
import { FaFacebook,FaInstagram,FaTwitter,FaLinkedin, FaEnvelope } from 'react-icons/fa';
import logo from './images/ShreeLogo.png'
import { FaPhone } from 'react-icons/fa6';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-section-company">
          <div className="company-details">
            <img src={logo} alt="Company Logo" className="logo" />
            <p className='company-name'>Shree Digital Marketing Agency</p>
          </div>
          <p className="contact-info">Shree Digital Marketing Agency specializes in 360-degree digital marketing, providing tailored solutions to help brands scale up.</p>
          <p className="contact-info"><FaEnvelope className='contact-icon'/> : <a href="mailto:info@example.com" className="email-link">shreedigitalmarketingagencyjal@gmail.com</a></p>
          <p className="contact-info"><FaPhone className='contact-icon'/> :  <span className="phone-number">+917410726107</span></p>
        </div>

        <div className="footer-section-services">
          <p className='footer-service-head'>Services</p>
           <ul className="quick-links">
            <li className='service'>Social Media Marketing</li>
            <li className='service'>Search Engine Optimization</li>
            <li className='service'>Website Designing</li>
           </ul>
        </div>

       <div className="footer-section-Explore">
          <p className='follow-us-head'>Keep Exploring</p>
          <ul className="quick-links">
            <li className="quick-link"><a href="/" className="social-link">Home</a></li>
            <li className="quick-link"><a href="/plans" className="social-link">Plans</a></li>
            <li className="quick-link"><a href="/about" className="social-link">AboutUs</a></li>
            <li className="quick-link"><a href="/services" className="social-link">Services</a></li>
            <li className="quick-link"><a href="/contact" className="social-link">Contact Us</a></li>
          </ul>
        </div>

        <div className="footer-section-social">
          <p className='follow-us-head'>Connect With Us</p>
          <ul className="social-links">
            <li className="social-link"><a href="https://www.facebook.com/people/Shree-Digital-Marketing-Agency/100089689839853/" className="social-icon"><FaFacebook /></a></li>
            <li className="social-link"><a href="https://www.instagram.com/shreedigitalmarketing__/?hl=am-et" className="social-icon"><FaInstagram /></a></li>
            <li className="social-link"><a href="#" className="social-icon"><FaTwitter /></a></li>
            <li className="social-link"><a href="https://www.linkedin.com/in/devendra-waykole-b0554b219/?originalSubdomain=in" className="social-icon"><FaLinkedin /></a></li>
          </ul>
        </div>
        


      </div>
      <div className="footer-bottom">
        <hr className="footer-line" /> {/* Add a line above the copyright text */}
        <a href='https://wa.link/pdbekk'><p className='footer-text'>&copy; 2024 Digital Marketing Agency. All rights reserved By Devayani Pawar</p></a>
      </div>
    </footer>
  );
}

export default Footer;
