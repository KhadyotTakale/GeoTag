import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "/src/assets/logo.png";
const Navbar = () => {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="Logo" className="logo" />
      </Link>
      <nav className="navbar">
        <Link to="/">HOME</Link>
        <Link to="/aboutus">ABOUT US</Link>
        <Link to="/services">SERVICES</Link>
        <Link to="/portfolio">PORTFOLIO</Link>
        <Link to="/contact">CONTACT </Link>
      </nav>
    </header>
  );
};

export default Navbar;
