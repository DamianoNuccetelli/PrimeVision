import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';

import './StagioniDetails.css';

const StagioniDetails = () => {
    const { id } = useParams();
    const [Stagione, setStagione] = useState(null);
    const [SerieList, setSerieList] = useState([]);
    const [EpisodiList, setEpisodiList] = useState([]);

    useEffect(() => {
        const fetchSerie = async () => {
            try {
                const url = `https://localhost:7278/api/Stagione/${id}`;
                const response = await axios.get(url);

                const API_URL_SERIE = "https://localhost:7278/api/Serie";
                const responseSerie = await axios.get(API_URL_SERIE);

                const API_URL_EPISODI = "https://localhost:7278/api/Episodio";
                const responseEpisodi = await axios.get(API_URL_EPISODI);

                setSerieList(responseSerie.data);
                setStagione(response.data);
                setEpisodiList(responseEpisodi.data);

            } catch (error) {
                console.error('Error fetching stagioni details:', error);
            }
        };

        fetchSerie();
    }, [id]);

    if (!Stagione) {
        return <div> <h2>Nessuna stagione Trovata</h2></div>;
    }


    const getSeriesName = (serieId) => {
        const serie = SerieList.find(serie => serie.id === serieId);
        return serie ? serie.titolo : 'Sconosciuto';
    };
    const getLocandinaFromSerie = (serieId) => {
        const serie = SerieList.find(serie => serie.id === serieId);
        return serie ? serie.locandina : 'Sconosciuto';
    };
    const getEpisodi = (serieId) => {
        const episodiFiltrati = EpisodiList.filter(episodio => episodio.stagioneId === serieId);
        const titoliEpisodi = episodiFiltrati.map(episodio => episodio.titolo);
        return titoliEpisodi;
    };



    return (
        <div className="container">
            <div>
                <Navbar />
            </div>
            <img src={getLocandinaFromSerie(Stagione.serieId)} alt="Locandina" style={{ width: '350px' }} />
            <div className="details">
                <h2 className='red-title'>{getSeriesName(Stagione.serieId)}</h2>
                <p>
                    <span className="red-text">Stagione:</span> {Stagione.numeroStagione}
                </p>
                <span className="red-text">Episodi: <br /> </span>
                <select className="custom-span">
                    {EpisodiList.filter(episodio => episodio.stagioneId === Stagione.id).map(episodio => (
                        <option key={episodio.id} value={episodio.id}>{episodio.titolo}</option>
                    ))}
                </select>
                <p>
                    <span className="red-text">Descrizione Stagione: <br /> </span> {Stagione.descrizione}
                </p>
                <Link to="/StagioniCRUD">
                    <button className="goback button">Visualizza tutti</button>
                </Link>
            </div>

        </div>
    );
};

export default StagioniDetails;
