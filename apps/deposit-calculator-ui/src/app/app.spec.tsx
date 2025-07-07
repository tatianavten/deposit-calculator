import { render } from '@testing-library/react';

import App from './app';

jest.mock('./components/CalculatorFields', () => ({
  CalculatorFields: jest.fn(() => <div>Mocked Calculator Component</div>),
}));

describe('App', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<App />);
    expect(baseElement).toBeTruthy();
  });

  it('should render CalculatorFields', () => {
    const { getByText } = render(<App />);
    expect(getByText('Mocked Calculator Component')).toBeTruthy();
  });
});
