import React from 'react';
import eating from '../../images/tiffin.png'
import left from '../../images/left.png'
import right from '../../images/right.png'
import './Eat.css'
const Eat = () => {
    return (
        <div className='flexible-container'>
            <img src={eating} alt=""className='eat-img' />
            <div className='colonel'>
                <div>
                    <img src={left} alt="" />
                    <img src={right} alt="" />
                </div>
                <h1>
                    Colonel Saab <br /> Covent Garden
                </h1>
                <p>OFFERS AND EVENTS AT <br /> RESTAURANT COVENT GARDEN</p>
                <small>Discover the latest offers and events at Colonel Saab.</small>
                <button>What's on</button>
            </div>
        </div>
    );
};

export default Eat;