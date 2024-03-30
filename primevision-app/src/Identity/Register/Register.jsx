import React, { useState } from 'react';
import './Register.css';
import Navbar from '../../components/Navbar/Navbar';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';



function Register() {

const navigate = useNavigate();
const [username, setUsername] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [confirmpassword, setConfirmPassword] = useState("");
const [name, setName] = useState("");
const [address, setAddress] = useState("");

const[isRegistered, setIsRegistered] = useState(false);
const urlRootAPI = "https://localhost:7209/api/";

const handleRegister = async () => {

localStorage.setItem("username", username);
localStorage.setItem("email", email);
localStorage.setItem("password", password);
localStorage.setItem("confirmpassword", confirmpassword);
localStorage.setItem("name", name);
localStorage.setItem("address", address);

const API_URL = urlRootAPI + "Account/Register";
console.log(API_URL);

await axios.post(API_URL, {username, email, password, confirmpassword, name, address}, {

    headers: {
        "Content-Type": "application/json",
    }
  })
  
  .then((response) => {
    if (response.data) {
      setIsRegistered(response.data);
      console.log(response.data);
      console.log(response.status);

      localStorage.setItem("isRegistered", response.data);

      navigate("/login");
    }
  })
  
  .catch((error) => {
    localStorage.clear();
    console.log(error);
  });
};

  return (
    <div className='loginBody'>
      <div>
        <Navbar />
      </div>
      <div className='loginLayout'>
        <h1>Registrazione</h1>
        {/* <p>Benvenuto, accedi per continuare...</p> */}
        <input type='text' placeholder='Inserisci nome completo' onChange={(e) => setName(e.target.value)} />
        <input type='text' placeholder='Inserisci username' onChange={(e) => setUsername(e.target.value)} />
        <input type='text' placeholder='Inserisci email' onChange={(e) => setEmail(e.target.value)} />
        <input type='password' placeholder='Inserisci password' onChange={(e) => setPassword(e.target.value)} />
        <input type='password' placeholder='Conferma password' onChange={(e) => setConfirmPassword(e.target.value)} />
        <input type='text' placeholder='Inserisci indrizzo' onChange={(e) => setAddress(e.target.value)} />
        <input type='submit' value="Registrati" onClick={handleRegister} />
        <div className='separator'></div>
        <div className='registerLinkContainer'>
          <Link to="/login" className='loginLink'>Hai già un account? Accedi ora!</Link>
        </div>
      </div>
    </div>
  );
}

export default Register;