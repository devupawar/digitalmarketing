import React from 'react';
import './AboutUs.css'; // Import CSS file for styling
import aboutimg from './images/team-working-together-project.jpg'
import whychooseus from './images/whychoose.png'

const AboutUs = () => {
  return (
    <div className='bg'>
      <div className="about-us-container">
      
      <div className="about-us-content">
        <div className="about-us-text">
          <p className='aboutheading'>Welcome to Shree Digital Marketing Agency</p>
          <p>Based in Jalgaon and founded in 2022, Shree Digital Marketing Agency specializes in 360-degree digital marketing, providing tailored solutions to help brands scale up.</p>
          <p>Our expertise extends to content creation, ensuring impactful and engaging material for your audience. At Shree, we are dedicated to transparency, integrity, and delivering measurable results, making us your trusted partner in the dynamic world of digital marketing.</p>
          <p>Whether you're a startup looking to establish your online presence or an established brand seeking to expand your reach, we have the strategies and solutions to help you achieve your goals.</p>
          <p>Our team of experienced professionals is committed to understanding your unique needs and developing customized strategies to drive growth and success for your business.</p>
          <p>Partner with Shree Digital Marketing Agency today and let us help you unlock the full potential of your online presence.</p>
        </div>
        <div className="about-us-image">
        <img src={aboutimg}  className='aboutimg' alt="Shree Digital Marketing Agency" />
        </div>
      </div>
    
    </div>
    <div className="whychooseus-container">
    <div className="whychoose-image-container">
        {/* Image */}
        <img src={whychooseus} alt="Contact" />
      </div>
      <div className="text-container">
        <p className='whychooseus-head'>Why Choose Us ?</p>
       <p className='whychooseus-text'>Choosing the right Digital Engage is critical to your success as a modern business owner. There are a plethora of options available to small businesses in the United States, so it’s crucial to work with a company that understands your needs. At Digital Engage, we draw on years of experience in digital marketing to help our clients achieve their commercial goals.
          So, why is Digital Engage the right SEO firm for your small business? Let’s find out!</p>
          <button className='whychoose-button'>Contact Us</button>
      </div>
    </div>
    </div>
  );
}

export default AboutUs;
