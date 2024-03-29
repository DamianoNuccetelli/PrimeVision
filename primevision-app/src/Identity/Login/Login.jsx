import React, { useState } from 'react';
import './Login.css';
import Navbar from '../../components/Navbar/Navbar';
import { Link, useNavigate} from 'react-router-dom';
import axios from "axios";


function Login() {

const navigate = useNavigate();
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const [username, setUsername] = useState("");
const [isAuthenticated, setIsAuthenticated] = useState(false);

const urlRootAPI = "https://localhost:7209/api/";


const handleLogin = async () => {
  
localStorage.setItem("username", username);
localStorage.setItem("email", email);
const API_URL = urlRootAPI + "Account/Login";
console.log(API_URL);
await axios.post(API_URL, {username, password}, {
  headers: {
    "Content-Type": "application/json"
  }
})
.then((response) => {
  if(response.data){
    setIsAuthenticated(response.data);
    console.log(response.data);
    console.log(response.status);
    localStorage.setItem("isAuthenticated", response.data);

    navigate("/");
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
      <h1>Login</h1>
      {/* <p>Benvenuto, accedi per continuare...</p> */}
      <input type='text' placeholder='Inserisci username o e-mail' onChange={(e) => setUsername(e.target.value)} />
      <input type='password' placeholder='Inserisci password' onChange={(e) => setPassword(e.target.value)} />
      <input type='submit' value="Accedi" onClick={handleLogin} />
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