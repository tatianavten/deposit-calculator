import { roundUp } from "./helpers";

export enum InterestPaidType {
    "monthly",
    "quarterly",
    "anuualy",
    "at maturity",
}
/* * Term Deposit Properties
 * This interface defines the properties required for a term deposit calculation.
 * Assuming all that all reinvested into the term deposit for its duration.
 * @property {number} principal - The initial amount of money deposited.
 * @property {number} interestRate - The annual interest rate as a decimal (e.g., 0.05 for 5%).
 * @property {number} investmentTerm - The duration of the investment in months  (e.g., 12 for one year).
 * @property {InterestPaidType} interestPaidType - The frequency at which interest is paid.
 */
export interface TermDepositProperties {
    principal: number;
    interestRate: number;
    investmentTerm: number; // in months
    interestPaidType: InterestPaidType;
}

const mapInteresPaidToMonths = new Map<InterestPaidType, number>([
    [InterestPaidType.monthly, 12],
    [InterestPaidType.quarterly, 4],
    [InterestPaidType.anuualy, 1],
    [InterestPaidType["at maturity"], 1],
]);
/*
 * Term Deposit Calculator
 * This function calculates the total amount and interest earned on a term deposit.
 *
 * @param {TermDepositProperties} props - The properties of the term deposit.
 * @returns {Object} An object containing the total amount and total interest earned.
 */

export const termDepositCalculator = (props: TermDepositProperties) => {
    const { principal, interestRate, investmentTerm, interestPaidType } = props;
    const termInYears = investmentTerm / 12;
    const n = mapInteresPaidToMonths.get(interestPaidType) || 1;
    const isAtMaturity = interestPaidType === InterestPaidType["at maturity"];
    const totalAmount = roundUp(
        isAtMaturity
            ? principal + principal * interestRate * termInYears
            : principal * Math.pow(1 + interestRate / n, n * termInYears),
    );

    return {
        totalAmount,
        totalInterest: totalAmount - principal,
    };
};
