import './App.css';
import Home from './views/Home/Home';
import Contact from './views/Contact/Contact';
import Login from './Identity/Login/Login';
import About from './views/About/About';
import Film from './views/Film/Film';
import EmailVerification from './views/EmailVerification/EmailVerification';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './Identity/Register/Register';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/film" element={<Film />} />
          <Route path="/emailverification" element={<EmailVerification />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;