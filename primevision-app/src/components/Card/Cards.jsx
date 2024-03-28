import React, { useState } from 'react';
import '../../components/Main/Main';
import segnaposto from '../../img/segnaposto.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';

const defaultImage = segnaposto;

const listFilm = [
    { name: "Film1", imgURL: "https://pad.mymovies.it/filmclub/2023/04/019/locandinapg1.jpg" },
    { name: "Film2", imgURL: "https://timesofindia.indiatimes.com/photo/90355881.cms" },
    { name: "Film3", imgURL: "https://musicart.xboxlive.com/7/9f0a5100-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080" },
    { name: "Film4", imgURL: "https://m.media-amazon.com/images/M/MV5BZTliNWJhM2YtNDc1MC00YTk1LWE2MGYtZmE4M2Y5ODdlNzQzXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_FMjpg_UX1000_.jpg" },
    { name: "Film5", imgURL: "https://static.toiimg.com/photo/105298532.cms?imgsize=238568" },
    { name: "Film6", imgURL: "https://m.media-amazon.com/images/I/81kB955wwcL._AC_UF1000,1000_QL80_.jpg" },
    { name: "Film7", imgURL: "https://www.acadlly.com/wp-content/uploads/2023/07/love-again.jpg" },
    { name: "Film8", imgURL: "https://cdn.marvel.com/content/1x/antmanandthewaspquantumania_lob_crd_03.jpg" },
    { name: "Film9", imgURL: "https://images-3.rakuten.tv/storage/global-movie/translation/artwork/2c8ad43a-181c-4cfc-a1e8-15b08e668534.jpeg" },
    { name: "Film10", imgURL: "https://resizing.flixster.com/dV1vfa4w_dB4wzk7A_VzThWUWw8=/ems.cHJkLWVtcy1hc3NldHMvbW92aWVzLzEyZDMyYjZmLThmNzAtNDliNC1hMjFmLTA2ZWY4M2UyMjJhMi5qcGc=" },
    { name: "Film11", imgURL: "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1703019441/amc-cdn/production/2/movies/69600/69579/PosterDynamic/161485.jpg" },
    { name: "Film12", imgURL: "https://filmdb.landmarkcinemas.com/FilmImages/22/1/124551/Trolls3OfficialPoster.jpg" },
    { name: "Film13", imgURL: "https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC/et00304730-ernlysvgyk-portrait.jpg" },
    { name: "Film14", imgURL: "https://m.media-amazon.com/images/M/MV5BMTIzNDYzMzgtZWMzNS00ODc2LTg2ZmMtOTE2MWZkNzIxMmQ0XkEyXkFqcGdeQXVyNjQ3MDg0MTY@._V1_FMjpg_UX1000_.jpg" },
    { name: "Film15", imgURL: "https://cps-static.rovicorp.com/2/Open/Paramount%20Pictures/Program/50102204/_derived_jpg_q90_310x470_m0/PAW_Patrol_The_Mighty_Movie_PA_2x3_27_1699252296796_11.jpg" }
];

function Cards() {
    const [startIndex, setStartIndex] = useState(0);

    const handleLeftArrowClick = () => {
        setStartIndex(prevIndex => Math.max(0, prevIndex - 1));
    };

    const handleRightArrowClick = () => {
        setStartIndex(prevIndex => Math.min(listFilm.length - 8, prevIndex + 1));
    };

    const visibleFilms = listFilm.slice(startIndex, startIndex + 8);

    return (
        <div className="cardContainer">
            <FontAwesomeIcon icon={faArrowAltCircleLeft} className='arrowIcon' onClick={handleLeftArrowClick} />
            {visibleFilms.map((film, index) => (
                <div key={index} className="card">
                    <img src={film.imgURL} alt={film.name} />
                </div>
            ))}
            <FontAwesomeIcon icon={faArrowAltCircleRight} className='arrowIcon' onClick={handleRightArrowClick} />
        </div>
    );
}

export default Cards;