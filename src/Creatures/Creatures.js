import React from 'react';
import './image-display.css';
import { Link } from 'react-router-dom'

const Creatures = ({ data, name}) => {
  const creatureImages = data.map(creature => {
    const { id, image, type } = creature;
    return ( <Link to={`/${type}/${id}`}> <img src={image} key={id} id={id} className="app-img"/> </Link>)
  });
  return (
    <>
      <h1>{name}!</h1>
      {creatureImages}
    </>
  )

}

export default Creatures;
