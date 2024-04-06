import './App.css';
import Home from './views/Home/Home';
import Contact from './views/Contact/Contact';
import Login from './Identity/Login/Login';
import About from './views/About/About';
import FilmCRUD from './views/FilmCRUD/FilmCRUD';
import EmailVerification from './views/EmailVerification/EmailVerification';
import Film from './views/Film/Film';
import FilmDetails from './views/FilmCRUD/FilmDetails';
import FilmEdit from './views/FilmCRUD/FilmEdit';

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
          <Route path="/filmCRUD" element={<FilmCRUD />} />
          <Route path="/emailverification" element={<EmailVerification />} />
          <Route path="/film" element={<Film />} />
          <Route path="/filmCRUD/FilmDetails/:id" element={<FilmDetails />} />
          <Route path="/filmCRUD/FilmEdit/:id" element={<FilmEdit />} /> 
        </Routes>
      </Router>
    </>
  );
}

export default App;