import React, { useState, useEffect } from 'react';
import segnaposto from '../../img/segnaposto.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft, faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import './Cards.css';

const defaultImage = segnaposto;

function Cards({ activeGenre, showSeriesOnly }) {

    const [dataList, setDataList] = useState([]);
    const [startIndex, setStartIndex] = useState(0);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const urlRootAPI = "https://localhost:7278/api/";
                const endpoint = showSeriesOnly ? "serie" : "film";
                const API_URL = `${urlRootAPI}${endpoint}`;

                const response = await axios.get(API_URL);
                setDataList(response.data);
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

    return (
        <div className="cardContainer">
            <FontAwesomeIcon icon={faArrowAltCircleLeft} className={startIndex === 0 ? 'arrowIcon hidden' : 'arrowIcon'} onClick={handleLeftArrowClick} />
            {visibleData.map((item, index) => (
                <div key={index} className="card">
                    <img src={item.locandina || defaultImage} alt={item.titolo} />
                </div>
            ))}
            {visibleData.length > 7 && startIndex !== dataList.length - 8 && <FontAwesomeIcon icon={faArrowAltCircleRight} className='arrowIcon' onClick={handleRightArrowClick} />}
        </div>
    );
}

export default Cards;
