import React from 'react'

export default function Banner1() {
  return (
    <>
      <div className="banner-container">
        <video autoPlay muted loop className="video-background" src='\images\invideo.mp4'>
            <source src="\images\invideo.mp4" type="video/mp4"/>
        </video>
        <div className="video-overlay"></div>
        <div className="content">
         <div className="banner-logo-parent">
          <img src="/images/logo.png" alt="Eventlty Logo" className="banner-logo"/>
          <img src="/images/textlogo.png" alt="Eventlty Logo" className="banner-logo2"/>
         </div>
         <h1 className="headline text-content">DISCOVER. CONNECT. CELEBRATE.</h1>
         <p className="subheadline text-content">Your All-in-One Destination for Fast, Affordable, and Seamless Event Booking & Fest Solutions!</p>
         <div className="banner-buttons">
          <a href="#" className="btn btn-primary">List Your Event</a>
          <a href="#" className="btn btn-primary">Book Your Ticket</a>
         </div>
       </div>
       </div>
    </>
  )
}
