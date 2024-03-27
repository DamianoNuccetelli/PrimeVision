import './App.css';
import Home from './components/Home';
import About from './components/home_components/navbar_components/About';
import Contact from './components/home_components/navbar_components/Contact';
import Login from './components/Login';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;