import { it, expect, describe, afterEach, beforeEach, vi } from "vitest";

import { sleep } from "./index.js";

describe("2621. Sleep", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });
  // Input: millis = 100
  // Output: 100
  // Explanation: It should return a promise that resolves after 100ms.
  // let t = Date.now();
  // sleep(100).then(() => {
  //   console.log(Date.now() - t); // 100
  // });

  it("It should return a promise that resolves after 1000ms.", async () => {
    let result = 0;

    sleep(1000).then(() => {
      result = 1;
    });

    expect(result).toBe(0);
    vi.advanceTimersByTime(999);
    expect(result).toBe(0);
    await vi.advanceTimersByTime(1);
    expect(result).toBe(1);
  });

  // Input: millis = 200
  // Output: 200
  // Explanation: It should return a promise that resolves after 200ms.

  it("It should return a promise that resolves after 200ms.", async () => {
    let result = 0;

    sleep(200).then(() => {
      result = 1;
    });

    expect(result).toBe(0);
    vi.advanceTimersByTime(199);
    expect(result).toBe(0);
    await vi.advanceTimersByTime(1);
    expect(result).toBe(1);
  });
});
