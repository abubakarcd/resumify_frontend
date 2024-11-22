// src/components/Navbar.js
import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import logo from "../assets/logo.png";
import "../style/landing.css";


const MyNavbar = () => {
  return (
    <Navbar bg="secondary"  expand="lg">
     <Navbar.Brand href="/" className="d-flex  align-items-center p-3 gap-4"  >
        <img
          src={logo}
          width="40"
          height="40"
          className="d-inline-block align-top"
          alt="Logo"
        />
        <span className="ml-2" >Resumify</span> 
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"  style={{ width: 'fit-content' }}/>
      
     
      <Navbar.Collapse id="basic-navbar-nav" className='justify-content-end' style={{ marginLeft: '10px', marginTop:'2px' }} >
        <Nav className="ml-auto justify-content-between gap-3"> 
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#service">Service</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#premium">Premium</Nav.Link>
          <button className='myresumebtn'>My Resume</button>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MyNavbar;
