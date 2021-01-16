import { React } from 'react';
import './SocialList.css';
import { socialList } from '../../config/socialList';

const SocialIcons = () => {
  return (
    <ul className="social-list">
      {
        socialList.map((icon) => {
          return <li className="social-list__item"
            key={icon.id}
            href={icon.Link}>
            <a href={icon.link} target="_blank" rel="noreferrer">
              <img src={icon.icon} alt={icon.name} />
            </a>
          </li>
        })
      }
    </ul>
  )
}

export default SocialIcons;
