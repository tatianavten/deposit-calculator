import { getCalculatedTotal } from './getCalculatedTotal';

describe('getCalculatedTotal', () => {
  it('should calculate total for "at maturity" interest paid type', () => {
    const result = getCalculatedTotal(true, 10000, 0.01, 1, 1);
    expect(result).toBe(10100);
  });

  it('should calculate total for non "at maturity" interest paid type', () => {
    const result = getCalculatedTotal(false, 10000, 0.01, 1, 4);
    expect(result).toBeCloseTo(10100.3756, 3);
  });
});
