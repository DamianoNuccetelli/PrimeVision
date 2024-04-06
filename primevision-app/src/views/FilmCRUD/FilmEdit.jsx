import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import { Link } from 'react-router-dom';
import './FilmEdit.css';

const FilmEdit = () => {
    const { id } = useParams();
    const [film, setFilm] = useState(null);
    const [genereList, setGenereList] = useState([]);
    const [updatedFilmData, setUpdatedFilmData] = useState({
        titolo: '',
        durata: '',
        dataUscita: '',
        isVietato: false,
        isPremiato: false,
        genereId: '',
        locandina: ''
    });
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    useEffect(() => {
        const fetchFilm = async () => {
            try {
                const url = `https://localhost:7278/api/film/${id}`;
                const response = await axios.get(url);
                
                const API_URL_GENERE = "https://localhost:7278/api/Genere";
                const responseGenere = await axios.get(API_URL_GENERE);

                setFilm(response.data);
                setGenereList(responseGenere.data);
                setUpdatedFilmData(response.data); // Imposta i dati del film come dati iniziali per la modifica
            } catch (error) {
                console.error('Errore nel recupero dei dati:', error);
            }
        };

        fetchFilm();
    }, [id]);

    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setUpdatedFilmData(prevData => ({
            ...prevData,
            [name]: type === 'checkbox' ? checked : value
        }));
        // Nascondi il messaggio di successo quando avviene un cambiamento nei dati del form
        setShowSuccessMessage(false);
    };

    const handleSave = async () => {
        try {
            const url = `https://localhost:7278/api/film/${id}`;
            await axios.put(url, updatedFilmData);
            // Aggiorna lo stato del film con i nuovi dati
            setFilm(updatedFilmData);
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

    if (!film) {
        return <div> <h2>Nessun Film Trovato</h2></div>;
    }

    return (
        <div className="container">
            <div>
                <Navbar />
            </div >
            <img src={film.locandina} alt="Locandina" style={{ width: '400px' }} />
            <div className="details">
                <p>
                    Titolo
                    <input
                        type="text"
                        name="titolo"
                        value={updatedFilmData.titolo}
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
                        value={updatedFilmData.durata}
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
                        value={updatedFilmData.dataUscita}
                        onChange={handleInputChange}
                        className="input-field"
                    />
                </p>
                <p className="checkbox-field">
                    Vietato:
                    <input
                        type="checkbox"
                        name="isVietato"
                        checked={updatedFilmData.isVietato}
                        onChange={handleInputChange}
                    />
                </p>
                <p className="checkbox-field">
                    Premiato:
                    <input
                        type="checkbox"
                        name="isPremiato"
                        checked={updatedFilmData.isPremiato}
                        onChange={handleInputChange}
                    />
                </p>
                <p>Genere:
                    <select
                        name="genereId"
                        value={updatedFilmData.genereId}
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
                        value={updatedFilmData.locandina}
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

export default FilmEdit;
