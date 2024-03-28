import React, { useState } from 'react';
import userImage from '../../img/userImage.png';
import logoPrimeVision from '../../img/LogoPrimeVisionWithoutLines.png';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const location = useLocation(); // Otteniamo la locazione corrente dalla libreria react-router-dom
  const [showLinks, setShowLinks] = useState(true);

  // Controlliamo se siamo nella vista di login
  if (location.pathname === '/login') {
    return (
      <nav className='navbarClass'>
        <div className='navbarLoginLeft'>
          <img src={logoPrimeVision} alt='logo' />
        </div>
        <div className='navbarLoginRight'>
          <Link to="/register">REGISTRATI</Link>
        </div>
      </nav>
    );
  }

  return (
    <nav className='navbarClass'>
      <div className='navbarLogo'>
        <img src={logoPrimeVision} alt='logo' />
      </div>
      <div className='navbarLink'>
        {showLinks && (
          <>
            <Link to="/">Home</Link>
            <Link to="/film">Film</Link>
            <Link to="/Serietv">Serie tv</Link>
            <Link to="/about">Chi siamo</Link>
            <Link to="/contact">Contatti</Link>
          </>
        )}
      </div>
      <div className='navbarLogin'>
        <Link to="/login">LOGIN</Link>
        <img src={userImage} alt='user' />
      </div>
    </nav>
  );
}

export default Navbar;