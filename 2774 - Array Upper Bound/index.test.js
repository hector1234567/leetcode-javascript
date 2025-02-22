import { test, expect, describe, beforeAll } from "vitest";

import { upperBound } from "./index.js";

describe("2774. Array Upper Bound", () => {
  beforeAll(() => {
    Array.prototype.upperBound = upperBound;
  });

  // Input: nums = [3,4,5], target = 5
  // Output: 2
  // Explanation: Last index of target value is 2
  test("Last index of target value is 2", () => {
    const nums = [3, 4, 5];
    const target = 5;

    expect(nums.upperBound(target)).toBe(2);
  });

  // Input: nums = [1,4,5], target = 2
  // Output: -1
  // Explanation: Because there is no digit 2 in the array, return -1.
  test("Because there is no digit 2 in the array, return -1.", () => {
    const nums = [1, 4, 5];
    const target = 2;

    expect(nums.upperBound(target)).toBe(-1);
  });

  //   Input: nums = [3,4,6,6,6,6,7], target = 6
  //   Output: 5
  //   Explanation: Last index of target value is 5
  test("Last index of target value is 5", () => {
    const nums = [3, 4, 6, 6, 6, 6, 7];
    const target = 6;

    expect(nums.upperBound(target)).toBe(5);
  });
});
