import React, { useState, useEffect } from 'react';
import './Header.css';

import peakyBlindersWallpaper from '../../img/peakyBlindersWallpaper.jpg';
import theFlashWallpaper from '../../img/theFlash.jpg';
import screamWallpaper from '../../img/scream.jpg';

function Header() {
    const [backgroundIndex, setBackgroundIndex] = useState(0);

    const backgrounds = [
        {
            image: peakyBlindersWallpaper,
            title: "PEAKY BLINDERS",
            description: "Peaky Blinders è una serie televisiva britannica basata su una storia vera, creata da Steven Knight e ambientata a Birmingham tra il 1919 e il 1934."
        },
        {
            image: theFlashWallpaper,
            title: "THE FLASH",
            description: "The Flash è un film del 2023 diretto da Andy Muschietti. Basato sull'omonimo personaggio dei fumetti DC Comics, nonché primo stand-alone cinematografico sul personaggio di Flash."
        },
        {
            image: screamWallpaper,
            title: "SCREAM",
            description: "Scream è un media franchise slasher creato da Wes Craven, la cui trama principale è incentrata su un serial killer, travestito con un costume di Halloween."
        }
    ];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setBackgroundIndex(prevIndex => (prevIndex + 1) % backgrounds.length);
        }, 5000); 

        return () => clearInterval(intervalId);
    }, [backgrounds.length]);

    const currentBackground = backgrounds[backgroundIndex];

    const backgroundImageStyle = {
        backgroundImage: `url(${currentBackground.image})`,
        backgroundSize: '100% 55vh',
        backgroundPosition: 'top center',
        backgroundRepeat: 'no-repeat',
        boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.8)'
    };

    return (
        <div className='homeBody' style={backgroundImageStyle}>
            <div className='headerClass'>
                <h1>{currentBackground.title}</h1>
                <p>{currentBackground.description}</p>
                <input type='button' value="Vai alla serie" />
            </div>
        </div>
    );
}

export default Header;
