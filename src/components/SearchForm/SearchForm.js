import React, { useState } from 'react';
import './SearchForm.css';

const SearchForm = ({ onSubmit, isRequesting, isServerError }) => {

  const [isReq, setIsReq] = useState(false)
  const [isSubmit, setIsSubmit] = useState(false)

  const onSubmitHandler = (evt) => {
    evt.preventDefault()
    if (isReq) {
      setIsSubmit(false)
      return onSubmit(isReq)
    }
    setIsSubmit(true)
  }

  const inputHandler = (evt) => setIsReq(evt.target.value)

  return (
    <form className="search-form"
      onSubmit={onSubmitHandler}
      onChange={inputHandler}
      noValidate>
      {isSubmit || isServerError ?
        <span className="search-form__error" >
          {isServerError ?
            "Сожалеем, ошибка сервера ((" :
            "Нужно ввести ключевое слово"}
        </span> :
        null}
      <input
        className="search-form__field"
        required
        placeholder="Введите тему новости" />
      <button type="submit"
        className="search-form__button"
        disabled={isRequesting}
      >Искать</button>
    </form>
  )
}

export default SearchForm;
