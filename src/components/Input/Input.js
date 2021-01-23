import React, { useState } from 'react';
import './Input.css';
import cn from 'classnames';

const Input = ({ input, onChangeHandler }) => {

  const [isValid, setIsValid] = useState(true);

  const isValidHandler = (evt) => setIsValid(evt.target.validity.valid);

  const onChange = (evt) => {
    onChangeHandler(evt);
    isValidHandler(evt);
  };

  const { type,
    id,
    name,
    placeholder,
    required,
    label,
    autocomplete,
    minlength,
    error,
    maxlength,
  } = input;



  return (
    <label className="input">
      {label}
      <input
        id={id}
        required={required}
        type={type}
        className="input__body"
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        autoComplete={autocomplete}
        minLength={minlength}
        maxLength={maxlength} />
      <span className={cn("input__error", { "input__error_visible": !isValid })}>{error}</span>
    </label>
  )
}

export default Input;
