import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';

import './SerieDetails.css';

const SerieDetails = () => {
    const { id } = useParams();
    const [serie, setSerie] = useState(null);
    const [genereList, setGenereList] = useState([]);

    useEffect(() => {
        const fetchSerie = async () => {
            try {
                const url = `https://localhost:7278/api/serie/${id}`;
                const response = await axios.get(url);
                
                const API_URL_GENERE = "https://localhost:7278/api/Genere";
                const responseGenere = await axios.get(API_URL_GENERE);

                setSerie(response.data);
                setGenereList(responseGenere.data);
            } catch (error) {
                console.error('Error fetching film details:', error);
            }
        };

        fetchSerie();
    }, [id]);

    if (!serie) {
        return <div> <h2>Nessuna serie Trovata</h2></div>;
    }

    const getGenereName = (genereId) => {
        const genere = genereList.find(genere => genere.id === genereId);
        return genere ? genere.nome : 'Sconosciuto';
    };

    return (
        <div className="container">
            <div>
                <Navbar />
            </div>
            <img src={serie.locandina} alt="Locandina" style={{ width: '350px' }} />
            <div className="details">
                <h2>{serie.titolo}</h2>
                <p>Stagioni: {serie.stagioni}</p>
                <p>Data Uscita: {serie.dataUscita}</p>
                <p>Vietato: {serie.isVietato ? '🔞' : '🟢'}</p>
                <p>Premiato: {serie.isPremiato ? '🟢' : '🔴'}</p>
                <p>Genere: {getGenereName(serie.genereId)}</p>
                <Link to="/SerieCRUD">
                    <button className="goback button">Visualizza tutti</button>
                </Link>
            </div>
        </div>
    );
};

export default SerieDetails;
