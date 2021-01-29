import React from 'react';
import './CardsBox.css';
import NewsCard from '../NewsCard/NewsCard';

const CardsBox = ({ cardsList = [], currentPath, addCard, removeCard, loggedIn, savedCards }) => {
  // console.log(cardsList)
  return (
    <ul className="cards">
      {cardsList.map((card) => <NewsCard
        savedCards={savedCards}
        loggedIn={loggedIn}
        // key={card.url}
        key={card._id || card.url}
        card={card}
        addCard={addCard}
        removeCard={removeCard}
        currentPath={currentPath} />)}
    </ul>
  )
}
export default CardsBox;
