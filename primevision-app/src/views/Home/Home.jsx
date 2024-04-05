import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Header from '../../components/Header/Header';
import Main from '../../components/Main/Main';
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