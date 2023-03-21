import React from "react";
import star from '../assets/star.png'



function Cards(props){
    return(
        <article className="card">
            <img className="card__img" src={props.img}></img>
            <div className="card__stats">
                <img src={star} className="card__star" alt="katie-zaferes photo"/>
                <span className="card__rating">{props.rating}</span>
                <span className="gray">({props.reviewCount}) • </span>
                <span className="gray">{props.location}</span>
            </div>
            <p className="card__text">{props.title}</p>
            <p className="card__text"><span className="bold">From ${props.price}</span> / person</p>
        </article>
    )
}

export default Cards