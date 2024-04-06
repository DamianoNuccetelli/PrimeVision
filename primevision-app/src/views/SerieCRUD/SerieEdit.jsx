import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import './SerieEdit.css';

const SerieEdit = () => {
    const { id } = useParams();
    const [Serie, setSerie] = useState(null);
    const [genereList, setGenereList] = useState([]);
    const [updatedSerieData, setUpdatedSerieData] = useState({
        titolo: '',
        stagioni: '',
        dataUscita: '',
        isVietato: false,
        isPremiato: false,
        genereId: '',
        locandina: ''
    });
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    useEffect(() => {
        const fetchSerie = async () => {
            try {
                const url = `https://localhost:7278/api/serie/${id}`;
                const response = await axios.get(url);
                
                const API_URL_GENERE = "https://localhost:7278/api/Genere";
                const responseGenere = await axios.get(API_URL_GENERE);

                setSerie(response.data);
                setGenereList(responseGenere.data);
                setUpdatedSerieData(response.data); // Imposta i dati del film come dati iniziali per la modifica
            } catch (error) {
                console.error('Errore nel recupero dei dati:', error);
            }
        };

        fetchSerie();
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setUpdatedSerieData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
        // Nascondi il messaggio di successo quando avviene un cambiamento nei dati del form
        setShowSuccessMessage(false);
    };

    const handleSave = async () => {
        try {
            const url = `https://localhost:7278/api/serie/${id}`;
            await axios.put(url, updatedSerieData);
            // Aggiorna lo stato del film con i nuovi dati
            setSerie(updatedSerieData);
            // Visualizza il messaggio di successo
            setShowSuccessMessage(true);
        } catch (error) {
            console.error('Errore nel salvataggio delle modifiche:', error);
        }
    };

    const getGeneriOptions = () => {
        return genereList.map(genere => (
            <option key={genere.id} value={genere.id}>{genere.nome}</option>
        ));
    };

    if (!Serie) {
        return <div> <h2>Nessuna serie Trovata</h2></div>;
    }

    return (
        <div className="container">
            <div>
                <Navbar />
            </div >
            <img src={Serie.locandina} alt="Locandina" style={{ width: '400px' }} />
            <div className="details">
                <p>
                    Titolo
                    <input
                        type="text"
                        name="titolo"
                        value={updatedSerieData.titolo}
                        onChange={handleInputChange}
                        placeholder="Titolo"
                        className="input-field"
                    />
                </p>
                <p>
                    Stagioni:
                    <input
                        type="text"
                        name="durata"
                        value={updatedSerieData.stagioni}
                        onChange={handleInputChange}
                        placeholder="Durata"
                        className="input-field"
                    />
                </p>
                <p>
                    Data Uscita:
                    <input
                        type="date"
                        name="dataUscita"
                        value={updatedSerieData.dataUscita}
                        onChange={handleInputChange}
                        className="input-field"
                    />
                </p>
                <p className="checkbox-field">
                    Vietato:
                    <input
                        type="checkbox"
                        name="isVietato"
                        checked={updatedSerieData.isVietato}
                        onChange={handleInputChange}
                    />
                </p>
                <p className="checkbox-field">
                    Premiato:
                    <input
                        type="checkbox"
                        name="isPremiato"
                        checked={updatedSerieData.isPremiato}
                        onChange={handleInputChange}
                    />
                </p>
                <p>Genere:
                    <select
                        name="genereId"
                        value={updatedSerieData.genereId}
                        onChange={handleInputChange}
                        className="input-field input-field-select"
                    >
                        <option value="">Seleziona un genere</option>
                        {getGeneriOptions()}
                    </select>
                </p>
                <p>
                    URL Locandina:
                    <input
                        type="text"
                        name="locandina"
                        value={updatedSerieData.locandina}
                        onChange={handleInputChange}
                        placeholder="URL Locandina"
                        className="input-field"
                    />
                </p>
                {showSuccessMessage && (
                    <p style={{ color: 'green' }}>I dati sono stati salvati correttamente.</p>
                )}
                <div className="salva-visualizza-container">
                    <button className="button-salva" onClick={handleSave}>Salva</button>
                </div>
                <Link to="/filmCRUD">
                    <button className="goback button">Visualizza tutti</button>
                </Link>
            </div>
        </div>
    );
};

export default SerieEdit;
