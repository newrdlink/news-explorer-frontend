import React from 'react';
import './RegIsOk.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';

const RegIsOk = ({ name, isOpen, onClose, changePopup }) => {
  //const { currentUser: { loggedIn: regIsOk } } = props
  //console.log(props)
  //console.log(regIsOk)

  return (
    <PopupWithForm
      name={name}
      isOpen={isOpen}
      onClose={onClose}
      changePopup={changePopup} />
  )
}

export default RegIsOk;
