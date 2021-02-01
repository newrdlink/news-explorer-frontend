import React, { useState, useEffect } from 'react';
import './NewsCard.css';
import { dateStr } from '../../utils/transformDate';
import cn from 'classnames';
import Basket from '../icons/Basket/Basket';
import Mark from '../icons/Mark/Mark'
import MarkMessage from '../MarkMessage/MarkMessage';

const NewsCard = ({ card, currentPath, addCard, loggedIn, removeCard, savedCards = [] }) => {

  const [isOverMark, setIsOverMark] = useState(false)
  const [isMarked, setIsMarked] = useState(false)

  const {
    publishedAt,
    url,
    link,
    keyword,
    image,
    urlToImage,
    source,
    _id,
    date,
    text,
    title,
    description,
    source: { name: sourceName }
  } = card;

  const currentDayPub = dateStr(date || publishedAt);

  useEffect(() => {
    if (savedCards.some((item) => (item.url || item.link) === card.url)) {
      setIsMarked(true)
    } else {
      setIsMarked(false)
    }
  }, [card.url, savedCards])

  const isSaved = () => savedCards.some((item) => item.link === card.url)

  return (
    <li className='card'>
      <a className="card__link"
        target="_blank"
        rel="noreferrer"
        href={url || link} >
        <img className="card__image"
          alt={`Фотография для ${title}`}
          src={image || urlToImage} />
      </a>
      <div className={cn("card__message-box card__message-box_type_theme",
        { "visible": loggedIn && currentPath === "/saved-news" })}>
        <span className="card__message">{keyword}</span>
      </div>
      <div className={cn("card__message-box card__message-box_type_user",
        { "visible": isOverMark })}>
        {loggedIn ?
          <MarkMessage message={(isMarked || currentPath === "/saved-news") ?
            "Убрать из сохранённых" : "Добавить"} /> :
          <MarkMessage message="Войдите, чтобы сохранять статьи" />}
      </div>
      <button type="button"
        className={cn("card__mark",
          { "card__mark_type_marked": isMarked && loggedIn },
        )}
        onClick={() => isMarked || currentPath === "/saved-news" ?
          removeCard(_id || url) :
          addCard(_id || url)}
        onMouseEnter={() => setIsOverMark(true)}
        onMouseLeave={() => setIsOverMark(false)}>
        {currentPath === '/saved-news' ?
          <Basket isOver={isOverMark} /> :
          <Mark
            isOver={isOverMark && loggedIn}
            isMarked={isSaved() || isMarked}
            loggedIn={loggedIn} />}
      </button>
      <div className="card__content">
        <p className="card__date">{currentDayPub}</p>
        <h3 className="card__title">{title}</h3>
        <p className="card__text">{description || text}</p>
        <a href="ya.ru" className="card__src">{sourceName || source}</a>
      </div>
    </li>
  )
}

export default NewsCard;
