import React from 'react';
import Dine from '../Dine/Dine';
import Eat from '../Eat/Eat';
import Menu from '../Menu/Menu';
import Story from '../Story/Story';
import dine from '../../images/dine.png'
import dine2 from '../../images/indian.png'
import WhatsOn from '../WhatsOn/WhatsOn';

const Main = () => {
   
    const sub1 = 'Colonel Saab is situated in the Grade II listed Holborn Town Hall building, which first opened as a public library in 1894. Today, apart from a few original features the new exotic design and decor of the restaurant compliments the old building with warm colours, brass and wood features and a stunning collection of chandeliers which have been handcrafted and shipped over from India.In addition to the restaurant and bar, we have two tastefully designed private dining rooms which accommodate up to 60 people standing or 30 for a seated dinner, creating the ideal setting for any corporate dining or celebratory event.'
    return (
        <div>
            <Story></Story>
            <Eat></Eat>
            <Menu></Menu>
            <Dine title='Private Dining Rooms Covent Garden' sub={sub1} Btn='MAKE A BOOKING' images={dine}></Dine>
            <Dine style={{flexDirection: 'row-reverse'}}  title='Indian Accents At Colonel Saab Restaurant Covent Garden' sub={sub1} Btn='SUBSCRIBE' images={dine2}></Dine>
            <WhatsOn></WhatsOn>
        </div>
    );
};
export default Main;