import React from 'react';
import SadSmile from '../icons/SadSmile/SadSmile';
import './NotFound.css'

const NotFound = ({ isVisibleNews }) => {
  return (
    isVisibleNews ? 
    <section className="not-found">
      <SadSmile />
      <h3 className="not-found__title">Ничего не найдено</h3>
      <p className="not-found__subtitle">К сожалению по вашему запросу ничего не найдено.</p>
    </section> : null
  )
}

export default NotFound;
