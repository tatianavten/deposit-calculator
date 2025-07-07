import {
  getMappedInterestPaid,
  InterestPaidType,
} from './getMappedInterestPaid';

describe('getMappedInterestPaid', () => {
  it('should return 12 for monthly interest payment', () => {
    expect(getMappedInterestPaid(InterestPaidType.MONTHLY)).toBe(12);
  });

  it('should return 4 for quarterly interest payment', () => {
    expect(getMappedInterestPaid(InterestPaidType.QUARTERLY)).toBe(4);
  });

  it('should return 1 for annual interest payment', () => {
    expect(getMappedInterestPaid(InterestPaidType.ANNUALY)).toBe(1);
  });

  it('should return 1 for at maturity interest payment', () => {
    expect(getMappedInterestPaid(InterestPaidType.AT_MATURITY)).toBe(1);
  });

  it('should return 1 for unknown interest payment type', () => {
    expect(getMappedInterestPaid('unknown' as any)).toBe(1);
  });
});
