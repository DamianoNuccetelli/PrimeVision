import React from 'react';
import './Main.css';
import segnaposto from '../../img/segnaposto.png';
import './Cards.css';

const defaultImage = segnaposto;

const listFilm = [
    { name: "Mechanic: Resurrection", imgURL: "https://tamilyogi.red/wp-content/uploads/2017/01/Mechanic-2-Resurrection-2016-Tamil-Dubbed-Movie-HD-720p-Watch-Online.jpg" },
    { name: "Hobbs & Show", imgURL: "https://wallpapercave.com/wp/wp9832957.jpg" },
    { name: "Fury", imgURL: "https://www.hdwallpapers.in/thumbs/2014/fury_movie-t2.jpg" },
    { name: "t-34", imgURL: "https://apollomedia.pro/wp-content/uploads/2022/03/t_34.jpg" },
    { name: "King Arthur", imgURL: "https://images8.alphacoders.com/831/831110.jpg" },
    { name: "Robin Hood", imgURL: "https://www.pixel4k.com/wp-content/uploads/2018/10/robin-hood-movie-taron-egerton_1539368658.jpg" },
    { name: "Aquaman", imgURL: "https://uhdwallpapers.org/uploads/cache/4188754065/aquaman_600x338-mm-90.jpg" },
    { name: "The social Network", imgURL: "https://wallpapercave.com/wp/wp5959638.jpg" },
    { name: "Lamborghini", imgURL: "https://wallpapercave.com/wp/wp13104000.jpg" },
    { name: "The wolf of wall street", imgURL: "https://w.forfun.com/fetch/74/74ee0b6a3a0caf42aeef149f528e4814.jpeg" },
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