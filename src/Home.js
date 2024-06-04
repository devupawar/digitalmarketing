
import React from 'react';
import './Home.css'; // Import the CSS file for styling
import baground from './images/digitalbaground.jpg'

function Home() {
  return (
   <div className='back'>
     <div className="home-container">
      <div className="background-image">
       <img alt='' src={baground}></img>
        <div className="overlay-text">
          <p className='home-title'>Shree Digital Marketing Agency</p>
          <p className='home-info'>Shree Digital Marketing Agency specializes in 360-degree digital marketing, providing tailored solutions to help brands scale up.</p>
          <a href='/contact'><button className='home-button'>Contact Us</button></a>
        </div>
      </div>
    </div>
   </div>
  );
}

export default Home;
