import React from 'react';
import InstaItem from '../InstaItem/InstaItem';
import item1 from '../../images/item1.png'
import item2 from '../../images/item2.png'
import './Insta.css'

const Insta = () => {
    return (
        <div className='insta-Items'>
            <InstaItem images={item1} likes="130 likes" title="drowzen_design" munits='10 munits ago'></InstaItem>
            <InstaItem images={item2} likes="130 likes" title="drowzen_design" munits='10 munits ago'></InstaItem>
            <InstaItem images={item1} likes="130 likes" title="drowzen_design" munits='10 munits ago'></InstaItem>
            <InstaItem images={item2} likes="130 likes" title="drowzen_design" munits='10 munits ago'></InstaItem>
            <InstaItem images={item1} likes="130 likes" title="drowzen_design" munits='10 munits ago'></InstaItem>
            <InstaItem images={item2} likes="130 likes" title="drowzen_design" munits='10 munits ago'></InstaItem>
        </div>
    );
};

export default Insta;