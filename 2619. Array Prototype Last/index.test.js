import { it, expect } from "vitest";

import { last } from "./index.js";

// Input: nums = [null, {}, 3]
// Output: 3
// Explanation: Calling nums.last() should return the last element: 3.

it("Calling nums.last() should return the last element: 3.", () => {
  const nums = [null, {}, 3];

  Array.prototype.last = last;

  const result = nums.last();

  expect(result).toBe(3);
});

// Input: nums = []
// Output: -1
// Explanation: Because there are no elements, return -1.

it("Calling nums.last() should return the last element: 3.", () => {
  const nums = [];

  Array.prototype.last = last;

  const result = nums.last();

  expect(result).toBe(-1);
});
