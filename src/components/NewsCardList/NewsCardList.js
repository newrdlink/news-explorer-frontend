import React from 'react';
import './NewsCardList.css';
import CardsBox from '../CardsBox/CardsBox';
import { useLocation } from 'react-router-dom';

const NewsCardList = ({
  loggedIn,
  savedCards,
  cardsList = [],
  cardsListSearchFull = [],
  isVisibleNews,
  onClickLoadCards,
  addCard,
  removeCard }) => {

  const location = useLocation();
  const { pathname: currentPath } = location

  const isAllCards = cardsList.length === cardsListSearchFull.length
  // console.log(cardsList)
  return (
    <>
      {isVisibleNews || currentPath === "/saved-news" ?
        <section className={`news ${currentPath === "/saved-news" && "news_place_saved"}`}>
          {currentPath === "/" ?
            <h3 className="news__title">Результаты поиска</h3> :
            null}
          <CardsBox
            loggedIn={loggedIn}
            cardsList={cardsList}
            savedCards={savedCards}
            addCard={addCard}
            removeCard={removeCard}
            currentPath={currentPath} />
          {currentPath === "/saved-news" ?
            null :
            isAllCards || <button type="button"
              className="news__button"
              onClick={onClickLoadCards}>Показать еще</button>}
        </section> :
        null}
    </>
  )
}

export default NewsCardList;
