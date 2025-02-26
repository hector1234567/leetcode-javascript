import { test, expect, describe, beforeAll } from "vitest";

import { forEach } from "./index.js";

// No sé como hacerlo si callback es una arrow function

describe("2804. Array Prototype ForEach", () => {
  beforeAll(() => {
    Array.prototype.forEach = forEach;
  });

  // Input:
  // arr = [1,2,3],
  // callback = (val, i, arr) => arr[i] = val * 2,
  // context = {"context":true}
  // Output: [2,4,6]
  // Explanation:
  // arr.forEach(callback, context)
  // console.log(arr) // [2,4,6]
  test("The callback is executed on each element of the array.", () => {
    const arr = [1, 2, 3];
    const callback = function (val, i, arr) {
      arr[i] = val * 2;
    };
    const context = { context: true };

    arr.forEach(callback, context);
    expect(arr).toStrictEqual([2, 4, 6]);
  });

  // Input:
  // arr = [true, true, false, false],
  // callback = (val, i, arr) => arr[i] = this,
  // context = {"context": false}
  // Output: [{"context":false},{"context":false},{"context":false},{"context":false}]
  // Explanation:
  // arr.forEach(callback, context)
  // console.log(arr) // [{"context":false},{"context":false},{"context":false},{"context":false}]

  //
  test("The callback is executed on each element of the array with the right context.", () => {
    const arr = [true, true, false, false];
    const callback = function (val, i, arr) {
      arr[i] = this;
    };
    const context = { context: false };

    arr.forEach(callback, context);
    expect(arr).toStrictEqual([
      { context: false },
      { context: false },
      { context: false },
      { context: false },
    ]);
  });

  // Input:
  // arr = [true, true, false, false],
  // callback = (val, i, arr) => arr[i] = !val,
  // context = {"context": 5}
  // Output: [false,false,true,true]
  test("Output is false,false,true,true", () => {
    const arr = [true, true, false, false];
    const callback = function (val, i, arr) {
      arr[i] = !val;
    };
    const context = { context: 5 };

    arr.forEach(callback, context);
    expect(arr).toStrictEqual([false, false, true, true]);
  });
});
