import React from "react";
import grid from '../assets/photo-grid.png'


function Hero(){
    return(
        <section className="hero">
            <img src={grid} className="hero__img"></img>
            <div className="hero__content">
            <h1 className="hero__title">Online Experiences</h1>
            <p className="hero__text">Join unique interactive activities led by 
            one-of-a-kind hosts—all without leaving home.</p>
            </div>
        </section>
    )
}

export default Hero