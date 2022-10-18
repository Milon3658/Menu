import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faComment, faPaperPlane, faBookmark } from '@fortawesome/free-solid-svg-icons'
import './InstaItems.css'

const InstaItem = (props) => {
    return (
        <div className='instaItems-Card'>
            <img src={props.images} alt="" />
            <div className='icons'>
                <div className='icons1'>
                    <FontAwesomeIcon className='icon' icon={faHeart}></FontAwesomeIcon>
                    <FontAwesomeIcon className='icon' icon={faComment}></FontAwesomeIcon>
                    <FontAwesomeIcon className='icon' icon={faPaperPlane}></FontAwesomeIcon>

                </div>
                    <FontAwesomeIcon className='icon' icon={faBookmark}></FontAwesomeIcon>
            </div>
            <p>{props.likes}</p>
            <p>{props.title}</p>
            <small>{props.munits}</small>
        </div>
    );
};

export default InstaItem;