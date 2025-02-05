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
