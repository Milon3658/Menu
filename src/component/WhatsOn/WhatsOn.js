import React from 'react';
import career from '../../images/career.png'
import WhatsOnItems from '../whatsOnItems/whatsOnItems';
import './WhatsOn.css'
import ltem1 from '../../images/item1.png'
import ltem2 from '../../images/item2.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleArrowLeft, faCircleArrowRight } from '@fortawesome/free-solid-svg-icons'


const WhatsOn = () => {
    const dis1 = 'CHRISTMAS AT COLONEL SAAB LUNCH, DINNER AND STANDING RECEPTIONS Colonel Saab will play '
    return (
        <div className='flexible-container'>
            <img src={career} alt="" />
            <div className='whatsOn-info'>
                <h1>WHAT'S ON</h1>
                <p className='whatsOn-P'>CHECKOUT THE LATEST EVENTS AT COLONEL SAAB</p>
                <div className='items'>
                    <FontAwesomeIcon className='arrow' icon={faCircleArrowLeft}></FontAwesomeIcon>
                    <WhatsOnItems
                        title='Christmas Events At ' p1='DECORATION' p2='HEALTHY FOOD' dis={dis1} btninfo='READ MORE' images={ltem1}>
                    </WhatsOnItems>
                    <WhatsOnItems
                        title='Kebab Festival ' p1='COMPANY NEWS' p2='LIFESTYLE' dis={dis1} btninfo='READ MORE' images={ltem2}>
                    </WhatsOnItems>
                    <FontAwesomeIcon className='arrow' icon={faCircleArrowRight}></FontAwesomeIcon>

                </div>
            </div>
        </div>
    );
};

export default WhatsOn;