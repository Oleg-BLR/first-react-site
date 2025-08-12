// import React from 'react';
import styles from './Button01.module.css';

const Button01 = ({ children }) => {
  return <button className={styles.button}>{children}</button>;
};

export default Button01;