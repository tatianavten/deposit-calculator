export enum InterestPaidType {
  MONTHLY = 'monthly',
  QUARTERLY = 'quarterly',
  ANNUALLY = 'annually',
  AT_MATURITY = 'at maturity',
}

const mapInteresPaidToMonths = new Map<InterestPaidType, number>([
  [InterestPaidType.MONTHLY, 12],
  [InterestPaidType.QUARTERLY, 4],
  [InterestPaidType.ANNUALLY, 1],
  [InterestPaidType.AT_MATURITY, 1],
]);

export const getMappedInterestPaid = (
  interestPaidType: InterestPaidType
): number => {
  return mapInteresPaidToMonths.get(interestPaidType) || 1;
};
