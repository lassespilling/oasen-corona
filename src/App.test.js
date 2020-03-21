import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders Test title', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Test title/i);
  expect(linkElement).toBeInTheDocument();
});
