import { Descriptions } from 'antd';

export interface ResultsProps {
  totalAmount: number;
  totalInterest: number;
}
export const CalculatorResults = ({
  totalAmount,
  totalInterest,
}: ResultsProps) => {
  return (
    <Descriptions
      title="Calculation Results"
      layout="vertical"
      styles={{ label: { color: '#444' } }}
    >
      <Descriptions.Item label="Total amount">{totalAmount}</Descriptions.Item>
      <Descriptions.Item label="Total interest">
        {totalInterest}
      </Descriptions.Item>
    </Descriptions>
  );
};
