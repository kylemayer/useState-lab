/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import styles from '../quote/load.css';

const Load = ({ handleClick }) => (
  <button className={styles.button} onClick={handleClick} aria-label="Load a quote!">
    Fetch Quote
  </button>
);

Load.propTypes = {
  handleClick: PropTypes.func
};

export default Load;
