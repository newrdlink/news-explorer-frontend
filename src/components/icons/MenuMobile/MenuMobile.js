import React, { useState } from 'react';
import './MenuMobile.css';
import OpenMenuMobile from '../OpenMenuMobile/OpenMenuMobile';
import CloseMenuMobile from '../CloseMenuMobile/CloseMenuMobile';
import Navigation from '../../Navigation/Navigation';
import Button from '../../Button/Button';
import menuItems from '../../../config/menuItems';

const MenuMobile = ({ currentUser, currentPath, place, onAuth, logOut, loggedIn }) => {

  const [isActive, setIsActive] = useState(false);
  const [isActiveContent, setIsActiveContent] = useState(false);

  const onClick = () => {
    setIsActive(true)
    setTimeout(() => setIsActiveContent(true), 400)
  }

  const closeOnClick = () => {
    setIsActive(false)
    setIsActiveContent(false)
  }

  return (
    <>
      <div className={`menu__mobile-content ${isActive && "menu__mobile-content_active"}`}>
        {isActiveContent ?
          <Navigation
            loggedIn={loggedIn}
            place={place}
            menuItems={menuItems}
            currentUser={currentUser}
            mobileHandler={() => closeOnClick()} /> :
          null}
        {isActiveContent ?
          <Button
            userName={currentUser.name}
            place={place}
            onClick={loggedIn ? logOut : onAuth} /> :
          null}
      </div>
      {isActive ?
        <CloseMenuMobile onClick={closeOnClick} /> :
        <OpenMenuMobile
          onClick={onClick}
          currentPath={currentPath} />}
    </>
  )
}

export default MenuMobile;
