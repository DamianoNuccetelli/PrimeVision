import React, { useState } from 'react';
import './Main.css';
import Cards from '../Card/Cards';


function Main() {

    const [activeGenreId, setActiveGenreId] = useState(null);

    const handleGenreButtonClick = (genreId) => {
        setActiveGenreId(genreId);
    };

    return (
        <div className='mainClass'>
            <div className='buttonRow'>
                <input type='button' value="Action" onClick={() => handleGenreButtonClick(6)} />
                <input type='button' value="Commedia" onClick={() => handleGenreButtonClick(7)} />
                <input type='button' value="Drammatico" onClick={() => handleGenreButtonClick(8)} />
                <input type='button' value="Horror" onClick={() => handleGenreButtonClick(9)} />
                <input type='button' value="Fantasy" onClick={() => handleGenreButtonClick(10)} />
                <input type='button' value="Fantascienza" onClick={() => handleGenreButtonClick(11)} />
                <input type='button' value="Thriller" onClick={() => handleGenreButtonClick(12)} />
                <input type='button' value="Animazione" onClick={() => handleGenreButtonClick(13)} />
                <input type='button' value="Avventura" onClick={() => handleGenreButtonClick(14)} />
                <input type='button' value="Romantico" onClick={() => handleGenreButtonClick(15)} />
                <input type='button' value="Mistero" onClick={() => handleGenreButtonClick(16)} />
                <input type='button' value="Biografico" onClick={() => handleGenreButtonClick(17)} />
                <input type='button' value="Storico" onClick={() => handleGenreButtonClick(18)} />
                <input type='button' value="Musicale" onClick={() => handleGenreButtonClick(19)} />
            </div>
            <div className='containerCards'>
                <Cards activeGenre={activeGenreId}  />
            </div>
        </div>
    );
}

export default Main;