import React from 'react';
import './NotFoundError.css'
import SadSmile from '../icons/SadSmile/SadSmile';

const NotFoundError = ({ isServerError }) => {

  // console.log(isServerError)
  return (
    <section className="not-found">
      <SadSmile />
      <h3 className="not-found__title">{isServerError ?
        " Во время запроса произошла ошибка" :
        "Ничего не найдено"}</h3>
      <p className="not-found__subtitle">{isServerError ?
        "Возможно, проблема с соединением или сервер недоступен." :
        "Подождите немного и попробуйте ещё раз. К сожалению по вашему запросу ничего не найдено."}</p>
    </section>
  )
}

export default NotFoundError;
