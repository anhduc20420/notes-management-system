import React from 'react';
import logo from '../../assets/img/logo.png';
import './style.css'

function Header() {
  return (
    <header className="header-container">
      <div className="logo">
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <nav className="nav-bar">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Notes</a></li>
          <li><a href="#">Profile</a></li>
        </ul>
      </nav>

        <div className="search-bar">
          <input type="text" placeholder="Search" />
          <button>Search</button>
        </div>

        <div className="auth-buttons">
          <button className='login-btn'>Login</button>
          <button className='register-btn'>Register</button>
        </div>

        <button className="menu-button">
          <i className="fas fa-bars"></i>
        </button>
    </header>
  );
}

export default Header;
