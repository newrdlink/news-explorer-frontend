import React from 'react';
import './CardsBox.css';
import NewsCard from '../NewsCard/NewsCard';

const CardsBox = ({ cardsList = [], currentPath, addCardToFav }) => {
  console.log(cardsList)
  return (
    <ul className="cards">
      {cardsList.map((card) => <NewsCard
        key={card._id || card.id}
        card={card}
        addCardToFav={addCardToFav}
        currentPath={currentPath} />)}
    </ul>
  )
}
export default CardsBox;
