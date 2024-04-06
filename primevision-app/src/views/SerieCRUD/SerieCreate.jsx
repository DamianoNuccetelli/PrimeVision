import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom'
import './SerieCreate.css';

const SerieCreate = () => {
    const [SerieData, setSerieData] = useState({
        titolo: '',
        stagioni: '',
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
        setSerieData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSave = async () => {
        try {
            const url = 'https://localhost:7278/api/Serie';
            await axios.post(url, SerieData);
            // Pulisci i campi del form dopo il salvataggio
            setSerieData({
                titolo: '',
                stagioni: '',
                dataUscita: '',
                isVietato: false,
                isPremiato: false,
                genereId: '',
                locandina: ''
            });
            setShowSuccessMessage(true);
        } catch (error) {
            console.error('Errore nel salvataggio della nuova serie:', error);
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
                        value={SerieData.titolo}
                        onChange={handleInputChange}
                        placeholder="Titolo"
                        className="input-field"
                    />
                </p>
                <p>
                    Stagioni:
                    <input
                        type="text"
                        name="stagioni"
                        value={SerieData.durata}
                        onChange={handleInputChange}
                        placeholder="Stagioni"
                        className="input-field"
                    />
                </p>
                <p>
                    Data Uscita:
                    <input
                        type="date"
                        name="dataUscita"
                        value={SerieData.dataUscita}
                        onChange={handleInputChange}
                        className="input-field"
                    />
                </p>
                <p className="checkbox-field">
                    Vietato:
                    <input
                        type="checkbox"
                        name="isVietato"
                        checked={SerieData.isVietato}
                        onChange={handleInputChange}
                    />
                </p>
                <p className="checkbox-field">
                    Premiata:
                    <input
                        type="checkbox"
                        name="isPremiato"
                        checked={SerieData.isPremiato}
                        onChange={handleInputChange}
                    />
                </p>
                <p>
                    Genere:
                    <select
                        name="genereId"
                        value={SerieData.genereId}
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
                        value={SerieData.locandina}
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
                <Link to="/SerieCRUD">
                    <button className="goback button">Visualizza tutti</button>
                </Link>
            </div>
        </div>
    );
};

export default SerieCreate;