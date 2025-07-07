export enum InterestPaidType {
  MONTHLY = 'monthly',
  QUARTERLY = 'quarterly',
  ANNUALY = 'annually',
  AT_MATURITY = 'at maturity',
}

const mapInteresPaidToMonths = new Map<InterestPaidType, number>([
  [InterestPaidType.MONTHLY, 12],
  [InterestPaidType.QUARTERLY, 4],
  [InterestPaidType.ANNUALY, 1],
  [InterestPaidType.AT_MATURITY, 1],
]);

export const getMappedInterestPaid = (
  interestPaidType: InterestPaidType
): number => {
  return mapInteresPaidToMonths.get(interestPaidType) || 1;
};
