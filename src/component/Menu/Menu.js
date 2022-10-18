import React from 'react';
import balckEle from '../../images/black-ele.png'
import divider from '../../images/divider.png'
import wine from '../../images/wine.png'
import borderImage from '../../images/frame.png'
import './Menu.css'

const Menu = () => {
    var borderStyle = {
        backgroundImage: `url(${borderImage})`,
        width: "440px",
        height: "800px",
        backgroundRepeat: "no-repeat",
    }
    return (
        <div className='flexible-container'>
            <div style={borderStyle}>
                <div className='menus' >
                    <img src={balckEle} alt="" className='menu-img'/>
                    <h2>MENUS</h2>
                    <img src={divider} alt="" className='divider-img'/>
                    <p>A LA CARTE</p>
                    <p>TESTING MENU</p>
                    <p>LUNCH TIFFIN</p>
                    <p>AFTERNOON MENUS</p>
                    <p>DRINKS</p>
                    <button>SEE MORE</button>
                </div>
            </div>
            <div style={borderStyle}>
                <div className='menus'>
                <img src={wine} alt="" className='menu-img'/>
                <p>MEMSAAB'S TASTING MENU</p>
                <img src={divider} alt="" className='divider-img'/>
                <small>Experience a culinary journey with <br /> Chef Sohan Bhandari,a curation of <br /> his culinary heritage and signature <br /> dishes.An ode to Indian </small>
                <button>SEE MORE</button>
                </div>
            </div>

        </div>
    );
};

export default Menu;