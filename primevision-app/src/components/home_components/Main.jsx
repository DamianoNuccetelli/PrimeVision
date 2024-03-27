import React from 'react';
import './Main.css';
import Cards from './Cards';

function Main() {
    return (
        <div className='mainClass'>
            <div className='buttonRow'>
                <input type='button' value="Action" />
                <input type='button' value="Horror" />
                <input type='button' value="Fantasy" />
                <input type='button' value="Giallo" />
                <input type='button' value="Thriller" />
                <input type='button' value="Fantascienza" />
            </div>
            <div className='containerCards'>
                <Cards />
            </div>
        </div>
    );
}

export default Main;