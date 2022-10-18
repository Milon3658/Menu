import React from 'react';
import story from '../../images/story.png'
import './Story.css'
import logo from '../../images/logo (2).png'


const Story = () => {
    return (
        <div className='flexible-container'>
            <img src={story} alt="" />
            <div className='story-info'>
                <img src={logo} alt="" />
                <h2>Our Story</h2>
                <p>
                    Located at the former Holborn Town Hall in the
                    heart of central London, Colonel Saab is a modern Indian restaurant from Roop Partap Choudhary,
                    offering a smart all-day dining experience. The
                    restaurant is inspired by the travel tales of an Army officer with his wife across India.
                        <br /><br />
                    With old-style Jazz music, museum worthy
                    artworks and a modern twist on the flavours and
                    textures of India, Colonel Saab is a contemporary
                    viewpoint with an old soul, and a nostalgic palate
                    of memories aromas and flavours.
                </p>
                <img src={logo} alt="" className='rotate'/>
            </div>
        </div>
    );
};

export default Story;