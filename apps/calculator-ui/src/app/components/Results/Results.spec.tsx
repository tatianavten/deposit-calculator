import { Results } from "./Results";
import { render, screen } from "@testing-library/react";

describe("Results Component", () => {
    it("should render total amount and total interest", () => {
        const totalAmount = 123456.78;
        const totalInterest = 12345.67;

        render(<Results totalAmount={totalAmount} totalInterest={totalInterest} />);

        expect(screen.getByText("Calculation Results")).toBeInTheDocument();
        expect(screen.getByText(`${totalAmount}`)).toBeInTheDocument();
        expect(screen.getByText(`${totalInterest}`)).toBeInTheDocument();
    });
});
