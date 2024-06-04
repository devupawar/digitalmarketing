// Plans.js

import React from 'react';
import './Plans.css';
import { FaCheck } from 'react-icons/fa';

const Plans = () => {
  return (
    <div className='background'>
       <p className='plan-head'>Simple. Affordable plan for everyone.</p>
      <div className='grid'>
        <div className='plan'>
          <article className='card'>
            <p className='plan-title'>Silver Plan</p>
            <ul className='features'>
              <li className='feature'><FaCheck className='check-icon'/> Social Media Marketing 30 Days</li>
              <hr className="feature-line" /> 
              <li className='feature'><FaCheck className='check-icon'/>15 Responsive Designs</li>
              <hr className="feature-line" />
              <li className='feature'><FaCheck className='check-icon'/>Organic Reach</li>
              <hr className="feature-line" />
              <li className='feature'><FaCheck className='check-icon'/>Two Reels</li>
              <hr className="feature-line" />
              <li className='feature'><FaCheck className='check-icon'/>24/7 Support</li>
              <hr className="feature-line" />
              <li className='feature'><FaCheck className='check-icon'/>Daily Analytics Reports</li>
            </ul>
            <a href='/contact'><button className='select-btn' >Contact Now</button></a>
          </article>
        </div>
        <div className='plan primary'>
          <article className='card'>
            <p className='plan-title'>Platinum Premium Plan</p>
            <ul className='features'>
              <li className='feature'><FaCheck className='check-icon'/>Social Media Marketing Using AI 30 Days</li>
              <hr className="feature-line" />
              <li className='feature'><FaCheck className='check-icon'/>Landing Page</li>
              <hr className="feature-line" />
              <li className='feature'><FaCheck className='check-icon'/>Twenty Graphics & Ten Reels</li>
              <hr className="feature-line" />
              <li className='feature'><FaCheck className='check-icon'/>Google Ads And Google Business Management</li>
              <hr className="feature-line" />
              <li className='feature'><FaCheck className='check-icon'/>Daily Analytics Reports</li>
              <hr className="feature-line" />
              <li className='feature'><FaCheck className='check-icon'/>24/7 Support And Onsite Support</li>
            </ul>
          <a href='/contact'>    <button className='select-btn' >Contact Now</button></a>
          </article>
        </div>
        <div className='plan'>
          <article className='card'>
            <p className='plan-title'>Gold Plan</p>
            <ul className='features'>
              <li className='feature'><FaCheck className='check-icon'/>Social Media Marketing Using AI 30 Days</li>
              <hr className="feature-line" />
              <li className='feature'><FaCheck className='check-icon'/>15 Responsive Design</li>
              <hr className="feature-line" />
              <li className='feature'><FaCheck className='check-icon'/>Five Reels</li>
              <hr className="feature-line" />
              <li className='feature'><FaCheck className='check-icon'/>24/7 Support</li>
              <hr className="feature-line" />
              <li className='feature'><FaCheck className='check-icon'/>Daily Analytics Reports</li>
              <hr className="feature-line" />
              <li className='feature'><FaCheck className='check-icon'/>Google Ads And Google Business Management</li>
            </ul>
           <a href='/contact'> <button className='select-btn'>Contact Now</button></a>
          </article>
        </div>
      </div>
      <div className='background1'>
       
      </div>
    </div>
  );
}

export default Plans;
