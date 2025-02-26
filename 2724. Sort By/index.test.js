import { test, expect, describe } from "vitest";

import { sortBy } from "./index.js";

describe("2724. Sort By", () => {
  // Input: arr = [5, 4, 1, 2, 3], fn = (x) => x
  // Output: [1, 2, 3, 4, 5]
  // Explanation: fn simply returns the number passed to it so the array is sorted in ascending order.
  test("fn simply returns the number passed to it so the array is sorted in ascending order.", () => {
    const arr = [5, 4, 1, 2, 3];
    const fn = (x) => x;

    expect(sortBy(arr, fn)).toStrictEqual([1, 2, 3, 4, 5]);
  });

  // Input: arr = [{"x": 1}, {"x": 0}, {"x": -1}], fn = (d) => d.x
  // Output: [{"x": -1}, {"x": 0}, {"x": 1}]
  // Explanation: fn returns the value for the "x" key. So the array is sorted based on that value.
  test("fn returns the value for the 'x' key. So the array is sorted based on that value.", () => {
    const arr = [{ x: 1 }, { x: 0 }, { x: -1 }];
    const fn = (d) => d.x;

    expect(sortBy(arr, fn)).toStrictEqual([{ x: -1 }, { x: 0 }, { x: 1 }]);
  });

  // Input: arr = [[3, 4], [5, 2], [10, 1]], fn = (x) => x[1]
  // Output: [[10, 1], [5, 2], [3, 4]]
  // Explanation: arr is sorted in ascending order by number at index=1.
  test("arr is sorted in ascending order by number at index=1.", () => {
    const arr = [
      [3, 4],
      [5, 2],
      [10, 1],
    ];
    const fn = (x) => x[1];

    expect(sortBy(arr, fn)).toStrictEqual([
      [10, 1],
      [5, 2],
      [3, 4],
    ]);
  });
});
