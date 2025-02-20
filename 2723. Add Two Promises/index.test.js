import { test, expect, describe } from "vitest";

import { addTwoPromises } from "./index.js";

describe("2723. Add Two Promises", () => {
  // Input:
  // promise1 = new Promise(resolve => setTimeout(() => resolve(2), 20)),
  // promise2 = new Promise(resolve => setTimeout(() => resolve(5), 60))
  // Output: 7
  // Explanation: The two input promises resolve with the values of 2 and 5 respectively. The returned promise should resolve with a value of 2 + 5 = 7.
  // The time the returned promise resolves is not judged for this problem.
  test("The returned promise should resolve with a value of 2 + 5 = 7.", async () => {
    const promise1 = new Promise((resolve) => setTimeout(() => resolve(2), 20));
    const promise2 = new Promise((resolve) => setTimeout(() => resolve(5), 60));

    const result = await addTwoPromises(promise1, promise2);

    expect(result).toBe(7);
  });

  // Input:
  // promise1 = new Promise(resolve => setTimeout(() => resolve(10), 50)),
  // promise2 = new Promise(resolve => setTimeout(() => resolve(-12), 30))
  // Output: -2
  // Explanation: The two input promises resolve with the values of 10 and -12 respectively. The returned promise should resolve with a value of 10 + -12 = -2.
  test("The returned promise should resolve with a value of 10 + -12 = -2.", async () => {
    const promise1 = new Promise((resolve) => setTimeout(() => resolve(2), 20));
    const promise2 = new Promise((resolve) => setTimeout(() => resolve(5), 60));

    const result = await addTwoPromises(promise1, promise2);

    expect(result).toBe(7);
  });
});
