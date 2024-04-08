import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Cards from '../../components/Card/Cards';

import './Serie.css';


function Serie() {

  
  return (
    <div className='serieBody'>
      <div>
        <Navbar />
      </div>
      <div className='serieContainer'>
        <h1>Solo su Prime Vision</h1>
        <h3>Prime Vision produce una straordinaria programmazione originale che non troverai da nessun'altra parte. <br />Film, serie TV, speciali e molto di più... su misura per te.</h3>
        <h2>Tutti i generi</h2>
        <Cards showSeriesOnly={true} />
        <h2>Action</h2>
        <Cards activeGenre={6} showSeriesOnly={true} />
        <h2>Commedia</h2>
        <Cards activeGenre={7} showSeriesOnly={true} />
        <h2>Drammatico</h2>
        <Cards activeGenre={8} showSeriesOnly={true} />
        <h2>Horror</h2>
        <Cards activeGenre={9} showSeriesOnly={true} />
        <h2>Fantasy</h2>
        <Cards activeGenre={10} showSeriesOnly={true} />
        <h2>Fantascienza</h2>
        <Cards activeGenre={11} showSeriesOnly={true} />
        <h2>Thriller</h2>
        <Cards activeGenre={12} showSeriesOnly={true} />
        <h2>Animazione</h2>
        <Cards activeGenre={13} showSeriesOnly={true} />
        <h2>Avventura</h2>
        <Cards activeGenre={14} showSeriesOnly={true} />
        <h2>Romantico</h2>
        <Cards activeGenre={15} showSeriesOnly={true} />
        <h2>Mistero</h2>
        <Cards activeGenre={16} showSeriesOnly={true} />
        <h2>Biografico</h2>
        <Cards activeGenre={17} showSeriesOnly={true} />
        <h2>Storico</h2>
        <Cards activeGenre={18} showSeriesOnly={true} />
        <h2>Musicale</h2>
        <Cards activeGenre={19} showSeriesOnly={true} />
      </div>
    </div>
  );
}

export default Serie;

