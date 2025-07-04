import { Form, InputNumber, Select, Typography } from "antd";
import { InterestPaidType, termDepositCalculator } from "@deposit-calculator/calculators";
import { useMemo } from "react";
import "./Calculator.css";
import { Results } from "../Results/Results";

export interface TermDepositProperties {
    initialPrincipal?: number;
    initialInterestRate?: number; // in percentage
    initialInvestmentTerm?: number; // in months
    initialInterestPaidType?: InterestPaidType;
}

export const Calculator = ({
    initialPrincipal = 100000,
    initialInterestRate = 1,
    initialInvestmentTerm = 12,
    initialInterestPaidType = InterestPaidType.monthly,
}: TermDepositProperties) => {
    const { useForm, useWatch } = Form;
    const [form] = useForm();
    const principal = useWatch("principal", form);
    const interestRate = useWatch("interestRate", form);
    const investmentTerm = useWatch("investmentTerm", form);
    const interestPaidType = useWatch("interestPaidType", form);

    const calculatonResults = useMemo(() => {
        if (
            principal == null ||
            interestRate == null ||
            investmentTerm == null ||
            interestPaidType == null
        ) {
            return null;
        }
        return termDepositCalculator({
            principal,
            interestRate: interestRate / 100,
            investmentTerm,
            interestPaidType,
        });
    }, [principal, interestRate, investmentTerm, interestPaidType]);

    return (
        <div className="calculator-wrapper">
            <Typography.Title className="calculator-title" level={2}>
                Term Deposit Calculator
            </Typography.Title>
            <p className="calculator-description">
                This calculator helps you to calculate the total amount and interest earned on a
                term deposit.
            </p>
            <Form
                className="calculator-form"
                layout="horizontal"
                form={form}
                initialValues={{
                    principal: initialPrincipal,
                    interestRate: initialInterestRate,
                    investmentTerm: initialInvestmentTerm,
                    interestPaidType: initialInterestPaidType,
                }}>
                <Form.Item label="Principal" name="principal">
                    <InputNumber<number>
                        min={1000}
                        formatter={(value) => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                        parser={(value) => parseFloat(value?.replace(/\$\s?|(,*)/g, "") || "0")}
                    />
                </Form.Item>
                <Form.Item label="Interest Rate" name="interestRate">
                    <InputNumber<number>
                        min={1}
                        max={100}
                        step={0.01}
                        formatter={(value) => `${value}% p.a.`}
                        parser={(value) => parseFloat(value?.replace(/[^0-9.]/g, "") || "0")}
                    />
                </Form.Item>
                <Form.Item label="Investment Term (months)" name="investmentTerm">
                    <InputNumber placeholder="Enter investment term in months" min={3} />
                </Form.Item>
                <Form.Item label="Interest Paid Type" name="interestPaidType">
                    <Select>
                        <Select.Option value={InterestPaidType.monthly}>Monthly</Select.Option>
                        <Select.Option value={InterestPaidType.quarterly}>Quarterly</Select.Option>
                        <Select.Option value={InterestPaidType.annually}>Annually</Select.Option>
                        <Select.Option value={InterestPaidType["at maturity"]}>
                            At Maturity
                        </Select.Option>
                    </Select>
                </Form.Item>
            </Form>
            <div className="calculator-result">
                {calculatonResults && (
                    <Results
                        totalAmount={calculatonResults?.totalAmount}
                        totalInterest={calculatonResults?.totalInterest}
                    />
                )}
            </div>
        </div>
    );
};
