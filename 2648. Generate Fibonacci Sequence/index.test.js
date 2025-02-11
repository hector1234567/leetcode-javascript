import { test, expect, describe } from "vitest";

import { fibGenerator } from "./index.js";

describe("2648. Generate Fibonacci Sequence", () => {
  // Input: callCount = 5
  // Output: [0,1,1,2,3]
  // Explanation:
  // const gen = fibGenerator();
  // gen.next().value; // 0
  // gen.next().value; // 1
  // gen.next().value; // 1
  // gen.next().value; // 2
  // gen.next().value; // 3
  test("Returns fibonacci serie.", () => {
    const gen = fibGenerator();

    expect(gen.next().value).toBe(0);
    expect(gen.next().value).toBe(1);
    expect(gen.next().value).toBe(1);
    expect(gen.next().value).toBe(2);
    expect(gen.next().value).toBe(3);
  });

  // Input: callCount = 0
  // Output: []
  // Explanation: gen.next() is never called so nothing is outputted
  // test("gen.next() is never called so nothing is outputted", () => {
  // });
});
