import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import App from './app';

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getAllByText } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(
      getAllByText(
        new RegExp('Welcome @deposit-calculator/deposit-calculator', 'gi')
      ).length > 0
    ).toBeTruthy();
  });

  it('should render the header', () => {
    const { getByText } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    expect(getByText('Deposit Calculator')).toBeTruthy();
  });

  it('should pass a11y checks', async () => {
    const { container } = render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const results = await import('jest-axe').then(({ axe }) => axe(container));
    expect(results).toHaveNoViolations();
  });
});
