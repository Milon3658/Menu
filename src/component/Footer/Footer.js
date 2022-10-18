import React from 'react';
import twoele from '../../images/ele-logo.png'
import './Footer.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {  } from '@fortawesome/free-solid-svg-icons'


const Footer = () => {
    return (
        <div>
            <div className='footer'>
                <div>
                    <p className='left-p'>
                        LOCATION <br />
                        Colonel Saab <br />
                        Holborn Town Hall, <br />
                        193-197 High Holborn, <br />
                        London, WC1V 7BD <br />
                    </p>
                </div>
                <div className='middle'>
                    <h2>The journey continues with</h2>
                    <img src={twoele} alt="" />
                </div>
                <div>
                    <p className='right-p'>
                        HOURS <br />
                        Monday to Saturday <br />
                        Bar: 12noon —12:30am <br />
                        Lunch: 12noon — 3pm <br />
                        Dinner: 6pm — 10.30pm <br />
                    </p>
                </div>
            </div>
            <div className='footer2'>
                <p>
                    CONTACT <br />
                    02080166800 <br />
                    reservations@colonelsaab.co.uk <br />
                </p>
                <p>SUBSCRIBE</p>
                <p>RESERBATION POLICY</p>
                <p>PRESS</p>
                <p>BLOG</p>
                <div>
                        <FontAwesomeIcon></FontAwesomeIcon>
                </div>

            </div>
        </div>
    );
};

export default Footer;