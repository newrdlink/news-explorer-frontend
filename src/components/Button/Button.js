import React from 'react';
import './Button.css';

const Button = ({ userName, buttonName, place, currentPath, onClick, isLocked, type }) => {

  const isUserPage = () => currentPath === "/saved-news"

  return (
    <button
      disabled={isLocked}
      type={type}
      className={`button button_place_${place} 
                  ${isUserPage() && "button_place_header-dark"} 
                  ${isLocked && "button_place_auth-lock"}`}
      onClick={onClick}
    >
      {(buttonName || userName) || "Авторизоваться"}
      { userName ?
        <svg className="button__icon">
          <path d="M6 2L2 2L2 14H6V16H2C0.89543 
                16 0 15.1046 0 14V2C0 0.89543 0.895432 0 2 
                0H6V2ZM13.5856 9.00002L9.29274 13.1339L10.707 
                14.4958L17.4141 8.03706L10.707 1.57837L9.29274 
                2.9402L13.5856 7.0741H4V9.00002H13.5856Z"
            fill={isUserPage() ? "dark" : "white"} />
        </svg> :
        null}
    </button>)
}

export default Button;





