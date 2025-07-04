import { roundUp } from "./roundUp";

describe("roundUp", () => {
    it("should round up a positive number", () => {
        expect(roundUp(1000.2)).toBe(1000);
        expect(roundUp(12300.124)).toBe(12300);
        expect(roundUp(1000.8)).toBe(1001);
        expect(roundUp(12300.999)).toBe(12301);
    });
});
