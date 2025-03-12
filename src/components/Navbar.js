import React from 'react'

export default function Navbar() {
  return (
    <>
          <header className="header">
        <div className="logo">
            <span className="logo-icon">#</span>
            <span className="logo-text">Evently</span>
        </div>
        
        <nav className="nav">
            <a href="#">Home</a>
            <a href="#">Religious Event</a>
            <a href="#">Sponsers For Event</a>
            <a href="#">Wall of Love</a>
        </nav>

        <div className="buttons">
            <a href="#" className="btn btn-primary">List Your Event</a>
            <a href="#" className="btn btn-secondary">Book Ticket</a>
        </div>
    </header>
    </>
  )
}
