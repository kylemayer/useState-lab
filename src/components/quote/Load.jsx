/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';
import styles from '../quote/load.css';

const Load = ({ onClick }) => (
  <button className={styles.button} onClick={onClick} aria-label="Load a quote!">
    Fetch Quote
  </button>
);

Load.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default Load;
