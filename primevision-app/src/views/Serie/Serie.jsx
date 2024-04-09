import React, { useState, useEffect } from 'react';
import Navbar from '../../components/Navbar/Navbar';
import Cards from '../../components/Card/Cards';
import axios from 'axios';
import './Serie.css';

function Serie() {
    const [genereList, setGenereList] = useState([]);

    useEffect(() => {
        const fetchGenres = async () => {
            try {
                const urlRootAPI = "https://localhost:7278/api/";
                const response = await axios.get(`${urlRootAPI}genere`);
                setGenereList(response.data);
            } catch (error) {
                console.error('Error fetching genres:', error);
            }
        };

        fetchGenres();
    }, []);

    return (
        <div className='serieBody'>
            <div>
                <Navbar />
            </div>
            <div className='serieContainer'>
                <h1>Solo su Prime Vision le migliori serie</h1>
                <h3>Prime Vision produce una straordinaria programmazione originale che non troverai da nessun'altra parte. <br />Film, serie TV, speciali e molto di più... su misura per te.</h3>
                {genereList.map(genere => (
                    <div key={genere.id}>
                        <h2>{genere.nome}</h2>
                        <Cards activeGenre={genere.id} showSeriesOnly={true} />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Serie;
