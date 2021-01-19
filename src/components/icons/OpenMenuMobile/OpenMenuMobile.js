import React from 'react';
import './OpenMenuMobile.css';

const OpenMenuMobile = ({ onClick }) => {
  return (
    <svg onClick={onClick} className="menu-mobile-open" fill="none">
      <rect x="4" y="8" width="16" height="2" fill="white" />
      <rect x="4" y="14" width="16" height="2" fill="white" />
    </svg>
  )
}

export default OpenMenuMobile;
