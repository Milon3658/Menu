import React from 'react';
import './Dine.css'
import left from '../../images/left.png'
import right from '../../images/right.png'

const Dine = (props) => {
    return (
        <div className='flexible-container' style={props.style}>
            <div className='dine-info'>
                <div className='two-ele-img'>
                    <img src={left} alt="" className='lr-img' />
                    <img src={right} alt="" className='lr-img' />
                </div>
                <h2>{props.title}</h2>
                <p>{props.sub}</p>
                <button>{props.Btn}</button>
            </div>
            <div>
                <img src={props.images} alt="" />
            </div>
        </div>
    );
};

export default Dine;