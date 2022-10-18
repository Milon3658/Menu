import React from 'react';
import './Brands.css'
import brand1 from '../../images/brand1.png'
import brand2 from '../../images/brand2.png'
import brand3 from '../../images/brand3.png'
import brand4 from '../../images/brand4.png'

const Brands = () => {
    return (
        <div className='brands'>
            <h1>Our Brands</h1>
            <div className='all-brands'>
                <img src={brand1} alt="" />
                <img src={brand2} alt="" />
                <img src={brand3} alt="" />
                <img src={brand4} alt="" />
            </div>
        </div>
    );
};

export default Brands;