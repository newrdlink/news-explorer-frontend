import React from 'react';
import './OpenMenuMobile.css';

const OpenMenuMobile = ({ onClick, currentPath }) => {
  return (
    <svg onClick={onClick} className="menu-mobile-open" fill="none">
      <rect x="4" y="8" width="16" height="2" fill={currentPath === "/saved-news" ? "black" : "white"} />
      <rect x="4" y="14" width="16" height="2" fill={currentPath === "/saved-news" ? "black" : "white"} />
    </svg>
  )
}

export default OpenMenuMobile;
