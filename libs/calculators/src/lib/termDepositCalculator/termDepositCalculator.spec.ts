import { termDepositCalculator, InterestPaidType } from "./termDepositCalculator";

describe("Term Deposit Calculator", () => {
    it("should calculate total amount and interest earned for monthly interest payment", () => {
        const props = {
            principal: 100000,
            interestRate: 0.01,
            investmentTerm: 17,
            interestPaidType: InterestPaidType.monthly,
        };

        const result = termDepositCalculator(props);
        expect(result.totalAmount).toEqual(101426);
        expect(result.totalInterest).toEqual(1426);
    });

    it("should calculate total amount and interest earned for quarterly interest payment", () => {
        const props = {
            principal: 100000,
            interestRate: 0.01,
            investmentTerm: 17,
            interestPaidType: InterestPaidType.quarterly,
        };

        const result = termDepositCalculator(props);
        expect(result.totalAmount).toEqual(101425);
        expect(result.totalInterest).toEqual(1425);
    });

    it("should calculate total amount and interest earned for annualy interest payment", () => {
        const props = {
            principal: 100000,
            interestRate: 0.01,
            investmentTerm: 17,
            interestPaidType: InterestPaidType.annually,
        };

        const result = termDepositCalculator(props);
        expect(result.totalAmount).toEqual(101420);
        expect(result.totalInterest).toEqual(1420);
    });

    it("should calculate total amount and interest earned for interest payment 'at maturity'", () => {
        const props = {
            principal: 1000,
            interestRate: 0.0125,
            investmentTerm: 12,
            interestPaidType: InterestPaidType["at maturity"],
        };

        const result = termDepositCalculator(props);
        expect(result.totalAmount).toEqual(101417);
        expect(result.totalInterest).toEqual(1417);
    });
});
