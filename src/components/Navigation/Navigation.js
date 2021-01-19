import React from 'react';
import './Navigation.css';
import NavigationItem from '../NavigationItem/NavigationItem';

const Navigation = ({ menuItems, place, currentUser = {} }) => {
  // console.log(currentUser.loggedIn)
  return (
    <nav className="navigation">
      <ul className={`navigation__items ${place === "header-mobile" && "navigation__items_place_mobile"}`}>

        {menuItems.map((item) => {

          const { id, name, path } = item

          if (currentUser.loggedIn || path === '/') {
            return <NavigationItem
              key={id}
              name={name}
              path={path}
              place={place} />
          } return null
        })}

      </ul>
    </nav>
  )
}

export default Navigation;