import { render, screen } from "@testing-library/react";

import App from "./app";

jest.mock("./components/Calculator/Calculator", () => ({
    Calculator: () => <div>Mocked Calculator Component</div>,
}));

describe("App", () => {
    it("should render successfully", () => {
        const { baseElement } = render(<App />);
        expect(baseElement).toBeTruthy();
    });

    it("should render Calculator", () => {
        render(<App />);
        expect(screen.getByText("Mocked Calculator Component")).toBeInTheDocument();
    });
});
