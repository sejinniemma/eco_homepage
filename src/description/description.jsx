import React from 'react';
import Button from '../button/button';
import styles from './description.module.css';

const Description = ({ value, callback, name, text, pointWord }) => {
  const titleColorPick =
    name === 'Australia🇦🇺' ? styles.au_title : styles.canada_title;
  const descriptionColorPick =
    name === 'Australia🇦🇺' ? styles.description_au : styles.description_canada;
  const wordColorPick =
    name === 'Australia🇦🇺' ? styles.au_word : styles.canada_word;
  return (
    <div className={styles.description}>
      <h1 className={titleColorPick}>{name}</h1>
      <h3 className={wordColorPick}>{pointWord}</h3>
      <hr className={styles.hr} />
      <p className={descriptionColorPick}>{text}</p>
      <Button value={value} callback={callback} name={name} />
    </div>
  );
};

export default Description;
