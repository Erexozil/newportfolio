import React, { useState } from "react";
import "./Header.css";

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
        <a href="#home" className="nav-link">
          Home
        </a>
        <a href="#about" className="nav-link">
          About
        </a>
        <a href="#services" className="nav-link">
          Services
        </a>
        <a href="#portfolio" className="nav-link">
          Portfolio
        </a>
        <a href="#contact" className="nav-link">
          Contact Me
        </a>
      </nav>
    </header>
  );
};

export default Header;











