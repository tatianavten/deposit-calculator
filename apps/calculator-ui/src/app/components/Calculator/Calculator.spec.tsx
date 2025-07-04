import { Calculator } from "./Calculator";
import { render, screen } from "@testing-library/react";
import { termDepositCalculator, InterestPaidType } from "@deposit-calculator/calculators";
import { Results } from "../Results/Results";
import UserEvent from "@testing-library/user-event";

jest.mock("@deposit-calculator/calculators", () => {
    const originalModule = jest.requireActual("@deposit-calculator/calculators");

    return {
        __esModule: true,
        ...originalModule,
        termDepositCalculator: jest.fn(),
    };
});

jest.mock("../Results/Results", () => ({
    Results: jest.fn(() => <div>Mocked Results Component</div>),
}));

describe("Calculator Component", () => {
    beforeEach(() => {
        jest.clearAllMocks();
    });
    it("should render successfully", () => {
        (termDepositCalculator as jest.Mock).mockReturnValue({
            totalAmount: 123000,
            totalInterest: 23000,
        });
        render(<Calculator />);
        expect(screen.getByText("Term Deposit Calculator")).toBeInTheDocument();
        expect(screen.getByRole("spinbutton", { name: /principal/i })).toBeInTheDocument();
        expect(screen.getByRole("spinbutton", { name: /interest rate/i })).toBeInTheDocument();
        expect(screen.getByRole("spinbutton", { name: /investment term/i })).toBeInTheDocument();
        expect(screen.getByRole("combobox", { name: /interest paid type/i })).toBeInTheDocument();
    });

    it("should pass results to Results component", () => {
        (termDepositCalculator as jest.Mock).mockReturnValue({
            totalAmount: 123000,
            totalInterest: 23000,
        });
        render(<Calculator />);
        expect(Results).toHaveBeenCalledTimes(1);
        expect(Results).toHaveBeenCalledWith(
            { totalAmount: 123000, totalInterest: 23000 },
            undefined, // This is the second argument which is the context
        );
    });

    it("should not call results component when results are not defined", () => {
        (termDepositCalculator as jest.Mock).mockReturnValue(null);
        render(<Calculator />);
        expect(Results).toHaveBeenCalledTimes(0);
    });
    it("should call termDepositCalculator with correct parameters", () => {
        (termDepositCalculator as jest.Mock).mockReturnValue({
            totalAmount: 123000,
            totalInterest: 23000,
        });

        render(<Calculator />);

        expect(termDepositCalculator).toHaveBeenCalledWith({
            principal: 100000,
            interestRate: 0.01,
            investmentTerm: 12,
            interestPaidType: InterestPaidType.monthly,
        });
    });

    it("should format principal input correctly", () => {
        (termDepositCalculator as jest.Mock).mockReturnValue({
            totalAmount: 123000,
            totalInterest: 23000,
        });

        render(<Calculator />);
        const principalInput = screen.getByRole("spinbutton", { name: /principal/i });
        expect(principalInput).toHaveValue("$ 100,000");
    });

    it("should parce user input of the principal value correctly", async () => {
        const user = UserEvent.setup();
        (termDepositCalculator as jest.Mock).mockReturnValue({
            totalAmount: 123000,
            totalInterest: 23000,
        });

        render(<Calculator />);
        await user.clear(screen.getByRole("spinbutton", { name: /principal/i }));
        await user.type(screen.getByRole("spinbutton", { name: /principal/i }), "200000");
        await user.tab();

        const principalInput = screen.getByRole("spinbutton", { name: /principal/i });
        expect(principalInput).toHaveValue("$ 200,000");

        expect(termDepositCalculator).toHaveBeenCalledWith({
            principal: 200000,
            interestRate: 0.01,
            investmentTerm: 12,
            interestPaidType: InterestPaidType.monthly,
        });
    });

    it("should format interest rate input correctly", () => {
        (termDepositCalculator as jest.Mock).mockReturnValue({
            totalAmount: 123000,
            totalInterest: 23000,
        });

        render(<Calculator initialInterestRate={1.25} />);
        const interestRateInput = screen.getByRole("spinbutton", { name: /interest rate/i });
        expect(interestRateInput).toHaveValue("1.25% p.a.");
    });

    it("should parce user input of the interest rate correctly", async () => {
        const user = UserEvent.setup();
        (termDepositCalculator as jest.Mock).mockReturnValue({
            totalAmount: 123000,
            totalInterest: 23000,
        });

        render(<Calculator />);
        await user.clear(screen.getByRole("spinbutton", { name: /interest rate/i }));
        await user.type(screen.getByRole("spinbutton", { name: /interest rate/i }), "2.56");
        await user.tab();

        const interestRateInput = screen.getByRole("spinbutton", { name: /interest rate/i });
        expect(interestRateInput).toHaveValue("2.56% p.a.");

        expect(termDepositCalculator).toHaveBeenCalledWith({
            principal: 100000,
            interestRate: 0.0256,
            investmentTerm: 12,
            interestPaidType: InterestPaidType.monthly,
        });
    });
});
