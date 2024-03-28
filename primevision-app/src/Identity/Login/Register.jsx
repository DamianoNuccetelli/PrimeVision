import React from 'react';
import './Identity.css';
import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';


function Register() {
  return (
    <div className='loginBody'>
      <div>
        <Navbar />
      </div>
      <div className='loginLayout'>
        <h1>Registrazione</h1>
        {/* <p>Benvenuto, accedi per continuare...</p> */}
        <input type='text' placeholder='Inserisci username o e-mail' />
        <input type='password' placeholder='Inserisci password' />
        <input type='password' placeholder='Conferma password' />
        <input type='submit' value="Registrati" />

        <div className='separator'></div>
        <div className='registerLinkContainer'>
          <Link to="/login" className='loginLink'>Hai già un account? Accedi ora!</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;