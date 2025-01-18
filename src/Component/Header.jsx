import React, { useState } from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header">
      <div className="logo">EO</div>
      <div className="menu-toggle" onClick={toggleMenu}>
        ☰
      </div>
      <nav className={`nav ${menuOpen ? "show" : ""}`}>
       <NavLink to="/home"> <a href="#home" className="nav-link">
          Home
        </a> </NavLink>
      <NavLink to="/about"> <a href="#about" className="nav-link">
          About
        </a> </NavLink>

       <NavLink to="/service"><a href="#services" className="nav-link">
          Services
        </a></NavLink> 

        <NavLink to="/portfolio"> <a href="#portfolio" className="nav-link">
          Portfolio
        </a> </NavLink>

        <NavLink to="/contact"> <a href="#contact" className="nav-link">
          Contact Me
        </a> </NavLink>
      </nav>
    </header>
  );
};

export default Header;











