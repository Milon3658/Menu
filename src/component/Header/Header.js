import React from 'react';
import logo from '../../images/logo (2).png'
import './Header.css'

const Header = () => {
    return (
        <nav>
            <div className='logo'>
                <img src={logo} alt="" />
                <h2>MENU</h2>
            </div>
            <div className='resurve'>Reserve your table</div>
        </nav>
    );
};

export default Header;