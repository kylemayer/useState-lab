import React, { useState } from 'react';
import Quote from '../components/quote/Quote';
import Load from '../components/quote/Load';
import { getQuote } from '../services/simpsonsApi';

const SimpsonsQuote = () => {
  const [quote, setQuote] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    const quote = await getQuote();
    setQuote(quote);
    setLoading(false);
  };

  return (
    <>
      <Load onclick={handleClick} />
      {loading ? <p>Loading spinner</p> : quote &&
        <Quote
          image={quote.image}
          character={quote.character}
          quote={quote.quote} />}
    </>
  );
};

export default SimpsonsQuote;
