import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./headerCSS/header.css";

class Header extends Component {
  render() {
    return (

      
      <Navbar className="bg-navbar"  expand="lg">
        {/* <Navbar.Brand href="/"> 
           <img src={DreadLogo} alt="Wook Logo" height="60px" />
         </Navbar.Brand> */}

        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link className="navbarAnchor" href="/">
              Home
            </Nav.Link>
            <Nav.Link className="navbarAnchor" href="/AppSocialPortal">
              wooking
            </Nav.Link>
          </Nav>
       
          <ul className="nav navbar-nav justify-content-end">
            <li>
              <Nav.Link href="/Dashbored"> dashBored</Nav.Link>
            </li>
            <li>
              <Nav.Link href="/Register"> Register</Nav.Link>
            </li>
            <li >
              <Nav.Link  href="/Login">Login</Nav.Link>
            </li>
          </ul>
        </Navbar.Collapse>
      </Navbar>


 
    );
  }
}

export default Header;
