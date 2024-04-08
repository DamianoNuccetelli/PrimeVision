import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';

import './StagioniCreate.css';

const StagioneCreate = () => {
    const [stagioneData, setStagioneData] = useState({
        serieId: '',
        numeroStagione: '',
        descrizione: ''
    });

    const [serieList, setSerieList] = useState([]);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [serieStagioni, setSerieStagioni] = useState({});
    

    useEffect(() => {
        const fetchSerie = async () => {
            try {
                const response = await axios.get('https://localhost:7278/api/Serie');
                setSerieList(response.data);
                const serieStagioniMap = {};
                response.data.forEach(serie => {
                    serieStagioniMap[serie.id] = serie.stagioni;
                });
                setSerieStagioni(serieStagioniMap);
            } catch (error) {
                console.error('Errore nel recupero delle serie:', error);
            }
        };

        fetchSerie();
    }, []);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setStagioneData(prevData => ({
            ...prevData,
            [name]: value 
        }));
    };

    const handleSave = async () => {
        if (!stagioneData.serieId) {
            alert('Seleziona una serie valida.');
            return;
        }

        try {
            const url = 'https://localhost:7278/api/Stagione';
            await axios.post(url, stagioneData);
            // Pulisci i campi del form dopo il salvataggio
            setStagioneData({
                serieId: '',
                numeroStagione: '',
                descrizione: ''
            });
            setShowSuccessMessage(true);
        } catch (error) {
            console.error('Errore nel salvataggio della nuova stagione:', error);
        }
    };

    return (
        <div className="container">
            <div>
                <Navbar />
            </div>
            <div className="details">
                <p>
                    Serie:
                    <br></br>
                    <select
                        name="serieId"
                        value={stagioneData.serieId}
                        onChange={handleInputChange}
                        className="input-field"
                    >
                        <option value="">Seleziona una serie</option>
                        {serieList.map(serie => (
                            <option key={serie.id} value={serie.id}>{serie.titolo}</option>
                        ))}
                    </select>
                </p>
                <p>
                    Numero Stagioni:
                    <input
                        type="text"
                        name="numeroStagione"
                        value={stagioneData.numeroStagione}
                        onChange={handleInputChange}
                        placeholder="Numero stagione"
                        className="input-field"                     
                    />
                </p>
                <p>
                    Descrizione:
                    <input
                        type="text"
                        name="descrizione"
                        value={stagioneData.descrizione}
                        onChange={handleInputChange}
                        placeholder='Descrizione stagione'
                        className="input-field"
                    />
                </p>
                <div className="salva-visualizza-container">
                    <button className="button-salva" onClick={handleSave}>Salva</button>
                </div>
                {showSuccessMessage && (
                    <p style={{ color: 'green' }}>I dati sono stati aggiunti correttamente</p>
                )}
                <Link to="/StagioniCRUD">
                    <button className="goback-button">Visualizza tutti</button>
                </Link>
            </div>
        </div>
    );
};

export default StagioneCreate;
