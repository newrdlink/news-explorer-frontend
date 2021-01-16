import React from 'react'
import './NavigationItem.css';
import cn from 'classnames';
import { NavLink, useLocation } from 'react-router-dom';

const NavigationItem = ({ name, path, place }) => {

  const location = useLocation();
  const { pathname: currentPath } = location

  return (
    <li className="item">
      <NavLink to={path} exact
        className={cn("item__link",
          { "item__link_theme_black": place === 'footer' || currentPath === "/saved-news" },
          { "item__link_active-saved-news": path !== "/" && currentPath === "/saved-news" })}
        activeClassName="item__link_active">
        {name}
      </NavLink>
    </li>
  )
}

export default NavigationItem;
