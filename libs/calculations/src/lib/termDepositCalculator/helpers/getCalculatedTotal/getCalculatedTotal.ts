export const getCalculatedTotal = (
  isAtMaturity: boolean,
  principal: number,
  interestRate: number,
  termInYears: number,
  n: number
) =>
  isAtMaturity
    ? principal + principal * interestRate * termInYears
    : principal * Math.pow(1 + interestRate / n, n * termInYears);
