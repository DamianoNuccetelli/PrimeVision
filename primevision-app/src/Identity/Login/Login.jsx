import React from 'react';
import './Identity.css';
import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';


function Login() {
  return (
    <div className='loginBody'>
      <div>
        <Navbar />
      </div>
      <div className='loginLayout'>
        <h1>Login</h1>
        {/* <p>Benvenuto, accedi per continuare...</p> */}
        <input type='text' placeholder='Inserisci username o e-mail' />
        <input type='password' placeholder='Inserisci password' />
        <input type='submit' value="Accedi" />
        <Link to="/forgot-password" className='forgotClass'>Hai dimenticato la password?</Link>
        <div className='separator'></div>
        <div className='registerLinkContainer'>
          <Link to="/register" className='registerLink'>Non hai un account? Registrati ora!</Link>
        </div>
      </div>
    </div>
  );
}

export default Login;