import React from 'react';
import './CardsBox.css';
import NewsCard from '../NewsCard/NewsCard';

const CardsBox = ({ cardsList = [], currentPath }) => {

  return (
    <ul className="cards">
      {cardsList.map((card) => <NewsCard key={card.id} card={card} currentPath={currentPath} />)}
    </ul>
  )
}
export default CardsBox;
