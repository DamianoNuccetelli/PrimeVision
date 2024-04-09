import React, { useState, useEffect } from 'react';
import segnaposto from '../../img/segnaposto.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import './Cards.css';

const defaultImage = segnaposto;

function Cards({ activeGenre, showSeriesOnly }) {
    const [dataList, setDataList] = useState([]);
    const [startIndex, setStartIndex] = useState(0);
    const [selectedItem, setSelectedItem] = useState(null);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [genereList, setGenereList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const urlRootAPI = "https://localhost:7278/api/";
                const endpoint = showSeriesOnly ? "serie" : "film";
                const API_URL = `${urlRootAPI}${endpoint}`;

                const response = await axios.get(API_URL);
                const shuffledData = response.data.sort(() => Math.random() - 0.5); 

                const API_URL_GENERE = "https://localhost:7278/api/Genere";
                const responseGenere = await axios.get(API_URL_GENERE);
                setGenereList(responseGenere.data);
        
                setDataList(shuffledData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [activeGenre, showSeriesOnly]);

    const handleLeftArrowClick = () => {
        setStartIndex(prevIndex => Math.max(0, prevIndex - 1));
    };

    const handleRightArrowClick = () => {
        if (startIndex >= dataList.length - 8) {
            setStartIndex(0);
        } else {
            setStartIndex(prevIndex => prevIndex + 1);
        }
    };

    const filteredData = activeGenre ? dataList.filter(item => item.genereId === activeGenre) : dataList;
    const visibleData = filteredData.slice(startIndex, startIndex + 8);

    const openModal = (item) => {
        setSelectedItem(item);
        setModalIsOpen(true);
    };

    const closeModal = () => {
        setModalIsOpen(false);
    };

    const getGenereName = (genereId) => {
        const genere = genereList.find(genere => genere.id === genereId);
        return genere ? genere.nome : 'Sconosciuto';
    };

    return (
        <div className="cardContainer">
            <FontAwesomeIcon icon={faArrowAltCircleLeft} className={startIndex === 0 ? 'arrowIcon hidden' : 'arrowIcon'} onClick={handleLeftArrowClick} />
            {visibleData.map((item, index) => (
                <div key={index} className="card" onClick={() => openModal(item)}>
                    <img src={item.locandina || defaultImage} alt={item.titolo} />
                </div>
            ))}
            {visibleData.length > 7 && startIndex !== dataList.length - 8 && <FontAwesomeIcon icon={faArrowAltCircleRight} className='arrowIcon' onClick={handleRightArrowClick} />}
            
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                contentLabel="Dettagli del Film/Serie"
                className={"modalClass"}
            >
                <div className="close-icon" onClick={closeModal}>x</div>
                {selectedItem && (
                    <div className="container" >
                        <img src={selectedItem.locandina} alt="Locandina" />
                        <div className="details">
                            <h1>{selectedItem.titolo}</h1>
                            {showSeriesOnly ? (
                                <>
                                    <p>Stagioni: {selectedItem.stagioni}</p>
                                    <p>Data Uscita: {selectedItem.dataUscita}</p>
                                </>
                            ) : (
                                <>
                                    <p>Durata: {selectedItem.durata} minuti</p>
                                    <p>Data Uscita: {selectedItem.dataUscita}</p>
                                </>
                            )}
                            <p>Vietato: {selectedItem.isVietato ? 'Si 🔞' : 'No 🟢'}</p>
                            <p>Premiato: {selectedItem.isPremiato ? 'Si 🟢' : 'No🔴'}</p>
                            <p>Genere: {getGenereName(selectedItem.genereId)}</p>
                            <button >Guarda {showSeriesOnly ? "la serie" : "il film"}</button>
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
}

export default Cards;
