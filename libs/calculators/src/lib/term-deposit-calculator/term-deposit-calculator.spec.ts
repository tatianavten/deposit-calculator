import { termDepositCalculator } from './term-deposit-calculator';

describe('Term Deposit Calculator', () => {
  it('should return the correct string', () => {
    expect(termDepositCalculator()).toBe('Term Deposit Calculator');
  });
});
