import React, { useEffect } from 'react';
import './PopupWithForm.css';
import cn from 'classnames';
// import { useRouteMatch } from 'react-router-dom'
// import { UserContext } from "../../contexts/UserContext";
import { closeEscPopup } from "../../helpers/closeEscPopup";
import Button from '../Button/Button';

const PopupWithForm = ({ children,
  name,
  buttonName,
  onSubmit,
  isOpen,
  onClose,
  isValidForms,
  changePopup,
  isRequesting }) => {

  useEffect(() => {
    if (isOpen) { closeEscPopup(onClose) }
  }, [isOpen, onClose])

  return (
    <section className={`popup ${isOpen && "popup_opened"}`}
      onClick={(evt) => evt.target === evt.currentTarget && onClose()}
    >
      <div className="popup__container">
        <button type="button"
          className="popup__close"
          onClick={onClose} />
        <h3 className="popup__title">{name}</h3>
        <form className="form" onSubmit={onSubmit} noValidate>
          {children}
          {buttonName ?
            <Button
              buttonName={buttonName}
              place="auth"
              isLocked={isRequesting || !isValidForms}
              type="submit"
            /> :
            null}
          {buttonName || name === "Пользователь успешно зарегистрирован!" ?
            <span className={cn("form__span",
              { "form__span_logg": !buttonName })}>
              {buttonName ? "или" : ""}
              <span className="form__link"
                onClick={changePopup}>
                {name === "Вход" ?
                  " Зарегистрироваться" :
                  " Ввойти"}
              </span>
            </span> :
            null}
        </form>
      </div>
    </section>
  )
}

export default PopupWithForm;
