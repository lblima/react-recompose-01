import React from 'react';
import { withState, withHandlers, compose } from 'recompose';
import './dog_card.css';


const Card = ({name, picture, description}) => {
  return (
    <div className="card open">
      <div className="header">{name}</div>
      <div className="body">
        <img src={picture} alt={name} />
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Card;