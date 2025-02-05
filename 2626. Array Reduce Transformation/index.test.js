import { it, expect } from "vitest";

import { reduce } from "./index.js";

// Input:
// nums = [1,2,3,4]
// fn = function sum(accum, curr) { return accum + curr; }
// init = 0
// Output: 10
// Explanation:
// initially, the value is init=0.
// (0) + nums[0] = 1
// (1) + nums[1] = 3
// (3) + nums[2] = 6
// (6) + nums[3] = 10
// The final answer is 10.

it("The final answer is 10.", () => {
  const nums = [1, 2, 3, 4];

  const fn = function sum(accum, curr) {
    return accum + curr;
  };

  const init = 0;

  expect(reduce(nums, fn, init)).toBe(10);
});

// Input:
// nums = [1,2,3,4]
// fn = function sum(accum, curr) { return accum + curr * curr; }
// init = 100
// Output: 130
// Explanation:
// initially, the value is init=100.
// (100) + nums[0] * nums[0] = 101
// (101) + nums[1] * nums[1] = 105
// (105) + nums[2] * nums[2] = 114
// (114) + nums[3] * nums[3] = 130
// The final answer is 130.

it("The final answer is 10.", () => {
  const nums = [1, 2, 3, 4];

  const fn = function sum(accum, curr) {
    return accum + curr * curr;
  };

  const init = 100;

  expect(reduce(nums, fn, init)).toBe(130);
});

// Input:
// nums = []
// fn = function sum(accum, curr) { return 0; }
// init = 25
// Output: 25
// Explanation: For empty arrays, the answer is always init.

it("The final answer is 10.", () => {
  const nums = [];

  const fn = function sum(accum, curr) {
    return 0;
  };

  const init = 25;

  expect(reduce(nums, fn, init)).toBe(25);
});
