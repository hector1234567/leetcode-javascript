import { test, expect, describe } from "vitest";

import { argumentsLength } from "./index.js";

describe("2703. Return Length of Arguments Passed", () => {
    // Input: args = [5]
    // Output: 1
    // Explanation:
    // argumentsLength(5); // 1
    // One value was passed to the function so it should return 1.
    test("One value was passed to the function so it should return 1.", () => {
        expect(argumentsLength(5)).toBe(1); 
    });

    // Input: args = [{}, null, "3"]
    // Output: 3
    // Explanation: 
    // argumentsLength({}, null, "3"); // 3
    // Three values were passed to the function so it should return 3.
    test("Three values were passed to the function so it should return 3.", () => {
        expect(argumentsLength({}, null, "3")).toBe(3); 
    });
})