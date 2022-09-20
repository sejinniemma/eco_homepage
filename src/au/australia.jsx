import React from 'react';
import { useNavigate } from 'react-router-dom';
import Description from '../description/description';
import SlideImage from '../slide_img/slide_img';
import styles from './australia.module.css';

const Australia = (props) => {
  const navigate = useNavigate();

  const goToCanada = () => {
    navigate('/canada');
  };

  const text = `I lived in Korea for 26 years
  It was my first independence from my parents' fence. It was a working holiday in Australia.
  I found myself in a new environment, hanging out with people from various countries I saw for the first time.
  For me, this experience is "who I really am,".
  I got a very important experience and a great realization in life.
  I was always a person who felt the greatest sense of accomplishment and satisfaction in life when I was constantly learning and growing up
  I was very curious about new culture and language experiences.
  Before that, if I was attracted by the surrounding eyes and chose, I could choose everything with my own subjectivity through my experience in Australia.
  As I got to know myself, I naturally made a choice about my job
  It is also a place that made me dream of becoming a developer.`;

  const pointWord = 'Who I Am : Growth, Learning, Curiosity';

  return (
    <section className={styles.au_body}>
      <SlideImage name='australia' />
      <Description
        value='Next Destination'
        callback={goToCanada}
        name='Australia🇦🇺'
        text={text}
        pointWord={pointWord}
      />
    </section>
  );
};

export default Australia;
