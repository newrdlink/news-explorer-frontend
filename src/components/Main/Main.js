import React from 'react';
import mainImg from '../../images/backgroundMain-2.jpg'
import mobileImg from '../../images/backgroundMobile.jpg'
import './Main.css';
import SearchForm from "../SearchForm/SearchForm";
import useWindowSize from '../../helpers/windowsWidth';

const Main = ({ searchReq }) => {

  return (
    <main className="main">
      <img className="main__image" src={useWindowSize() < 650 ? mobileImg : mainImg} alt="Главное изображение" />
      <div className="main__content">
        <h1 className={`main__title ${useWindowSize() < 650 && "main__title_place_mobile"}`} >Что творится в мире?</h1>
        <p className={`main__subtitle ${useWindowSize() < 650 && "main__subtitle_place_mobile"}`}>
          Находите самые свежие статьи на любую тему и сохраняйте в своём личном кабинете.</p>
        <SearchForm onSubmit={searchReq} />
      </div>
    </main>
  )
}

export default Main;
