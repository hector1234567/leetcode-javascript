import { it, expect } from "vitest";

import { composition } from "./index.js";

// Input: functions = [x => x + 1, x => x * x, x => 2 * x], x = 4
// Output: 65
// Explanation:
// Evaluating from right to left ...
// Starting with x = 4.
// 2 * (4) = 8
// (8) * (8) = 64
// (64) + 1 = 65

it("The result is 65.", () => {
  const functions = [(x) => x + 1, (x) => x * x, (x) => 2 * x];
  const x = 4;

  expect(composition(functions, x)).toBe(65);
});

// Input: functions = [x => 10 * x, x => 10 * x, x => 10 * x], x = 1
// Output: 1000
// Explanation:
// Evaluating from right to left ...
// 10 * (1) = 10
// 10 * (10) = 100
// 10 * (100) = 1000

it("The result is 1000.", () => {
  const functions = [(x) => 10 * x, (x) => 10 * x, (x) => 10 * x];
  const x = 1;

  expect(composition(functions, x)).toBe(1000);
});

// Input: functions = [], x = 42
// Output: 42
// Explanation:
// The composition of zero functions is the identity function

it("The result is 42.", () => {
  const functions = [];
  const x = 42;

  expect(composition(functions, x)).toBe(42);
});
