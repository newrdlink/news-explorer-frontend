import React from 'react';
import './ResultSearch.css'
import NewsCardList from '../NewsCardList/NewsCardList';
import NotFound from '../NotFound/NotFound';
// import PreloaderNews from '../PreloaderNews/PreloaderNews';
// import PreloaderNews from '../PreloaderNews/PreloaderNews';

const ResultSearch = ({
  savedCards,
  loggedIn,
  isAreResult,
  addCard,
  removeCard,
  cardsList,
  onClickLoadCards,
  isVisibleNews,
  isServerError,
  cardsListSearchFull,
  handlerSignInOnCardClick }) => {
  // console.log(isAreResult)

  return (isAreResult ?
    <NewsCardList
      handlerSignInOnCardClick={handlerSignInOnCardClick}
      loggedIn={loggedIn}
      addCard={addCard}
      removeCard={removeCard}
      cardsList={cardsList}
      savedCards={savedCards}
      cardsListSearchFull={cardsListSearchFull}
      onClickLoadCards={onClickLoadCards}
      isVisibleNews={isVisibleNews} /> :
    <NotFound isVisibleNews={isAreResult}
      isServerError={isServerError} />
  )
}

export default ResultSearch;
