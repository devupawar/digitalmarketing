import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';
import logoImage from './images/ShreeLogo.png'; // Import your logo image
import './NavRouter.css';
import { Link } from 'react-router-dom';
import { FaWhatsapp } from 'react-icons/fa6';

const NavRouter = () => {
  const [expanded, setExpanded] = useState(false);
  const [navBackground, setNavBackground] = useState(false);

  const handleNavClose = () => setExpanded(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setNavBackground(true);
    } else {
      setNavBackground(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Navbar
      expand="lg"
      className={`custom-navbar ${navBackground ? 'navbar-scroll' : 'navbar-transparent'}`}
      expanded={expanded}
      onToggle={setExpanded}
    >
      <Container className='container'>
        <Navbar.Brand className="logo" href="#">
          <img
            src={logoImage}
            width="40"
            height="40"
            className="d-inline-block align-top"
            alt="Shree Digital Marketing Agency Logo"
          />
          <p className='company-name-nav'>Shree Digital Marketing Agency</p>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link onClick={handleNavClose}>
              <Link className='routes' to="/">Home</Link>
            </Nav.Link>
            <Nav.Link onClick={handleNavClose}>
              <Link className='routes' to="/services">Services</Link>
            </Nav.Link>
            <Nav.Link onClick={handleNavClose}>
              <Link className='routes' to='/about'>About Us</Link>
            </Nav.Link>
            <Nav.Link onClick={handleNavClose}>
              <Link className='routes' to='/contact'>Contact Us</Link>
            </Nav.Link>
            <Nav.Link onClick={handleNavClose}>
              <Link className='routes' to='/Plans'>Plans</Link>
            </Nav.Link>
            <Nav.Link onClick={handleNavClose}>
              <Link className='routes' to='/clienttestimonial'>Testimonial</Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <a href='https://wa.link/pdbekk'><Button className='Whatsapp-button'><FaWhatsapp/> Connect With Us</Button></a>
      </Container>
    </Navbar>
  );
}

export default NavRouter;
