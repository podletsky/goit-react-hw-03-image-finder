import React from 'react';
import styles from '../button/Button.module.css';
import PropTypes from 'prop-types';

const Button = ({ buttonLoadMore }) => {
  return (
    <button className={styles.buttonLoadMore} onClick={buttonLoadMore}>
      Load More
    </button>
  );
};

Button.propTypes = {
  buttonLoadMore: PropTypes.func.isRequired,
};

export default Button;
