import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './FilmDetails.css';

const FilmDetails = () => {
    const { id } = useParams();
    const [film, setFilm] = useState(null);
    const [genereList, setGenereList] = useState([]);

    useEffect(() => {
        const fetchFilm = async () => {
            try {
                const url = `https://localhost:7278/api/film/${id}`;
                const response = await axios.get(url);
                
                const API_URL_GENERE = "https://localhost:7278/api/Genere";
                const responseGenere = await axios.get(API_URL_GENERE);

                setFilm(response.data);
                setGenereList(responseGenere.data);
            } catch (error) {
                console.error('Error fetching film details:', error);
            }
        };

        fetchFilm();
    }, [id]);

    if (!film) {
        return <div> <h2>Nessun Film Trovato</h2></div>;
    }

    const getGenereName = (genereId) => {
        const genere = genereList.find(genere => genere.id === genereId);
        return genere ? genere.nome : 'Sconosciuto';
    };

    return (
        <div className="container">
            <img src={film.locandina} alt="Locandina" style={{ width: '300px' }} />
            <div className="details">
                <h2>{film.titolo}</h2>
                <p>Durata: {film.durata}</p>
                <p>Data Uscita: {film.dataUscita}</p>
                <p>Vietato: {film.isVietato ? '🔞' : '🟢'}</p>
                <p>Premiato: {film.isPremiato ? '🟢' : '🔴'}</p>
                <p>Genere: {getGenereName(film.genereId)}</p>
            </div>
        </div>
    );
};

export default FilmDetails;
