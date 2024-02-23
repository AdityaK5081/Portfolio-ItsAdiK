import React from 'react'
import '../Header/Header.scss'
import ExxonLogo from '../Assets/ExxonMobil-logo.png';

const Header = () => {
    return (
        <div id='header-parent' className='neumorphic'>
            <div id="header-left-part">
                Aditya Kanikdaley
            </div>

            <div id="header-right-part">
               <img src={ExxonLogo} />
            </div>
        </div>
    )
}

export default Header