import React from 'react';
import './card.style.css'

const Card = (props) => {
    return (
    <div className="card-container">
        <img alt="monster" src={`https://robohash.org/${props.monster.id}?size=180x180`}></img>
        <h2> {props.monster.name} </h2>
        <p> {props.monster.email}</p>
    </div>)
}

export default Card;