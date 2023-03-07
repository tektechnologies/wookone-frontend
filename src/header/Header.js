import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";
// import { withAuth0 } from "@auth0/auth0-react";
import "./headerCSS/header.css";

class Header extends Component {
  render() {
    return (
      <>
        <Navbar className="bg-navbar" fixed="top" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link className="navbarAnchor" to="/">
                wooking
              </Nav.Link>
              {/* <NavLink to="/">Home</NavLink> */}
            </Nav>

            <ul className="nav navbar-nav">
              <li>
                <Nav.Link to="/Dashbored">dashBored</Nav.Link>
              </li>
              {/* {this.props.auth0.isAuthenticated ? (
                <>
                  <NavLink to="profile">Profile</NavLink>
                  <NavLink to="logout">Logout</NavLink>
                </>
              ) : (
                <NavLink to="login">Login</NavLink>
              )} */}
            </ul>
          </Navbar.Collapse>
        </Navbar>

        <main>
          <Outlet />
        </main>
      </>
    );
  }
}

export default Header;
