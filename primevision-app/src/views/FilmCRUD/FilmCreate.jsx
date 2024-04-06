import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import './FilmCreate.css';

const FilmCreate = () => {
    const [filmData, setFilmData] = useState({
        titolo: '',
        durata: '',
        dataUscita: '',
        isVietato: false,
        isPremiato: false,
        genereId: '',
        locandina: ''
    });

    const [generi, setGeneri] = useState([]);
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    useEffect(() => {
        const fetchGeneri = async () => {
            try {
                const response = await axios.get('https://localhost:7278/api/Genere');
                setGeneri(response.data);
            } catch (error) {
                console.error('Errore nel recupero dei generi:', error);
            }
        };

        fetchGeneri();
    }, []);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFilmData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSave = async () => {
        try {
            const url = 'https://localhost:7278/api/film';
            await axios.post(url, filmData);
            // Pulisci i campi del form dopo il salvataggio
            setFilmData({
                titolo: '',
                durata: '',
                dataUscita: '',
                isVietato: false,
                isPremiato: false,
                genereId: '',
                locandina: ''
            });
            setShowSuccessMessage(true);
        } catch (error) {
            console.error('Errore nel salvataggio del nuovo film:', error);
        }
    };

    return (
        <div className="container">
            <div>
                <Navbar />
            </div>
            <div className="details">
                <p>
                    Titolo:
                    <input
                        type="text"
                        name="titolo"
                        value={filmData.titolo}
                        onChange={handleInputChange}
                        placeholder="Titolo"
                        className="input-field"
                    />
                </p>
                <p>
                    Durata:
                    <input
                        type="text"
                        name="durata"
                        value={filmData.durata}
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
                        value={filmData.dataUscita}
                        onChange={handleInputChange}
                        className="input-field"
                    />
                </p>
                <p className="checkbox-field">
                    Vietato:
                    <input
                        type="checkbox"
                        name="isVietato"
                        checked={filmData.isVietato}
                        onChange={handleInputChange}
                    />
                </p>
                <p className="checkbox-field">
                    Premiato:
                    <input
                        type="checkbox"
                        name="isPremiato"
                        checked={filmData.isPremiato}
                        onChange={handleInputChange}
                    />
                </p>
                <p>
                    Genere:
                    <select
                        name="genereId"
                        value={filmData.genereId}
                        onChange={handleInputChange}
                        className="input-field input-field-select"
                    >
                        <option value="">Seleziona un genere</option>
                        {generi.map(genere => (
                            <option key={genere.id} value={genere.id}>{genere.nome}</option>
                        ))}
                    </select>
                </p>
                <p>
                    URL Locandina:
                    <input
                        type="text"
                        name="locandina"
                        value={filmData.locandina}
                        onChange={handleInputChange}
                        placeholder="URL Locandina"
                        className="input-field"
                    />
                </p>
                <div className="salva-visualizza-container">
                    <button className="button-salva" onClick={handleSave}>Salva</button>
                </div>
                {showSuccessMessage && (
                    <p style={{ color: 'green' }}>I dati sono stati aggiunti correttamente</p>
                )}
                <Link to="/filmCRUD">
                    <button className="goback button">Visualizza tutti</button>
                </Link>
            </div>
        </div>
    );
};

export default FilmCreate;
