import React from 'react';
import './style.css';
// Import Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock } from '@fortawesome/free-solid-svg-icons';

function Login() {
  return (
    <div className='login-container'>
      <div className='login'>
        <form>
          <h1>Login</h1>
          <div className='input-container'>
            <FontAwesomeIcon icon={faUser} className="input-icon" />
            <input type="text" placeholder="Username" />
          </div>
          <div className='input-container'>
            <FontAwesomeIcon icon={faLock} className="input-icon" />
            <input type="password" placeholder="Password" />
          </div>
          <button className='btn-login'>Login</button>
          <p className='forgot-password'>Forgot Password?</p>
        </form>
      </div>
    </div>
  );
}

export default Login;
