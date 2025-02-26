import { test, expect, describe } from "vitest";

import { factorial } from "./index.js";

describe("2803. Factorial Generator", () => {
  // Input: n = 5
  // Output: [1,2,6,24,120]
  // Explanation:
  // const gen = factorial(5)
  // gen.next().value // 1
  // gen.next().value // 2
  // gen.next().value // 6
  // gen.next().value // 24
  // gen.next().value // 120
  test("Outputs are [1,2,6,24,120]", () => {
    const gen = factorial(5);

    expect(gen.next().value).toBe(1);
    expect(gen.next().value).toBe(2);
    expect(gen.next().value).toBe(6);
    expect(gen.next().value).toBe(24);
    expect(gen.next().value).toBe(120);
  });

  // Input: n = 2
  // Output: [1,2]
  // Explanation:
  // const gen = factorial(2)
  // gen.next().value // 1
  // gen.next().value // 2
  test("Outputs are [1,2]", () => {
    const gen = factorial(2);

    expect(gen.next().value).toBe(1);
    expect(gen.next().value).toBe(2);
  });

  // Input: n = 0
  // Output: [1]
  // Explanation:
  // const gen = factorial(0)
  // gen.next().value // 1
  test("Outputs is [1]", () => {
    const gen = factorial(0);

    expect(gen.next().value).toBe(1);
  });
});
