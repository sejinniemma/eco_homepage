import React, { memo } from 'react';
import styles from './button.module.css';

const Button = ({ value, callback, name }) => {
  const colorPick = name === 'Australia🇦🇺' ? styles.au : styles.canada;
  return (
    <div className={`${styles.button} ${colorPick}`} onClick={callback}>
      {value}
    </div>
  );
};

export default Button;
