import React, { useState } from 'react';

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  
  return (
    <header className="header">
      <div className="logo">Your Logo</div>
      
      {/* Hamburger Menu Button */}
      <div className="hamburger" onClick={toggleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      
      <nav className={`nav ${menuOpen ? 'active' : ''}`}>
        <li><a href="#">Home</a></li>
        <a href="#">Religious Event</a>
        <a href="#">Sponsers For Event</a>
        <li><a href="#">Wall of Love</a></li>
      </nav>
      
      <div className={`buttons ${menuOpen ? 'active' : ''}`}>
        <a href="#" className="btn btn-primary">List Your Event</a>
        <a href="#" className="btn btn-primary">Book Ticket</a>
      </div>
    </header>
  );
}

export default Navbar;