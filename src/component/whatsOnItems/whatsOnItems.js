import React from 'react';
import './whatsOnItems.css'
const WhatsOnItems = ({images, title, p1, p2, dis, btninfo}) => {
    return (
        <div className='card'>
            <img src={images} alt=""/>
            <h2>{title}</h2>
            <div className='div-p'>
                <p>{p1}</p>
                <p>{p2}</p>
            </div>
            <p className='dis'>{dis}</p>
            <button className='read-more'>{btninfo}</button>
        </div>
    );
};

export default WhatsOnItems;