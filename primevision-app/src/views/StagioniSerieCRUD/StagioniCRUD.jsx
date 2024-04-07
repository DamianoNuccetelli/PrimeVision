import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar/Navbar';
import './StagioniCRUD.css';

const StagioniList = () => {
    const [StagioniList, setStagioniList] = useState([]);
    const [genereList, setGenereList] = useState([]);
    const [SerieList, setSerieList] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const urlRootAPI = "https://localhost:7278/api/";
                const API_URL = urlRootAPI + "Stagione";

                const API_URL_GENERE = "https://localhost:7278/api/Genere";

                const API_URL_SERIE = "https://localhost:7278/api/Serie";

                const responseStagioni = await axios.get(API_URL);
                const responseGenere = await axios.get(API_URL_GENERE);
                const responseSerie = await axios.get(API_URL_SERIE);

                setStagioniList(responseStagioni.data);
                setGenereList(responseGenere.data);
                setSerieList(responseSerie.data);
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

    const getSeriesName = (serieId) => {
        const serie = SerieList.find(serie => serie.id === serieId);
        return serie ? serie.titolo : 'Sconosciuto';
    };
    const getLocandinaFromSerie = (serieId) => {
        const serie = SerieList.find(serie => serie.id === serieId);
        return serie ? serie.locandina : 'Sconosciuto';
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
                const API_URL = urlRootAPI + "Stagione/" + id;
    
                await axios.delete(API_URL);
    
                setStagioniList(StagioniList.filter(stagione => stagione.id !== id));
            }
        } catch (error) {
            console.error('Errore nella cancellazione del record:', error);
        }
    };


    return (
        <div>
            <div>
                <Navbar />
                <br></br>
            </div>
            <br></br>
            <h1>Stagioni</h1>
            <table>
                <thead>
                    <tr >
                        <th>ID</th>
                        <th>Serie</th>
                        <th>Locandina Serie</th>
                        <th>Numero Stagione</th>
                        <th>Descrizione</th>
                        <th>Num Episodi</th>
                        <th>Azioni</th>
                    </tr>
                </thead>
                <tbody>
                    {StagioniList.map((Stagione) => (
                        <tr key={Stagione.id}>
                            <td>{Stagione.id}</td>
                            <td>{getSeriesName(Stagione.serieId)}</td>
                            {<td><img src={getLocandinaFromSerie(Stagione.serieId)} alt="Locandina" style={{ width: '100px' }} /></td>}
                            <td>{Stagione.numeroStagione}</td>
                            <td>{Stagione.descrizione}</td>
                            <td>{Stagione.episodi}</td>
                            <td>
                                <button onClick={() => handleDetails(Stagione.id)}>
                                    <Link to={`/StagioniCRUD/StagioniDetails/${Stagione.id}`}>Details</Link>
                                </button>
                                <button >
                                    <Link to={`/StagioniCRUD/StagioniEdit/${Stagione.id}`}>Edit</Link>
                                </button>
                                <button>
                                    <Link to={`/StagioniCRUD/StagioniCreate/`}  style={{ color: 'green' }}>Create</Link>
                                </button>
                                <button onClick={() => handleDelete(Stagione.id)} style={{ color: 'red' }}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default StagioniList;
