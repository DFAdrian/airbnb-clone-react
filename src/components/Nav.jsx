import React from "react";
import logo from '../assets/airbnb-logo.png'


function Nav(){
    return(
        <nav className="nav">
            <img src={logo} className='nav__logo' alt='Logo airbnb'></img>
        </nav>
    )
}

export default Nav