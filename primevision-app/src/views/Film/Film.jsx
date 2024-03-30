import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './Film.css';

const FilmList = () => {
    const [filmList, setFilmList] = useState([]);
    const [genereList, setGenereList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const urlRootAPI = "https://localhost:7278/api/";
                const API_URL = urlRootAPI + "film";

                const API_URL_GENERE = "https://localhost:7278/api/Genere";

                const responseFilm = await axios.get(API_URL);
                const responseGenere = await axios.get(API_URL_GENERE);

                setFilmList(responseFilm.data);
                setGenereList(responseGenere.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const getGenereName = (genereId) => {
        const genere = genereList.find(genere => genere.id === genereId);
        return genere ? genere.nome : 'Sconosciuto';
    };

    const booleanToString = (value) => {
        return value ? 'V' : 'X';
    };

    return (
        <div>
            <h1>Film</h1>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Titolo</th>
                        <th>Durata</th>
                        <th>Data Uscita</th>
                        <th>Vietato</th>
                        <th>Premiato</th>
                        <th>GenereID</th>
                        <th>Locandina</th>
                    </tr>
                </thead>
                <tbody>
                    {filmList.map((film) => (
                        <tr key={film.id}>
                            <td>{film.id}</td>
                            <td>{film.titolo}</td>
                            <td>{film.durata}</td>
                            <td>{film.dataUscita}</td>
                            <td>{film.isVietato ? '🔞' : '🟢'}</td>
                            <td>{film.isPremiato ? '🟢' : '🔴'}</td>
                            <td>{getGenereName(film.genereId)}</td>
                            <td><img src={film.locandina} alt="Locandina" style={{width: '100px'}} /></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FilmList;
