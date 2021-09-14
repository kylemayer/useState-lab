export const getQuote = async () => {
  const response = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
  const results = await response.json();

  return results.map(quote => ({
    image: quote.image,
    character: quote.character,
    quote: quote.quote,
  }));
};
