import React from 'react';
import { withState, withHandlers, compose } from 'recompose';
import './dog_card.css';


const Card = ({opened, handleClick, name, picture, description}) => {
  return (
    <div className={opened ? "card open" : "card closed"}>
      <div className="header" onClick={ handleClick }>{name}</div>
      <div className="body">
        <img src={picture} alt={name} />
        <p>{description}</p>
      </div>
    </div>
  );
}

const enhance = compose(
  withState('opened', 'setCardOpen', false),
  withHandlers({
    handleClick: props => event => {
      props.setCardOpen(!props.opened)
    }
  })
)

export default enhance(Card);