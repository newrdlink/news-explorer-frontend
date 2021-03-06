import React from 'react';
import './About.css';
import image from '../../images/image-03.jpg'

const About = () => {
  return (
    <section className="about">
      <img className="about__image" src={image} alt="Фотография автора" />
      <h3 className="about__title">Об авторе</h3>
      <p className="about__subtitle">
        Это блок с описанием автора проекта.
        Здесь следует указать, как вас зовут, чем вы занимаетесь,
        какими технологиями разработки владеете. Также можно рассказать о
        процессе обучения в Практикуме, чему вы тут научились, и чем можете
        помочь потенциальным заказчикам.
        
        Это блок с описанием автора проекта.
        Здесь следует указать, как вас зовут, чем вы занимаетесь,
        какими технологиями разработки владеете. Также можно рассказать о
        процессе обучения в Практикуме, чему вы тут научились, и чем можете
        помочь потенциальным заказчикам.
      </p>
 
   </section>
  )
}

export default About;
