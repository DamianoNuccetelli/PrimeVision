import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';

import './AttoriCrud.css';

const AttoriList = () => {
    const [AttoriList, setAttoriList] = useState([]);
    const [FilmList, setFilmList] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const urlRootAPI = "https://localhost:7278/api/";
                const API_URL = urlRootAPI + "Attore";

                const API_URL_FILM = "https://localhost:7278/api/film";

                const responseAttore = await axios.get(API_URL);
                const responseFilm = await axios.get(API_URL_FILM);

                setAttoriList(responseAttore.data);
                setFilmList(responseFilm.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const handleDetails = (id) => {
        console.log('Details:', id);
    };

    const handleDelete = async (id) => {
        try {
            // Chiedi conferma prima di procedere con l'eliminazione
            const confirmed = window.confirm("Sei sicuro di voler cancellare questo record?");

            if (confirmed) {
                const urlRootAPI = "https://localhost:7278/api/";
                const API_URL = urlRootAPI + "Attore/" + id;

                await axios.delete(API_URL);

                setAttoriList(AttoriList.filter(attore => attore.id !== id));
            }
        } catch (error) {
            console.error('Errore nella cancellazione del record:', error);
        }
    };

    return (
        <div>
            <div>
                <Navbar />
            </div>
            <h1> Attore </h1>
            <table>
                <thead>
                    <tr >
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Cognome</th>
                        <th>Nazionalità</th>
                        <th>Data di Nascita</th>
                        <th>Premiato</th>
                        <th>Foto</th>
                        <th>Azioni</th>
                    </tr>
                </thead>
                <tbody>
                    {AttoriList.map((attore) => (
                        <tr key={attore.id}>
                            <td>{attore.id}</td>
                            <td>{attore.nome}</td>
                            <td>{attore.cognome}</td>
                            <td>{attore.nazionalita}</td>
                            <td>{attore.dataDiNascita}</td>
                            <td>{attore.isPremiato ? '🟢' : '🔴'}</td>
                            <td>
                                {attore.foto ? (
                                    <img src={attore.foto} alt="Foto" style={{ width: '100px' }} />
                                ) : (
                                    <img src="./DummyImageAttori.jpg" alt="Placeholder" style={{ width: '100px' }} />
                                )}
                            </td>
                            <td>
                                <button onClick={() => handleDetails(attore.id)}>
                                    <Link to={`/attoriCRUD/AttoriDetails/${attore.id}`}>Details</Link>
                                </button>
                                <button >
                                    <Link to={`/attoriCRUD/attoriEdit/${attore.id}`}>Edit</Link>
                                </button>
                                <button>
                                    <Link to={`/AttoriCrud/`} style={{ color: 'green' }}>Create</Link>
                                </button>
                                <button onClick={() => handleDelete(attore.id)} style={{ color: 'red' }}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AttoriList;
