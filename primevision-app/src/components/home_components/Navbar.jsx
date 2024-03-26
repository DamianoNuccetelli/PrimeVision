import React from 'react';
import userImage from '../../img/userImage.png';
import logoPrimeVision from '../../img/LogoPrimeVisionWithoutLines.png';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className='navbarClass'>
      <div className='navbarLogo'>
        <img src={logoPrimeVision} alt='logo' />
      </div>
      <div className='navbarLink'>
        <Link to="/">Home</Link>
        <Link to="/film">Film</Link>
        <Link to="/Serietv">Serie tv</Link>
        <Link to="/about">Chi siamo</Link>
        <Link to="/contact">Contatti</Link>
      </div>
      <div className='navbarLogin'>
        <Link to="/login">LOGIN</Link>
        <img src={userImage} alt='user' />
      </div>
    </nav>
  );
}

export default Navbar;