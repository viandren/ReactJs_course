import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText("netflix");
  expect(linkElement).toBeInTheDocument();

  const linkElement2 = screen.getByText("roulette");
  expect(linkElement2).toBeInTheDocument();
});
