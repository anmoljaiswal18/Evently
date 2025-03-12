import React from 'react'

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-bg"></div>
        <div className="footer-container">
            <div className="footer-left">
                <h2 className="footer-heading">NEED HELP,<br/>GET IN TOUCH</h2>
                <div className="contact-info">
                    <a href="tel:+919403890176">Call +91 9304288699</a>
                </div>
                <div className="contact-info">
                    <a href="mailto:support@bambinos.live">support@evently.com</a>
                </div>
                <div className="contact-info">
                    <a href="#">Raise A Ticket</a>
                </div>
            </div>
            
            <div className="footer-right">
                <h3 className="join-text">JOIN THE CONVERSATION</h3>
                <div className="social-icons">
                    <i className="social-icon facebook fa fa-facebook-f"></i>
                    <i className="social-icon linkedin fa fa-linkedin-square"></i>
                    <i className="social-icon fa fa-instagram instagram" ></i>
                    <i className="social-icon whatsapp fa fa-whatsapp"></i>
                </div>
                <div className="footer-links">
                    <a href="#">COMPETITION</a>
                    <a href="#">BLOG</a>
                    <a href="#">PRIVACY POLICY</a>
                    <a href="#">TERMS & CONDITIONS</a>
                    <a href="#">PRICINGS</a>
                    <a href="#">REFUNDS & CANCELLATIONS POLICY</a>
                    <a href="#">CAREERS</a>
                </div>
            </div>
            
            <div className="copyright">
                2020 - 2025 © Evently Pvt. Ltd. All rights reserved
            </div>
        </div>
    </footer>
    </>
  )
}
