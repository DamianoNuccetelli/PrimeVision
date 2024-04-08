import React, { useState, useEffect } from 'react';
import userImage from '../../img/userImage.png';
import logoPrimeVision from '../../img/LogoPrimeVisionWithoutLines.png';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();
    
    const [showLinks, setShowLinks] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState("");

    useEffect(() => {
        const loggedIn = localStorage.getItem("isAuthenticated");
        const storedUsername = localStorage.getItem("username");
        if (loggedIn) {
            setIsAuthenticated(true);
            setUsername(storedUsername);
        } else {
            setIsAuthenticated(false);
            setUsername("");
        }
    }, []);

    const handleLogout = () => {
      localStorage.removeItem("isAuthenticated");
      localStorage.removeItem("username");
      setIsAuthenticated(false);
      setUsername("");
      navigate("/login");
  };

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
                        <Link to="/Serie">Serie tv</Link>
                        <Link to="/about">Chi siamo</Link>
                        <Link to="/contact">Contatti</Link>
                    </>
                )}
            </div>
            <div className='navbarLogin'>
                {isAuthenticated ? (
                    <>
                        <p>Bentornato, {username}!</p>
                        <button className='logoutButton' onClick={handleLogout}>LOGOUT</button>
                        <img src={userImage} alt='user' />
                    </>
                ) : (
                    <>
                        <Link to="/login">LOGIN</Link>
                        <Link to="/register">REGISTRATI</Link>
                        <img src={userImage} alt='user' />
                    </>
                )}
            </div>
        </nav>
    );
}

export default Navbar;
