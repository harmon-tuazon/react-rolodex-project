import React from 'react';
import './card.styles.css'

const Card = ({user}) => {

  const {name, email, id} = user;
  return (
    <div className='card-container'>
        <img 
            alt='user' 
            src={`https://robohash.org/${id}?set=set5&size=150x150`}
        />
        <h1>{name}</h1>
        <p>{email}</p>
    </div>
  );
}

export default Card;