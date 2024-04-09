import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';

import './RegistiCRUD.css';

const RegistiList = () => {
    const [RegistiList, setRegistiList] = useState([]);
    const [FilmList, setFilmList] = useState([]);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const urlRootAPI = "https://localhost:7278/api/";
                const API_URL = urlRootAPI + "Regista";

                const API_URL_FILM = "https://localhost:7278/api/film";

                const responseRegista = await axios.get(API_URL);
                const responseFilm = await axios.get(API_URL_FILM);

                setRegistiList(responseRegista.data);
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

    const generaStatuetteOscar = (numeroOscar) => {
        if (numeroOscar === 0) {
            return " _ ";
        } else {
            return [...Array(numeroOscar)].map((_, index) => (
                <img key={index} src="./oscar.png" alt="Statuetta Oscar" style={{ width: '30px', height: 'auto' }} />
            ));
            // return [...Array(numeroOscar)].map((_, index) => (
            //     "🏆" 
            // ));
        }
    };

    const handleDelete = async (id) => {
        try {
            // Chiedi conferma prima di procedere con l'eliminazione
            const confirmed = window.confirm("Sei sicuro di voler cancellare questo record?");

            if (confirmed) {
                const urlRootAPI = "https://localhost:7278/api/";
                const API_URL = urlRootAPI + "Regista/" + id;

                await axios.delete(API_URL);

                setRegistiList(RegistiList.filter(regista => regista.id !== id));
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
            <h1> Regista </h1>
            <table>
                <thead>
                    <tr >
                        <th>ID</th>
                        <th>Nome</th>
                        <th>Cognome</th>
                        <th>Data di Nascita</th>
                        <th>Nazionalità</th>
                        <th>Numero Oscar</th>
                        <th>Foto</th>
                        <th>Azioni</th>
                    </tr>
                </thead>
                <tbody>
                    {RegistiList.map((regista) => (
                        <tr key={regista.id}>
                            <td>{regista.id}</td>
                            <td>{regista.nome}</td>
                            <td>{regista.cognome}</td>
                            <td>{regista.dataDiNascita}</td>
                            <td>{regista.nazionalita}</td>
                            <td>{generaStatuetteOscar(regista.numeroOscar)} </td>
                            <td>
                                {regista.foto ? (
                                    <img src={regista.foto} alt="Foto" style={{ width: '100px' }} />
                                ) : (
                                    <img src="./DummyImageAttori.jpg" alt="Placeholder" style={{ width: '100px' }} />
                                )}
                            </td>
                            <td>
                                <button onClick={() => handleDetails(regista.id)}>
                                    <Link to={`/RegistiCRUD/RegistiDetails/${regista.id}`}>Details</Link>
                                </button>
                                <button >
                                    <Link to={`/RegistiCRUD/RegistiEdit/${regista.id}`}>Edit</Link>
                                </button>
                                <button>
                                    <Link to={`/RegistiCrud/`} style={{ color: 'green' }}>Create</Link>
                                </button>
                                <button onClick={() => handleDelete(regista.id)} style={{ color: 'red' }}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RegistiList;
