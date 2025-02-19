import { test, expect, describe } from "vitest";

import { createInfiniteObject } from "./index.js";

describe("2648. Generate Fibonacci Sequence", () => {
  // Input: method = "abc123"
  // Output: "abc123"
  // Explanation:
  // const obj = createInfiniteObject();
  // obj['abc123'](); // "abc123"
  // The returned string should always match the method name.
  test("The returned string should always match the method name.", () => {
    const obj = createInfiniteObject();

    expect(obj["abc123"]()).toBe("abc123");
  });

  // Input: method = ".-qw73n|^2It"
  // Output: ".-qw73n|^2It"
  // Explanation: The returned string should always match the method name.
  test("Explanation: The returned string should always match the method name.", () => {
    const obj = createInfiniteObject();

    expect(obj[".-qw73n|^2It"]()).toBe(".-qw73n|^2It");
  });
});
