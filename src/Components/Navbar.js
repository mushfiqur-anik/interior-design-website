import React from "react";
import "./Navbar.css"
import {Nav, Form, FormControl, Navbar, Alert, Button, NavDropdown} from "react-bootstrap"

const NavbarMenu = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="light" className="navbar-custom">
    <Navbar.Brand href="#home"> Galaxy Interior <i id="icon" className="fas fa-fire-alt"></i> </Navbar.Brand>

    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

    <Navbar.Collapse id="responsive-navbar-nav" className="text-center">
      <Nav className="ml-auto" >
        <Nav.Link href="#services">Services</Nav.Link>
        <Nav.Link href="#about"> About </Nav.Link>
        <Nav.Link href="#contact">Contact</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  
  </Navbar>
   
  );
};

export default NavbarMenu;
