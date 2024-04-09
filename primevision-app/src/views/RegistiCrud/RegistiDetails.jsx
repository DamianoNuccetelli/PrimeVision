import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';

import './RegistiDetails.css';

const RegistiDetails = () => {
    const { id } = useParams();
    const [regista, setRegista] = useState(null);

    useEffect(() => {
        const fetchRegista = async () => {
            try {
                const url = `https://localhost:7278/api/Regista/${id}`;
                const response = await axios.get(url);

                setRegista(response.data);
            } catch (error) {
                console.error('Error fetching film details:', error);
            }
        };

        fetchRegista();
    }, [id]);

    if (!regista) {
        return <div> <h2>Nessun regista Trovato</h2></div>;
    }

    const generaStatuetteOscar = (numeroOscar) => {
    if (numeroOscar === 0) {
        return " _ ";
    } else {
        const statuette = [...Array(numeroOscar)].map((_, index) => (
            <img key={index} src="./oscar.png" alt="Statuetta Oscar" style={{ width: '30px', height: 'auto' }} />
        ));
        return <span>{statuette}</span>;
    }
};
    

    return (
        <div className="container">
            <div>
                <Navbar />
            </div>
            <img src={regista.foto} alt="Locandina" style={{ width: '350px' }} />
            <div className="details">
                <h2>{regista.nome} {regista.cognome}</h2>
                <p>Nazionalità: {regista.nazionalita}</p>
                <p>Data di Nascita: {regista.dataDiNascita}</p>
                <p>Oscar: {generaStatuetteOscar(regista.numeroOscar)}</p>
                <Link to="/RegistiCRUD">
                    <button className="goback button">Visualizza tutti</button>
                </Link>
            </div>
        </div>
    );
};

export default RegistiDetails;
