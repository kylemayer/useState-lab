/* eslint-disable max-len */
export const getQuote = async () => {
  const response = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
  const [quote] = await response.json();

  return {
    image: quote.image,
    character: quote.character,
    quote: quote.quote,
  };
};
