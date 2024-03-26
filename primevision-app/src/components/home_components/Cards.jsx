import React from 'react';
import './Main.css';
import segnaposto from '../../img/segnaposto.png';


const defaultImage = segnaposto;

const listFilm = [
    { name: "Film1", imgURL: defaultImage },
    { name: "Film2", imgURL: defaultImage },
    { name: "Film3", imgURL: defaultImage },
    { name: "Film4", imgURL: defaultImage },
    { name: "Film4", imgURL: defaultImage },
    { name: "Film4", imgURL: defaultImage },
    { name: "Film4", imgURL: defaultImage },
    { name: "Film4", imgURL: defaultImage }
];

function Cards() {  
    return (
        <div className="cardContainer"> {/* Applica la classe cardContainer al wrapper delle carte */}
            {listFilm.map((t, index) => (  
                <div key={index} className="card"> {/* Applica la classe card a ciascuna carta */}
                    <img src={t.imgURL} alt={t.name} />
                </div>
            ))}
        </div>
    );
}

export default Cards;