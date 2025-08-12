// src/Navbar.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import './Navbar.css'; // Import the custom CSS

const MyNavbar = () => {
  return (
    <Navbar className="navbar-custom" variant="dark" expand="lg" style={{boxShadow:'0 .25rem .25rem 0 rgba(0, 0, 0, .251)',  position:'fixed',overflow:'hidden'}}>
      <Navbar.Brand href="#home" className='newone'style={{color:'rgb(0, 159, 199)',fontFamily:'cursive',fontWeight:'900',wordSpacing:'2px'}}>SURPLUS FOOD MANAGEMENT</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="one">
          <Nav.Link className="nav-link-custom" href="#home" style={{color:'rgb(0, 159, 199)',fontFamily:'cursive'}}>Home</Nav.Link>
          <Nav.Link className="nav-link-custom" href="#about" style={{color:'rgb(0, 159, 199)',fontFamily:'cursive'}}>About</Nav.Link>
          <Nav.Link className="nav-link-custom" href="#services" style={{color:'rgb(0, 159, 199)',fontFamily:'cursive'}}>Services</Nav.Link>
          <Nav.Link className="nav-link-custom" href="#contact" style={{color:'rgb(0, 159, 199)',fontFamily:'cursive'}}>Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
