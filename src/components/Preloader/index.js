import React from 'react';
import './style.css';
import cn from 'classnames';

const Preloader = ({ isLoading }) => {

  return (
    <section
      className={cn("preloader",
        { "preloader_visible": isLoading })
      }>
      <div className="preloader__circle"></div>
    </section>
  )
}

export default Preloader;
