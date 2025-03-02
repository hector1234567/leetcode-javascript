import { test, expect, describe, vi } from "vitest";

import { memoize } from "./index.js";

describe("2623. Memoize", () => {
    // Input:
    // fnName = "sum"
    // actions = ["call","call","getCallCount","call","getCallCount"]
    // values = [[2,2],[2,2],[],[1,2],[]]
    // Output: [4,4,1,3,2]
    // Explanation:
    // const sum = (a, b) => a + b;
    // const memoizedSum = memoize(sum);
    // memoizedSum(2, 2); // "call" - returns 4. sum() was called as (2, 2) was not seen before.
    // memoizedSum(2, 2); // "call" - returns 4. However sum() was not called because the same inputs were seen before.
    // // "getCallCount" - total call count: 1
    // memoizedSum(1, 2); // "call" - returns 3. sum() was called as (1, 2) was not seen before.
    // // "getCallCount" - total call count: 2
    test("Output is 4,4,1,3,2", () => {
        const logger = vi.fn();
        const sum = (a, b) => {
            logger();
            return a + b
        };
        const memoizedSum = memoize(sum);

        expect(memoizedSum(2,2)).toBe(4);
        expect(memoizedSum(2,2)).toBe(4);
        expect(logger).toBeCalledTimes(1);
        expect(memoizedSum(1,2)).toBe(3);
        expect(logger).toBeCalledTimes(2);
    })
    
    // Input:
    // fnName = "factorial"
    // actions = ["call","call","call","getCallCount","call","getCallCount"]
    // values = [[2],[3],[2],[],[3],[]]
    // Output: [2,6,2,2,6,2]
    // Explanation:
    // const factorial = (n) => (n <= 1) ? 1 : (n * factorial(n - 1));
    // const memoFactorial = memoize(factorial);
    // memoFactorial(2); // "call" - returns 2.
    // memoFactorial(3); // "call" - returns 6.
    // memoFactorial(2); // "call" - returns 2. However factorial was not called because 2 was seen before.
    // // "getCallCount" - total call count: 2
    // memoFactorial(3); // "call" - returns 6. However factorial was not called because 3 was seen before.
    // // "getCallCount" - total call count: 2
    test("Output is 2,6,2,2,6,2", () => {
        const logger = vi.fn();
        const factorial = (n) => {
            logger();
            return (n <= 1) ? 1 : (n * factorial(n - 1));
        };
        const memoFactorial = memoize(factorial);

        expect(memoFactorial(2)).toBe(2);
        expect(memoFactorial(3)).toBe(6);
        expect(memoFactorial(2)).toBe(2);
        // expect(logger).toBeCalledTimes(2); No funciona porque se llama recursivamente
        expect(memoFactorial(3)).toBe(6);
        // expect(logger).toBeCalledTimes(2);
    })
})
