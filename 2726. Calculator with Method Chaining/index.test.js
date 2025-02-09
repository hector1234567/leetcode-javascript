import { it, expect } from "vitest";

import { Calculator } from "./index.js";

// Input: 
// actions = ["Calculator", "add", "subtract", "getResult"], 
// values = [10, 5, 7]
// Output: 8
// Explanation: 
// new Calculator(10).add(5).subtract(7).getResult() // 10 + 5 - 7 = 8
it('The result must be 8.', () => {
    const calculator = new Calculator(10);
    const result = calculator.add(5).substract(7).getResult();

    expect(result).toBe(8)
})

// Input: 
// actions = ["Calculator", "multiply", "power", "getResult"], 
// values = [2, 5, 2]
// Output: 100
// Explanation: 
// new Calculator(2).multiply(5).power(2).getResult() // (2 * 5) ^ 2 = 100
it('The result must be 100.', () => {
    const calculator = new Calculator(2);
    const result = calculator.multiply(5).power(2).getResult();

    expect(result).toBe(100)
})

// Input: 
// actions = ["Calculator", "divide", "getResult"], 
// values = [20, 0]
// Output: "Division by zero is not allowed"
// Explanation: 
// new Calculator(20).divide(0).getResult() // 20 / 0 
// The error should be thrown because we cannot divide by zero.
it('The error should be thrown because we cannot divide by zero.', () => {
    const resultFn = () => {
        const calculator = new Calculator(20);
        calculator.divide(0).getResult();
    }

    expect(resultFn).toThrow("Division by zero is not allowed");
})