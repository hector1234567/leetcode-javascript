import { test, expect, describe } from "vitest";

import { createCounter } from "./index.js";

describe("2665. Counter II", () => {
// Input: init = 5, calls = ["increment","reset","decrement"]
// Output: [6,5,4]
// Explanation:
// const counter = createCounter(5);
// counter.increment(); // 6
// counter.reset(); // 5
// counter.decrement(); // 4
  test("Returns correct values [6,5,4].", () => {
    const counter = createCounter(5);

    expect(counter.increment()).toBe(6);
    expect(counter.reset()).toBe(5);
    expect(counter.decrement()).toBe(4);
  });

// Input: init = 0, calls = ["increment","increment","decrement","reset","reset"]
// Output: [1,2,1,0,0]
// Explanation:
// const counter = createCounter(0);
// counter.increment(); // 1
// counter.increment(); // 2
// counter.decrement(); // 1
// counter.reset(); // 0
// counter.reset(); // 0
  test("Returns correct values [1,2,1,0,0].", () => {
    const counter = createCounter(0);

    expect(counter.increment()).toBe(1);
    expect(counter.increment()).toBe(2);
    expect(counter.decrement()).toBe(1);
    expect(counter.reset()).toBe(0);
    expect(counter.reset()).toBe(0);
  });
})