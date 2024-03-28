import React from 'react';
import './Header.css';

function Header(){
    return (
        <div className='headerClass'>
            <h1>PEAKY BLINDERS</h1>
            <p>Peaky Blinders è una serie televisiva britannica, creata da Steven Knight e ambientata a Birmingham tra il 1919 
                e il 1934.</p>
            <input type='button' value="Vai alla serie" />
        </div>
      );
}

export default Header;