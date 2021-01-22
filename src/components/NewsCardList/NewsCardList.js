import React from 'react';
import './NewsCardList.css';
import CardsBox from '../CardsBox/CardsBox';
import { useLocation } from 'react-router-dom';

const NewsCardList = ({ cardsList, isVisibleNews, onClickLoadCards }) => {

  const location = useLocation();
  const { pathname: currentPath } = location

  return (
    isVisibleNews || currentPath === "/saved-news" ?
      <section className={`news ${currentPath === "/saved-news" && "news_place_saved"}`}>
        {currentPath === "/" ?
          <h3 className="news__title">Результаты поиска</h3> :
          null}
        <CardsBox cardsList={cardsList} currentPath={currentPath} />
        {currentPath === "/saved-news" ?
          null :
          <button type="button"
            className="news__button"
            onClick={onClickLoadCards}>Показать еще</button>}
      </section> :
      null
  )
}

export default NewsCardList;
