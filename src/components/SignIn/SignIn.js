import React, { useState } from 'react';
import './SignIn.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import Input from '../Input/Input';
import { inputs } from '../../config/inputsSignIn';
import { isValidForms } from '../../utils/isValidForm';

const SignIn = ({ name, buttonName, isOpen, onClose, onSubmit, type, changePopup, isSignInOk, clearErr }) => {

  const [formData, setFormData] = useState({});
  const [isFormInputsValid, setIsFormInputsValid] = useState({})

  const onSubmitHandler = (evt) => {
    evt.preventDefault();
    onSubmit(formData);
  }

  const onChangeHandler = (evt) => {
    const { target: { name, value } } = evt;
    setFormData({ ...formData, [name]: value })
    setIsFormInputsValid({ ...isFormInputsValid, [name]: evt.target.validity.valid })
    clearErr()
  }

  return (
    <PopupWithForm
      type={type}
      name={name}
      buttonName={buttonName}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={onSubmitHandler}
      isValidForms={isValidForms(isFormInputsValid, inputs)}
      changePopup={changePopup}
    >
      {inputs.map((input) =>
        <Input input={input} key={input.id} onChangeHandler={onChangeHandler} />
      )}
      {isSignInOk ?
        <span className="form__signup-error">{isSignInOk}</span> : null}
    </PopupWithForm>
  )
}

export default SignIn;