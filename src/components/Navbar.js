import React, { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  return (
    <header className="header">
      <img src="/images/logo.png" alt="Eventlty Logo" className="nav-logo"/>

      {/* Hamburger Menu Button */}
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      <nav className={`nav ${menuOpen ? 'active' : ''}`}>
        <a href="#">Home</a>
        <a href="#">Religious Event</a>
        <a href="#">Sponsers For Event</a>
        <a href="#">Wall of Love</a>
      </nav>
      
      <div className={`buttons ${menuOpen ? 'active' : ''}`}>
        <a href="#" className="btn btn-primary">List Your Event</a>
        <a href="#" className="btn btn-primary">Book Ticket</a>
      </div>
    </header>
  );
}

export default Navbar;