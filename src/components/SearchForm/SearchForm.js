import React from 'react';
import './SearchForm.css';

const SearchForm = ({ onSubmit }) => {

  return (
    <form className="search-form" onSubmit={onSubmit}>
      <input
        className="search-form__field"
        placeholder="Введите тему новости" />
      <button type="submit" className="search-form__button" >Искать</button>
    </form>
  )
}

export default SearchForm;
