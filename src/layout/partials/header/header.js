import React from "react";
import { Nav, Navbar, NavbarBrand } from "react-bootstrap";
import logo from "../../../assests/charity.png";
import "./header.css";
import { LinkContainer } from "react-router-bootstrap";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const naviagte = useNavigate();
  const logout = () => {
    naviagte("/");
  }
  return (
    <Navbar className="navbar" CollapseOnSelect variant="dark" expand="md">
      <NavbarBrand>
        <img className="navbar-logo" src={logo} alt="logo" width="50px" />
      </NavbarBrand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-nabar-nav">
        <Nav className="links">
          <LinkContainer to="/"><Nav.Link className="navbar-links" >
            Home
          </Nav.Link></LinkContainer>
          <LinkContainer to="/dashboard"><Nav.Link className="navbar-links" >
          Dashboard
          </Nav.Link></LinkContainer>
          <LinkContainer to="/tickets"><Nav.Link className="navbar-links" >
          Tickets
          </Nav.Link></LinkContainer>
        <Nav.Link onClick={logout}className="navbar-links" >
          Logout
          </Nav.Link>
     
          {/* <Nav.Link className="navbar-links" href="/">
            Home
          </Nav.Link>
          <Nav.Link className="navbar-links" href="/#">
            Dashboard
          </Nav.Link>
          <Nav.Link className="navbar-links" href="/dashboard">
            Tickets
          </Nav.Link>
          <Nav.Link className="navbar-links" href="/dashboard">
            Logout
          </Nav.Link> */}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
