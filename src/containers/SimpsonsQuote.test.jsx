/* eslint-disable max-len */
import React from 'react';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import SimpsonsQuote from './SimpsonsQuote';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

const server = setupServer(
  rest.get(
    'https://thesimpsonsquoteapi.glitch.me/quotes',
    (req, res, ctx) => {
      return res(
        ctx.json([
          {
            quote: 'Doughnuts?',
            character: 'Mr. Burns',
            image: 'https://example.com/mrburns.png',
          },
        ])
      );
    }
  )
);

describe('Simpsons Quote Container', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('displays a button that fetches a random quote', async () => {
    render(<SimpsonsQuote />);

    const fetchButton = screen.getByRole('button', { name: 'Load a quote!' });
    fireEvent.click(fetchButton);

    return waitFor(() => {
      screen.getByText('Doughnuts?');
    });
  });
});
