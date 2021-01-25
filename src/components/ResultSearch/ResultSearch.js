import React from 'react';
import './ResultSearch.css'
import NewsCardList from '../NewsCardList/NewsCardList';
import NotFound from '../NotFound/NotFound';
// import PreloaderNews from '../PreloaderNews/PreloaderNews';
// import PreloaderNews from '../PreloaderNews/PreloaderNews';

const ResultSearch = ({
  isAreResult,
  addCardToFav,
  cardsList,
  onClickLoadCards,
  isVisibleNews,
  isServerError,
  cardsListSearchFull }) => {
  console.log(1)
  return (isAreResult ?
    <NewsCardList
      addCardToFav={addCardToFav}
      cardsList={cardsList}
      cardsListSearchFull={cardsListSearchFull}
      onClickLoadCards={onClickLoadCards}
      isVisibleNews={isVisibleNews} /> :
    <NotFound isVisibleNews={isAreResult}
      isServerError={isServerError} />
  )
}

export default ResultSearch;
