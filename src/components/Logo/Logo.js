import React from 'react';
import './Logo.css'
import cn from 'classnames';
import { Link, useLocation } from 'react-router-dom'

const Logo = () => {

  const location = useLocation();
  const { pathname: currentPath } = location

  // console.log(path)
  return (
    <Link to="/"
      className={cn("logo", { "logo_theme_black": currentPath === "/saved-news" })}>
      NewsExplorer
    </Link>
  )
}

export default Logo;
