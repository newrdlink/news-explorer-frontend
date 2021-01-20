import React from 'react';
import { useLocation } from 'react-router-dom';
import './Header.css'
import Logo from '../Logo/Logo'
import Navigation from '../Navigation/Navigation';
import menuItems from '../../config/menuItems';
import cn from 'classnames';
import Button from '../Button/Button';
import MenuMobile from '../icons/MenuMobile/MenuMobile';
import useWindowSize from '../../helpers/windowsWidth';

const Header = ({ onAuth, currentUser, logOut }) => {

  const location = useLocation();
  const { pathname: currentPath } = location

  return (
    <header className={cn("header",
      { "header_logged": currentPath === "/saved-news" },
      { "header_place_mobile": useWindowSize() < 690 }
    )}>
      <Logo />
      {useWindowSize() < 690 ?
        <MenuMobile currentUser={currentUser}
          place="header-mobile"
          onAuth={onAuth}
          logOut={logOut}
          currentPath={currentPath}
        /> :
        <Navigation
          menuItems={menuItems}
          place='header'
          currentUser={currentUser}
        />}
      {useWindowSize() < 690 ? null : <Button place="header"
        userName={currentUser.name}
        currentPath={currentPath}
        onClick={currentUser.loggedIn ? logOut : onAuth}
      />}
    </header>
  )
}

export default Header;
