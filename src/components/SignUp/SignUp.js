import React, { useState } from 'react';
import './SignUp.css';
import PopupWithForm from '../PopupWithForm/PopupWithForm';
import Input from '../Input/Input';
import { inputs } from '../../config/inputsSignUp';
import { isValidForms } from '../../utils/isValidForm';

const SignUp = ({ name,
  buttonName,
  isOpen,
  onClose,
  onSubmit,
  changePopup,
  isRegOk,
  clearErr,
  isRequesting }) => {

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
      name={name}
      buttonName={buttonName}
      isOpen={isOpen}
      onClose={onClose}
      onSubmit={onSubmitHandler}
      isValidForms={isValidForms(isFormInputsValid, inputs)}
      changePopup={changePopup}
      isRequesting={isRequesting}
    >
      {inputs.map((input) =>
        <Input input={input} key={input.id} onChangeHandler={onChangeHandler} />
      )}
      {isRegOk ? <span className="form__signup-error">{isRegOk}</span> : null
      }
    </PopupWithForm>
  )
}

export default SignUp;
