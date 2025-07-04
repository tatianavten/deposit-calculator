describe("@deposit-calculator/calculator-ui-e2e", () => {
    beforeEach(() => cy.visit("/"));

    it("should display welcome message", () => {
        // Custom command example, see `../support/commands.ts` file
        cy.contains("Term Deposit Calculator");
    });
});
