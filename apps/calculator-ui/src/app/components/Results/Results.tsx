import { Descriptions } from "antd";

export interface ResultsProps {
    totalAmount: number;
    totalInterest: number;
}
export const Results = ({ totalAmount, totalInterest }: ResultsProps) => {
    return (
        <Descriptions title="Calculation Results" layout="vertical">
            <Descriptions.Item label="Total amount">{totalAmount}</Descriptions.Item>
            <Descriptions.Item label="Total interest">{totalInterest}</Descriptions.Item>
        </Descriptions>
    );
};
