import { test, expect, describe } from "vitest";

import { createObject } from "./index.js";

describe("2794. Create Object from Two Arrays", () => {
  // Input: keysArr = ["a", "b", "c"], valuesArr = [1, 2, 3]
  // Output: {"a": 1, "b": 2, "c": 3}
  // Explanation: The keys "a", "b", and "c" are paired with the values 1, 2, and 3 respectively.
  test("The keys 'a', 'b', and 'c' are paired with the values 1, 2, and 3 respectively.", () => {
    const keysArr = ["a", "b", "c"];
    const valuesArr = [1, 2, 3];

    expect(createObject(keysArr, valuesArr)).toStrictEqual({
      a: 1,
      b: 2,
      c: 3,
    });
  });

  // Input: keysArr = ["1", 1, false], valuesArr = [4, 5, 6]
  // Output: {"1": 4, "false": 6}
  // Explanation: First, all the elements in keysArr are converted into strings. We can see there are two occurrences of "1". The value associated with the first occurrence of "1" is used: 4.
  test("First, all the elements in keysArr are converted into strings. We can see there are two occurrences of '1'. The value associated with the first occurrence of '1' is used: 4.", () => {
    const keysArr = ["1", 1, false];
    const valuesArr = [4, 5, 6];

    expect(createObject(keysArr, valuesArr)).toStrictEqual({ 1: 4, false: 6 });
  });

  // Input: keysArr = [], valuesArr = []
  // Output: {}
  // Explanation: There are no keys so an empty object is returned.
  test("There are no keys so an empty object is returned.", () => {
    const keysArr = [];
    const valuesArr = [];

    expect(createObject(keysArr, valuesArr)).toStrictEqual({});
  });
});
