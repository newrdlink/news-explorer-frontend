import React from 'react';
import mainImg from '../../images/backgroundMain-2.jpg'
import './Main.css';
import SearchForm from "../SearchForm/SearchForm";

const Main = ({ searchReq }) => {

  return (
    <main className="main">
      <img className="main__image" src={mainImg} alt="Главное изображение" />
      <div className="main__content">
        <h1 className="main__title" >Что творится в мире?</h1>
        <p className="main__subtitle">Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
        <SearchForm onSubmit={searchReq} />
      </div>
    </main>
  )
}

export default Main;
