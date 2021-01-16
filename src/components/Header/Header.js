import React from 'react';
import { useLocation } from 'react-router-dom';
import './Header.css'
import Logo from '../Logo/Logo'
import Navigation from '../Navigation/Navigation';
import menuItems from '../../config/menuItems';
import cn from 'classnames';
import Button from '../Button/Button';

const Header = ({ onAuth, currentUser, logOut }) => {

  const location = useLocation();
  const { pathname: currentPath } = location
  // console.log(currentUser)
  return (
    <header className={cn("header", { "header_logged": currentPath === "/saved-news" })}>
      <Logo />
      <Navigation
        menuItems={menuItems}
        place='header'
        currentUser={currentUser}
      />
      <Button place="header"
        userName={currentUser.name}
        currentPath={currentPath}
        onClick={currentUser.loggedIn ? logOut : onAuth}
      />
    </header>
  )
}

export default Header;
