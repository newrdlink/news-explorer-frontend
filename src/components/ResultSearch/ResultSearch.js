import React from 'react';
import './ResultSearch.css'
import NewsCardList from '../NewsCardList/NewsCardList';
import NotFound from '../NotFound/NotFound';
// import PreloaderNews from '../PreloaderNews/PreloaderNews';
// import PreloaderNews from '../PreloaderNews/PreloaderNews';

const ResultSearch = ({ isAreResult, cardsList, onClickLoadCards, isVisibleNews }) => {

  return (isAreResult ?
    <NewsCardList
      cardsList={cardsList}
      onClickLoadCards={onClickLoadCards}
      isVisibleNews={isVisibleNews} /> :

    <NotFound isVisibleNews={isAreResult} />
  )
}

export default ResultSearch;
