import React from 'react';
import PropTypes from 'prop-types';

const Quote = ({ image, character, quote }) => (
  <figure>
    <img src={image} alt={character} />
    <figcaption>
      {character} - {quote}
    </figcaption>
  </figure>
);

Quote.propTypes = {
  image: PropTypes.string.isRequired,
  character: PropTypes.string.isRequired,
  quote: PropTypes.string.isRequired,
};

export default Quote;
