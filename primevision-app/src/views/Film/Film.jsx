import React, { useState } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Cards from '../../components/Card/Cards';

import './Film.css';


function Film() {

  
  return (
    <div className='filmBody'>
      <div>
        <Navbar />
      </div>
      <div className='filmContainer'>
        <h1>Solo su Prime Vision i migliori film</h1>
        <h3>Prime Vision produce una straordinaria programmazione originale che non troverai da nessun'altra parte. <br />Film, serie TV, speciali e molto di più... su misura per te.</h3>
        <h2>Tutti i generi</h2>
        <Cards />
        <h2>Action</h2>
        <Cards activeGenre={6} />
        <h2>Commedia</h2>
        <Cards activeGenre={7} />
        <h2>Drammatico</h2>
        <Cards activeGenre={8} />
        <h2>Horror</h2>
        <Cards activeGenre={9} />
        <h2>Fantasy</h2>
        <Cards activeGenre={10} />
        <h2>Fantascienza</h2>
        <Cards activeGenre={11} />
        <h2>Thriller</h2>
        <Cards activeGenre={12} />
        <h2>Animazione</h2>
        <Cards activeGenre={13} />
        <h2>Avventura</h2>
        <Cards activeGenre={14} />
        <h2>Romantico</h2>
        <Cards activeGenre={15} />
        <h2>Mistero</h2>
        <Cards activeGenre={16} />
        <h2>Biografico</h2>
        <Cards activeGenre={17} />
        <h2>Storico</h2>
        <Cards activeGenre={18} />
        <h2>Musicale</h2>
        <Cards activeGenre={19} />
      </div>
    </div>
  );
}

export default Film;

