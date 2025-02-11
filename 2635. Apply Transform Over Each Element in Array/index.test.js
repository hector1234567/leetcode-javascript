import { test, expect, describe } from "vitest";

import { map } from "./index.js";

describe("2635. Apply Transform Over Each Element in Array", () => {
  // Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
  // Output: [2,3,4]
  // Explanation:
  // const newArray = map(arr, plusone); // [2,3,4]
  // The function increases each value in the array by one.
  test("The function increases each value in the array by one.", () => {
    const arr = [1, 2, 3];
    const fn = function plusone(n) {
      return n + 1;
    };

    expect(map(arr, fn)).toStrictEqual([2, 3, 4]);
  });

  // Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
  // Output: [1,3,5]
  // Explanation: The function increases each value by the index it resides in.
  test("Explanation: The function increases each value by the index it resides in.", () => {
    const arr = [1, 2, 3];
    const fn = function plusI(n, i) {
      return n + i;
    };

    expect(map(arr, fn)).toStrictEqual([1, 3, 5]);
  });

  // Input: arr = [10,20,30], fn = function constant() { return 42; }
  // Output: [42,42,42]
  // Explanation: The function always returns 42.
  test("Explanation: The function always returns 42.", () => {
    const arr = [10, 20, 30];
    const fn = function constant() {
      return 42;
    };

    expect(map(arr, fn)).toStrictEqual([42, 42, 42]);
  });
});
