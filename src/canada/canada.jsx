import React from 'react';
import { useNavigate } from 'react-router-dom';
import Description from '../description/description';
import SlideImage from '../slide_img/slide_img';
import styles from './canada.module.css';

const Canada = (props) => {
  const navigate = useNavigate();

  const goToAustralia = () => {
    navigate('/');
  };

  const text = `My experience in Australia allowed me to dream of becoming an overseas developer.

  I like English and I like new experiences, so as a developer, not only in Korea,
  
  I wanted to be a developer who could work abroad.
  So I applied for a co-up visa to go to Canada and build a career as a developer.
  It was a time to seriously think about what kind of life I want to live as a developer in another new country alone.
  Even if it was not a company, I thought that I wanted to become a valuable and capable person as a developer and become a person who could work on the stage around the world.
  So, I will study English continuously, not neglecting development studies, and open up more opportunities for me
  I wanted to.
  In conclusion, I want to challenge myself and work wherever I want without complacency.`;

  const pointWord = 'A New dream  : Working in the world ';
  return (
    <section className={styles.canada_body}>
      <SlideImage name='canada' />
      <Description
        value='Go Back'
        callback={goToAustralia}
        name='Canada🇨🇦'
        text={text}
        pointWord={pointWord}
      />
    </section>
  );
};

export default Canada;
