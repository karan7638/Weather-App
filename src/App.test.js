import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the default city name', async () => {
  render(<App />);
  // Wait for the city name to appear
  const cityName = await screen.findByText(/Delhi/i);
  expect(cityName).toBeInTheDocument();
});
