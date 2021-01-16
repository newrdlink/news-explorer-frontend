import React from 'react';
import './Footer.css';
import Navigation from '../Navigation/Navigation';
import menuItems from '../../config/menuItems';
import SocialIcons from '../SocialList/SocialList';

const Footer = () => {
  const currentYear = new Date();
  return (
    <footer className="footer">
      <p className="footer__copyright">
        &copy; {currentYear.getFullYear()} Supersite, Powered by News API
      </p>
      <div className="footer__content">
        <Navigation
          place='footer'
          menuItems={menuItems} />
        <a
          className="footer__link"
          href="https://ya.ru"
          target="_blank"
          rel="noreferrer">Яндекс.Практикум</a>
        <SocialIcons />
      </div>
    </footer>
  )
}

export default Footer;
