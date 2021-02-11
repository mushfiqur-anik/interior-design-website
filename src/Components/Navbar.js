import React from "react";
import "./Navbar.css"
import {Nav, Form, FormControl, Navbar, Alert, Button, NavDropdown} from "react-bootstrap"

const NavbarMenu = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar-custom">
    <Navbar.Brand href="#home"> Interior </Navbar.Brand>

    <Navbar.Toggle aria-controls="responsive-navbar-nav" />

    <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
      <Nav.Link href="#services">Services</Nav.Link>
      <Nav.Link href="#about"> About </Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>

    </Nav>

    </Navbar.Collapse>
  
  </Navbar>
   
  );
};

export default NavbarMenu;
