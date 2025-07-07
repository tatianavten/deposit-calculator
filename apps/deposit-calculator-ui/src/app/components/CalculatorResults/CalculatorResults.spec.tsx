import { CalculatorResults } from './CalculatorResults';
import { render, screen } from '@testing-library/react';

describe('Results Component', () => {
  it('should render total amount and total interest', () => {
    const totalAmount = 123456.78;
    const totalInterest = 12345.67;

    render(
      <CalculatorResults
        totalAmount={totalAmount}
        totalInterest={totalInterest}
      />
    );

    expect(screen.getByText('Calculation Results')).toBeInTheDocument();
    expect(screen.getByText(`${totalAmount}`)).toBeInTheDocument();
    expect(screen.getByText(`${totalInterest}`)).toBeInTheDocument();
  });

  it('should pass a11y checks', async () => {
    const totalAmount = 123456.78;
    const totalInterest = 12345.67;

    const { container } = render(
      <CalculatorResults
        totalAmount={totalAmount}
        totalInterest={totalInterest}
      />
    );
    const results = await import('jest-axe').then(({ axe }) => axe(container));
    expect(results).toHaveNoViolations();
  });
});
