import { it, expect } from "vitest";

import { sleep } from "./index.js";

// Input: millis = 100
// Output: 100
// Explanation: It should return a promise that resolves after 100ms.
// let t = Date.now();
// sleep(100).then(() => {
//   console.log(Date.now() - t); // 100
// });

it("It should return a promise that resolves after 1000ms.", async () => {
  let t = performance.now();

  await sleep(1000);

  const result = performance.now() - t;

  expect(result).toBeGreaterThanOrEqual(1000);
  expect(result).toBeLessThanOrEqual(1020);
});

// Input: millis = 200
// Output: 200
// Explanation: It should return a promise that resolves after 200ms.

it("It should return a promise that resolves after 2000ms.", async () => {
  let t = performance.now();

  await sleep(2000);

  const result = performance.now() - t;

  expect(result).toBeGreaterThanOrEqual(2000);
  expect(result).toBeLessThanOrEqual(2020);
});
