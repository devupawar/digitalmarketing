import React from 'react';
import { FaSearch, FaShareAlt, FaBullseye, FaEnvelope, FaDesktop, FaPen ,FaVideo,FaWhatsapp} from 'react-icons/fa';
import './Services.css'
const Services = () => {
  // Sample services data
  const servicesData = [
    {
      title: "Search Engine Optimization (SEO)",
      description: "Work with a top search engine optimization company to achieve better search engine ranking, earn more traffic and generate greater revenue.",
      icon: FaSearch
    },
    {
      title: "Social Media Marketing",
      description: "Partner with a leading digital marketing agency to increase brand awareness, reach your target audience & grow your business online.",
      icon: FaShareAlt
    },
    {
      title: "Pay Per Click (PPC) Advertising",
      description: "Run targeted advertisements to drive traffic to your website and increase conversions.",
      icon: FaBullseye
    },
    {
      title: "Email Marketing",
      description: "Reach out to potential customers through personalized email campaigns.",
      icon: FaEnvelope
    },
    {
      title: "Website Designing",
      description: "Create visually appealing and user-friendly websites tailored to your business needs.",
      icon: FaDesktop
    },
    {
      title: "Content Writing",
      description: "Produce high-quality, engaging content for your website, blog, or social media channels.",
      icon: FaPen
    },
    {
      title: "Video Editing", // New service
      description: "Create professional and engaging videos to promote your brand or products.",
      icon: FaVideo // Icon for video editing
    },
    {
      title: "WhatsApp Marketing", // New service
      description: "Use WhatsApp to reach and engage with your customers, promote your products, and provide support.",
      icon: FaWhatsapp // Icon for WhatsApp marketing
    }
  ];

  return (
    <div >
      <p className='serviceHeading'>Shree Digital Marketing Services</p>
      <p className='servicepara'>Build Brand Recognition as an Industry Leader and Increase Profitability</p>
      <div className="services-container">
        {servicesData.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="icon-container">
              < service.icon className='service-icon'  />
            </div>
            <p className='service-name'>{service.title}</p>
            <p className='service-description'>{service.description}</p>
            <button className='knowmore-bt'>Know More</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
