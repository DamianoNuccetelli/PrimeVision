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
                const API_URL = urlRootAPI + "film"; // URL dell'API per ottenere la lista di film

                const API_URL_GENERE = "https://localhost:7278/api/Genere"; //Url dei generi per ottenere il nome dall'id in seguito

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

    // Funzione per ottenere il nome del genere dato l'ID del genere
  const getGenereName = (genereId) => {
    const genere = genereList.find(genere => genere.id === genereId);
    return genere ? genere.nome : 'Sconosciuto';
  };


    // Funzione per convertire un valore booleano in una stringa NON FUNZIONA, USO INLINE(vedi sotto)
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
                        {/* Aggiungi altre intestazioni della tabella se necessario */}
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
                            {/* <td>{film.locandina}</td> */}
                            <td><img src={film.locandina} alt="Locandina" style={{width: '100px'}} /></td>
                           
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default FilmList;
