import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import './SerieCRUD.css';

const SerieList = () => {
    const [SerieList, setSerieList] = useState([]);
    const [genereList, setGenereList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const urlRootAPI = "https://localhost:7278/api/";
                const API_URL = urlRootAPI + "serie";

                const API_URL_GENERE = "https://localhost:7278/api/Genere";

                const responseSerie = await axios.get(API_URL);
                const responseGenere = await axios.get(API_URL_GENERE);

                setSerieList(responseSerie.data);
                setGenereList(responseGenere.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const getGenereName = (genereId) => {
        const genere = genereList.find(genere => genere.id === genereId);
        return genere ? genere.nome : 'Sconosciuto';
    };

    const handleDetails = (id) => {
        console.log('Details:', id);
    };

    const handleDelete = async (id) => {
        try {
            // Chiedi conferma prima di procedere con l'eliminazione
            const confirmed = window.confirm("Sei sicuro di voler cancellare questo record?");
            
            if (confirmed) {
                const urlRootAPI = "https://localhost:7278/api/";
                const API_URL = urlRootAPI + "Serie/" + id;
    
                await axios.delete(API_URL);
    
                setSerieList(SerieList.filter(serie => serie.id !== id));
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
            <h1> Serie </h1>
            <table>
                <thead>
                    <tr >
                        <th>ID</th>
                        <th>Titolo</th>
                        <th>Stagioni</th>
                        <th>Data Uscita</th>
                        <th>Vietato</th>
                        <th>Premiato</th>
                        <th>Genere</th>
                        <th>Locandina</th>
                        <th>Azioni</th>
                    </tr>
                </thead>
                <tbody>
                    {SerieList.map((Serie) => (
                        <tr key={Serie.id}>
                            <td>{Serie.id}</td>
                            <td>{Serie.titolo}</td>
                            <td>{Serie.stagioni}</td>
                            <td>{Serie.dataUscita}</td>
                            <td>{Serie.isVietato ? '🔞' : '🟢'}</td>
                            <td>{Serie.isPremiato ? '🟢' : '🔴'}</td>
                            <td>{getGenereName(Serie.genereId)}</td>
                            <td><img src={Serie.locandina} alt="Locandina" style={{ width: '100px' }} /></td>
                            <td>
                                <button onClick={() => handleDetails(Serie.id)}>
                                    <Link to={`/SerieCRUD/SerieDetails/${Serie.id}`}>Details</Link>
                                </button>
                                <button >
                                    <Link to={`/SerieCRUD/SerieEdit/${Serie.id}`}>Edit</Link>
                                </button>
                                <button>
                                    <Link to={`/SerieCRUD/SerieCreate/`}  style={{ color: 'green' }}>Create</Link>
                                </button>
                                <button onClick={() => handleDelete(Serie.id)} style={{ color: 'red' }}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default SerieList;
