import React from 'react';
import Header from '../Header/Header';
import elephant from '../../images/elephant.png'
import './Head.css'
import BackgroundImage from '../../images/header-back.png'
import logo2 from '../../images/logo-2.png'
import elelogo from '../../images/ele-logo.png'


const Head = () => {
    var headStyle = {
        width: "100%",
        height: "800px",
        backgroundImage: `url(${BackgroundImage})`
      };
    return (
        <div style={headStyle} className="head">
            <Header></Header>
            <img src={elephant} alt="" className='ele-img'/>
            <div className='saab'>
                <img src={logo2} alt="" className='saab-img'/>
                <img src={elelogo} alt=""className='saab-img-two-ele' />
                <img src={logo2} alt=""className='saab-img' />
            </div>
        </div>
    );
};

export default Head;