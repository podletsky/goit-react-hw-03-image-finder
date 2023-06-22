import React from 'react';
import styles from '../button/Button.module.css';
const Button = ({ buttonLoadMore }) => {
  return (
    <button className={styles.buttonLoadMore} onClick={buttonLoadMore}>
      Load More
    </button>
  );
};

export default Button;
