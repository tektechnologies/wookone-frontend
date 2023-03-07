import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
import "./headerCSS/header.css";

class Header extends Component {
  render() {
    return (
      <>
        <Navbar className="bg-navbar" fixed="top" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavLink className="navbarAnchor" to="/">
                wooking
              </NavLink>
            </Nav>

            <ul className="nav navbar-nav">
            </ul>
          </Navbar.Collapse>
        </Navbar>

        <section>
          <Outlet />
        </section>
      </>
    );
  }
}

export default Header;
