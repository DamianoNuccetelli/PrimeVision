import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';

import './AttoriDetails.css';

const AttoriDetails = () => {
    const { id } = useParams();
    const [attore, setAttore] = useState(null);

    useEffect(() => {
        const fetchAttori = async () => {
            try {
                const url = `https://localhost:7278/api/Attore/${id}`;
                const response = await axios.get(url);

                setAttore(response.data);
            } catch (error) {
                console.error('Error fetching film details:', error);
            }
        };

        fetchAttori();
    }, [id]);

    if (!attore) {
        return <div> <h2>Nessun attore Trovato</h2></div>;
    }


    return (
        <div className="container">
            <div>
                <Navbar />
            </div>
            <img src={attore.foto} alt="Locandina" style={{ width: '350px' }} />
            <div className="details">
                <h2>{attore.nome} {attore.cognome}</h2>
                <p>Nazionalità: {attore.nazionalita}</p>
                <p>Data di Nascita: {attore.dataDiNascita}</p>
                <p>Premiato: {attore.isPremiato ? '🏆' : '🔴'}</p>
                <Link to="/AttoreCRUD">
                    <button className="goback button">Visualizza tutti</button>
                </Link>
            </div>
        </div>
    );
};

export default AttoriDetails;
