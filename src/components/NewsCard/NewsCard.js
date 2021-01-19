import React, { useState, useEffect } from 'react';
import './NewsCard.css';
import { dateStr } from '../../utils/transformDate';
import cn from 'classnames';
import Basket from '../icons/Basket/Basket';
import Mark from '../icons/Mark/Mark'
import { UserContext } from '../../contexts/UserContext';

const NewsCard = ({ card, currentPath }) => {

  const [isOverMark, setIsOverMark] = useState(false)
  const [isMarked, setIsMarked] = useState(false)

  const currentUser = React.useContext(UserContext);

  const {
    url: urlToSourceNews,
    urlToImage,
    publishedAt: date,
    title,
    owner,
    content,
    source: { name: sourceName }
  } = card;

  const currentDayPub = dateStr(date);

  useEffect(() => {
    const handleOwner = () => currentUser.name === owner ? setIsMarked(true) : null
    handleOwner()
  }, [owner, currentUser.name])

  return (
    <li className='card'>
      <a className="card__link"
        target="_blank"
        rel="noreferrer"
        href={urlToSourceNews} >
        <img className="card__image"
          alt={`Фотография для ${title}`}
          src={urlToImage} />
      </a>
      <div className={cn("card__message-box card__message-box_type_theme", { "visible": currentUser.loggedIn })}>
        <span className="card__message">Природа</span>
      </div>
      <div className={cn("card__message-box card__message-box_type_user", { "visible": isOverMark })}>
        <span className="card__message">{currentUser.loggedIn ? "Убрать из сохранённых" : "Войдите, чтобы сохранять статьи"}</span>
      </div>
      <button type="button"
        className={cn("card__mark",
          // { "card__mark_type_marked": author === 'alexmark' },
          // { "card__mark_type_unmarked": isMarked }
        )}
        onMouseEnter={() => setIsOverMark(true)}
        onMouseLeave={() => setIsOverMark(false)}>
        {currentPath === '/saved-news' ?
          <Basket isOver={isOverMark} /> :
          <Mark isOver={isOverMark} isMarked={isMarked} />}
      </button>
      <div className="card__content">
        <p className="card__date">{currentDayPub}</p>
        <h3 className="card__title">{title}</h3>
        <p className="card__text">{content}</p>
        <a href="ya.ru" className="card__src">{sourceName}</a>
      </div>
    </li>
  )
}

export default NewsCard;