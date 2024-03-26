import React from 'react';
import Navbar from './home_components/Navbar';
import Header from './home_components/Header';
import Main from './home_components/Main';
import wallpaper from '../img/vikingswallpaper.jpg';
import './Home.css';

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <Main />
    </div>
  );
}

export default Home;