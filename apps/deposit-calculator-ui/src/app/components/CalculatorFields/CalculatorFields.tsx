import { Form, InputNumber, Select, Typography, App } from 'antd';

import {
  InterestPaidType,
  termDepositCalculator,
} from '@deposit-calculator/calculations';
import { useMemo } from 'react';
import './CalculatorFields.css';
import { CalculatorResults } from '../CalculatorResults';

export interface TermDepositProperties {
  initialPrincipal?: number;
  initialInterestRate?: number; // in percentage
  initialInvestmentTerm?: number; // in months
  initialInterestPaidType?: InterestPaidType;
}

export const CalculatorFields = ({
  initialPrincipal = 100000,
  initialInterestRate = 1,
  initialInvestmentTerm = 12,
  initialInterestPaidType = InterestPaidType.MONTHLY,
}: TermDepositProperties) => {
  const { useForm, useWatch } = Form;
  const [form] = useForm();
  const principal = useWatch('principal', form);
  const interestRate = useWatch('interestRate', form);
  const investmentTerm = useWatch('investmentTerm', form);
  const interestPaidType = useWatch('interestPaidType', form);

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
    <App>
      <main className="calculator-wrapper">
        <div className="calculator-content">
          <Typography.Title className="calculator-title" level={1}>
            Term Deposit Calculator
          </Typography.Title>
          <Typography.Text>
            Enter the principal amount, interest rate, investment term, and
            interest paid type to calculate the total amount and interest
            earned.
          </Typography.Text>
          <p id="deposit-desc" className="sr-only">
            The deposit is calculated automatically as you type.
          </p>
          <Form
            aria-describedby="deposit-desc"
            className="calculator-form"
            layout="horizontal"
            form={form}
            initialValues={{
              principal: initialPrincipal,
              interestRate: initialInterestRate,
              investmentTerm: initialInvestmentTerm,
              interestPaidType: initialInterestPaidType,
            }}
          >
            <Form.Item label="Principal" name="principal">
              <InputNumber<number>
                min={1000}
                formatter={(value) =>
                  `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')
                }
                parser={(value) =>
                  parseFloat(value?.replace(/\$\s?|(,*)/g, '') || '0')
                }
              />
            </Form.Item>
            <Form.Item label="Interest Rate" name="interestRate">
              <InputNumber<number>
                min={1}
                max={100}
                step={0.01}
                formatter={(value) => `${value}% p.a.`}
                parser={(value) =>
                  parseFloat(value?.replace(/[^0-9.]/g, '') || '0')
                }
              />
            </Form.Item>
            <Form.Item label="Investment Term (months)" name="investmentTerm">
              <InputNumber
                placeholder="Enter investment term in months"
                min={3}
              />
            </Form.Item>
            <Form.Item label="Interest Paid Type" name="interestPaidType">
              <Select>
                <Select.Option value={InterestPaidType.MONTHLY}>
                  Monthly
                </Select.Option>
                <Select.Option value={InterestPaidType.QUARTERLY}>
                  Quarterly
                </Select.Option>
                <Select.Option value={InterestPaidType.ANNUALLY}>
                  Annually
                </Select.Option>
                <Select.Option value={InterestPaidType.AT_MATURITY}>
                  At Maturity
                </Select.Option>
              </Select>
            </Form.Item>
          </Form>
        </div>
        <div
          className="calculator-result"
          aria-live="polite"
          aria-atomic="true"
        >
          {calculatonResults && (
            <CalculatorResults
              totalAmount={calculatonResults?.totalAmount}
              totalInterest={calculatonResults?.totalInterest}
            />
          )}
        </div>
      </main>
    </App>
  );
};
