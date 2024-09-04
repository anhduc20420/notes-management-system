import React from 'react';
import logo from '../../assets/img/logo.png';
import './style.css';

function Footer() {
  return (
    <div className='footer-container'>
      <div className='footer-logo'>
        <img src={logo} alt="logo" />
      </div>
      <div className='footer-contact'>
        <p>Liên hệ: +81 90 XXXX-XXXX</p>
        <p>Email: Notes@gmail.com</p>
      </div>
      <div className='footer-socials'>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-facebook"></i>
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-instagram"></i>
        </a>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i>
        </a>
      </div>
    </div>
  );
}

export default Footer;
