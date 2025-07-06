import { render } from '@testing-library/react';
import { calculations } from '@deposit-calculator/calculations';

import App from './app';

jest.mock('@deposit-calculator/calculations', () => ({
  calculations: jest.fn(() => 'Mocked calculations result'),
}));
describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  it('should have a greeting as the title', () => {
    const { getAllByText } = render(<App />);
    expect(
      getAllByText(new RegExp('Deposit calculator', 'gi')).length > 0
    ).toBeTruthy();
  });

  it('should render the header', () => {
    const { getByText } = render(<App />);
    expect(getByText('Deposit Calculator')).toBeTruthy();
  });

  it('should call calculations function', () => {
    render(<App />);
    expect(calculations).toHaveBeenCalled();
  });

  it('should pass a11y checks', async () => {
    const { container } = render(<App />);
    const results = await import('jest-axe').then(({ axe }) => axe(container));
    expect(results).toHaveNoViolations();
  });
});
