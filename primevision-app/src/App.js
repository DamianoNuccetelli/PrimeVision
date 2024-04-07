import './App.css';
import Home from './views/Home/Home';
import Contact from './views/Contact/Contact';
import Login from './Identity/Login/Login';
import About from './views/About/About';
import EmailVerification from './views/EmailVerification/EmailVerification';

import Film from './views/Film/Film';
import FilmCRUD from './views/FilmCRUD/FilmCRUD';
import FilmDetails from './views/FilmCRUD/FilmDetails';
import FilmEdit from './views/FilmCRUD/FilmEdit';
import FilmCreate from './views/FilmCRUD/FilmCreate';

import SerieCRUD from './views/SerieCRUD/SerieCRUD';
import SerieCreate from './views/SerieCRUD/SerieCreate';
import SerieDetails from './views/SerieCRUD/SerieDetails';
import SerieEdit from './views/SerieCRUD/SerieEdit';

import StagioniCrud from './views/StagioniSerieCRUD/StagioniCRUD';
import StagioniEdit from './views/StagioniSerieCRUD/StagioniEdit';
import StagioniCreate from './views/StagioniSerieCRUD/StagioniCreate';
import StagioniDetails from './views/StagioniSerieCRUD/StagioniDetails';

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
          <Route path="/filmCRUD/FilmCreate/" element={<FilmCreate />} /> 
          <Route path="/serieCRUD" element={<SerieCRUD />} />
          <Route path="/serieCRUD/SerieCreate/" element={<SerieCreate />} />
          <Route path="/serieCRUD/SerieDetails/:id" element={<SerieDetails />} />
          <Route path="/serieCRUD/SerieEdit/:id" element={<SerieEdit />} />
          <Route path="/stagioniCRUD" element={<StagioniCrud />} />
          <Route path="/stagioniCRUD/StagioniCreate/" element={<StagioniCreate />} />
          <Route path="/stagioniCRUD/StagioniDetails/:id" element={<StagioniDetails />} />
          <Route path="/stagioniCRUD/StagioniEdit/:id" element={<StagioniEdit />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;