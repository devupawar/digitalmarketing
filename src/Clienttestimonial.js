import React from 'react';
import './Clienttestimonial.css'; // Importing the CSS file
import rajnx from './images/rajnx.jpg'; // Importing the logo images
import teamax from './images/Teamax logo.jpg';
import technoweit from './images/technoweit.jpg';
import zope from './images/zope.jpg';
import cancer from './images/globalcancerhospital.png';
import sexologist from './images/25554445-e1645387859786.png';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import samadhakids from './images/samadha kids logo.jpg';
import starcomputer from './images/img_1_1715680003883_processed.jpg (1).png';
import vmautozz from './images/IMG-20240515-WA0003-removebg-preview.png'
import matoshrimedical from './images/WhatsApp Image 2024-05-29 at 3.54.19 PM (1).jpeg'
import shriramcafe from './images/shriramcafe.jpg'
import blesslagna from './images/blesslagna.jfif'
import codextechnologies from './images/codextechnologies.png'
import kailashpaligram from './images/Kailas paligram_20240529_164440_0000 (4).png'

const Testimonial = ({ testimonial }) => {
  const { src, text, company } = testimonial;
  return (
    <div className="testimonial-card">
      <div className="testimonial-logo">
        <img className='client-logo' src={src} alt={`${company} Logo`} />
      </div>
      <div className="testimonial-info">
        <blockquote>
          <span className="quote-symbol">&ldquo;</span>
          {text}
          <span className="quote-symbol">&rdquo;</span>
        </blockquote>
        <p><cite className='company-name'>~{company}</cite></p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const testimonials = [
    {
      src: rajnx,
      company: "Raj Nx",
      text: "I can confidently say that partnering with Shree Digital Marketing Agency was one of the best decisions for our business. Their expertise in social media marketing has significantly increased our online presence and sales. I highly recommend Shree Digital Marketing Agency to any business looking to grow their digital footprint."
    },
    {
      src: teamax,
      company: "TeaMax Cafe",
      text: "We at TeamAx Cafe are thrilled to share our experience working with Shree Digital Marketing Agency. Their expertise in social media management and online advertising has been instrumental in expanding our reach and attracting new customers. We wholeheartedly recommend Shree Digital Marketing Agency to any organization looking to enhance their digital presence and drive growth."
    },
    {
      src: technoweit,
      company: "TechnoWeit",
      text: "As a leading provider of software education, partnering with Shree Digital Marketing Agency has been a transformative experience for TechnoWeit Software Classes. We highly recommend Shree Digital Marketing Agency to any educational institution seeking to enhance their online presence and drive growth."
    },
    {
      src: zope,
      company: "Zope Industries",
      text: "Shree Digital Marketing Agency has been phenomenal for us. Their expertise in boosting our online presence, managing social media, and running ads has truly made a difference. Friendly, knowledgeable, and understanding our brand, Shree's team is simply the best. Thanks to them, more people are discovering our spices! For top-notch digital marketing support, Shree is the way to go."
    },
    {
      src: cancer,
      company: "Global Cancer Hospital",
      text: "Shree Digital Marketing Agency has been fantastic! Their website designs are top-notch, and their social media ads really helped us reach more people affected by cancer. We're grateful for their support in spreading our message and connecting with our community. Highly recommended!"
    },
    {
      src: sexologist,
      company: "Dr Prabhu Vyas",
      text: "Shree Digital Marketing Agency has truly been a game-changer for my practice. Their outstanding landing page and targeted social media ads have significantly increased my reach to new patients. Their professional and dedicated support has been invaluable. Highly recommend their services!"
    },
    {
      src:vmautozz,
      company:"VM Autozz",
      text:"Partnering with Shree Digital Marketing Agency has been a remarkable experience for VM Autozz. Their tailored marketing strategies and dedicated efforts have greatly enhanced our online presence, driving substantial growth in our business. The team's expertise and commitment to excellence have made a significant difference. We highly recommend Shree Digital Marketing Agency to anyone looking to boost their digital footprint and achieve impressive results"
    },
    {
      src:samadhakids,
      company:"Samadha kids",
      text:"Working with Shree Digital Marketing Agency has been a game-changer for Samadha Kids. Their innovative strategies and dedication have significantly boosted our online presence, leading to a remarkable increase in our engagement and sales. The team’s expertise and personalized approach made the entire process seamless and effective. We highly recommend Shree Digital Marketing Agency for anyone looking to elevate their business!"
    },
    {
      src:starcomputer,
      company:"Star Computer",
      text:"At Star Computer, our collaboration with Shree Digital Marketing Agency has been nothing short of phenomenal. Their innovative strategies and relentless pursuit of excellence have revolutionized our online presence. Thanks to their expert guidance, we've witnessed a significant surge in our customer engagement and brand visibility. Shree Digital Marketing Agency's commitment to our success is truly commendable, and we highly recommend their services to anyone striving for digital marketing excellence."
    },
    {
      src:matoshrimedical,
      company:"Matoshri Medical",
      text:"At Star Computer, our collaboration with Shree Digital Marketing Agency has been nothing short of phenomenal. Their innovative strategies and relentless pursuit of excellence have revolutionized our online presence. Thanks to their expert guidance, we've witnessed a significant surge in our customer engagement and brand visibility. Shree Digital Marketing Agency's commitment to our success is truly commendable, and we highly recommend their services to anyone striving for digital marketing excellence."
    },
    {
      src:codextechnologies,
      company:"Codex Technologies",
      text:"Shri Digital Marketing Agency has greatly enhanced our online presence at Codex Technologies. Their expertise in landing page design and social media ads has boosted our lead generation. We highly recommend their services for outstanding digital marketing results"
    },
    {
      src:shriramcafe,
      company:"Shriram Cafe",
      text:"Shri Digital Marketing Agency has significantly boosted Shriram Cafe's online presence through their expert social media ads. We've seen a marked increase in customer engagement and reach. Highly recommend their ad services!"
    },
    {
      src:blesslagna,
      company:"Bless Lagna",
      text:"Shree Digital Marketing Agency has greatly enhanced Bless Lagna's online presence with their landing page design and digital marketing services. We highly recommend them for effective results."
    },
    {
      src:kailashpaligram,
      company:"Kailash Paligram",
      text:"Kailash Paligram has seen remarkable growth in our online presence, thanks to Shree Digital Marketing Agency's exceptional services in landing page design and digital marketing. Highly recommended for their expertise and results-driven approach!"
    }
  ];

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <div className="testimonials-container">
      <p className='testimonial-heading'>Here are a few more testimonials from our happy customers</p>
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        
      >
        {testimonials.map((testimonial, index) => (
          <Testimonial key={index} testimonial={testimonial} />
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonials;
