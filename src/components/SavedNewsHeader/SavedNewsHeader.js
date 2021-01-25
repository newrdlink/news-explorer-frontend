import React from 'react';
import { UserContext } from '../../contexts/UserContext';
import './SavedNewsHeader.css'

const SavedNewsHeader = ({ cardsList = [] }) => {

  const user = React.useContext(UserContext);
  // console.log(cardsList)
  return (
    <section className="saved">
      <p className="saved__subtitle">Сохраненние статьи</p>
      <h3 className="saved__title">
        {user.name}, у вас {cardsList.length} сохраненных статей
      </h3>
      <p className="saved__info">По ключевым словам:
        <span className="saved__words"> Природа</span>
      </p>
    </section>
  )
}
export default SavedNewsHeader;
