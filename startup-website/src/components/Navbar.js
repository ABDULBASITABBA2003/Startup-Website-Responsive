import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import hambuggericon from "../assets/hambuggericon.png";
import logo from "../assets/logo.png";

const Navbar = () => {
  // ✅ Define menuOpen state
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <img src={logo} alt="Nav bar logo" />

      {/* Desktop Navigation */}
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/portfolio">Portfolio</Link></li>
        <li><Link to="/services">Services</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>

      {/* Mobile Hamburger Icon */}
      <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        <img src={hambuggericon} alt="Menu" />
      </div>

      {/* Mobile Dropdown Menu */}
      <ul className={`nav-menu ${menuOpen ? "show-menu" : ""}`}>
        <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link to="/portfolio" onClick={() => setMenuOpen(false)}>Portfolio</Link></li>
        <li><Link to="/services" onClick={() => setMenuOpen(false)}>Services</Link></li>
        <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact Us</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
