import { test, expect, describe, afterEach, beforeEach, vi } from "vitest";

import { cancellable } from "./index.js";

describe("2725. Interval Cancellation", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });
  // Input: fn = (x) => x * 2, args = [4], t = 35
  // Output:
  // [
  //    {"time": 0, "returned": 8},
  //    {"time": 35, "returned": 8},
  //    {"time": 70, "returned": 8},
  //    {"time": 105, "returned": 8},
  //    {"time": 140, "returned": 8},
  //    {"time": 175, "returned": 8}
  // ]
  // Explanation:
  // const cancelTimeMs = 190;
  // const cancelFn = cancellable((x) => x * 2, [4], 35);
  // setTimeout(cancelFn, cancelTimeMs);

  // Every 35ms, fn(4) is called. Until t=190ms, then it is cancelled.
  // 1st fn call is at 0ms. fn(4) returns 8.
  // 2nd fn call is at 35ms. fn(4) returns 8.
  // 3rd fn call is at 70ms. fn(4) returns 8.
  // 4th fn call is at 105ms. fn(4) returns 8.
  // 5th fn call is at 140ms. fn(4) returns 8.
  // 6th fn call is at 175ms. fn(4) returns 8.
  // Cancelled at 190ms
  test("Cancelled at 190ms", async () => {
    let result = [];

    const fn = (x) => x * 2;
    const args = [4],
      t = 35,
      cancelTimeMs = 190;

    const log = (...argsArr) => {
      result.push(fn(...argsArr));
    };

    const cancel = cancellable(log, args, t);

    setTimeout(cancel, cancelTimeMs);

    expect(result).toStrictEqual([8]);
    vi.advanceTimersByTime(35);
    expect(result).toStrictEqual([8, 8]);
    vi.advanceTimersByTime(35);
    expect(result).toStrictEqual([8, 8, 8]);
    vi.advanceTimersByTime(35);
    expect(result).toStrictEqual([8, 8, 8, 8]);
    vi.advanceTimersByTime(35);
    expect(result).toStrictEqual([8, 8, 8, 8, 8]);
    vi.advanceTimersByTime(35);
    expect(result).toStrictEqual([8, 8, 8, 8, 8, 8]);
    vi.advanceTimersByTime(35);
    expect(result).toStrictEqual([8, 8, 8, 8, 8, 8]);
  });

  // Input: fn = (x1, x2) => (x1 * x2), args = [2, 5], t = 30
  // Output:
  // [
  //    {"time": 0, "returned": 10},
  //    {"time": 30, "returned": 10},
  //    {"time": 60, "returned": 10},
  //    {"time": 90, "returned": 10},
  //    {"time": 120, "returned": 10},
  //    {"time": 150, "returned": 10}
  // ]
  // Explanation:
  // const cancelTimeMs = 165;
  // const cancelFn = cancellable((x1, x2) => (x1 * x2), [2, 5], 30)
  // setTimeout(cancelFn, cancelTimeMs)

  // Every 30ms, fn(2, 5) is called. Until t=165ms, then it is cancelled.
  // 1st fn call is at 0ms
  // 2nd fn call is at 30ms
  // 3rd fn call is at 60ms
  // 4th fn call is at 90ms
  // 5th fn call is at 120ms
  // 6th fn call is at 150ms
  // Cancelled at 165ms
  test("Cancelled at 165ms", (done) => {
    const result = [];

    const fn = (x1, x2) => x1 * x2;
    const args = [2, 5],
      t = 30,
      cancelTimeMs = 165;

    const log = (...argsArr) => {
      result.push(fn(...argsArr));
    };

    const cancel = cancellable(log, args, t);

    setTimeout(cancel, cancelTimeMs);

    expect(result).toStrictEqual([10]);
    vi.advanceTimersByTime(30);
    expect(result).toStrictEqual([10, 10]);
    vi.advanceTimersByTime(1000);
    expect(result).toStrictEqual([10, 10, 10, 10, 10, 10]);
  });

  // Input: fn = (x1, x2, x3) => (x1 + x2 + x3), args = [5, 1, 3], t = 50
  // Output:
  // [
  //    {"time": 0, "returned": 9},
  //    {"time": 50, "returned": 9},
  //    {"time": 100, "returned": 9},
  //    {"time": 150, "returned": 9}
  // ]
  // Explanation:
  // const cancelTimeMs = 180;
  // const cancelFn = cancellable((x1, x2, x3) => (x1 + x2 + x3), [5, 1, 3], 50)
  // setTimeout(cancelFn, cancelTimeMs)

  // Every 50ms, fn(5, 1, 3) is called. Until t=180ms, then it is cancelled.
  // 1st fn call is at 0ms
  // 2nd fn call is at 50ms
  // 3rd fn call is at 100ms
  // 4th fn call is at 150ms
  // Cancelled at 180ms
  test("Cancelled at 180ms", (done) => {
    const result = [];

    const fn = (x1, x2, x3) => x1 + x2 + x3;
    const args = [5, 1, 3],
      t = 50,
      cancelTimeMs = 180;

    const log = (...argsArr) => {
      result.push(fn(...argsArr));
    };

    const cancel = cancellable(log, args, t);

    setTimeout(cancel, cancelTimeMs);

    expect(result).toStrictEqual([9]);
    vi.advanceTimersByTime(50);
    expect(result).toStrictEqual([9, 9]);
    vi.advanceTimersByTime(1000);
    expect(result).toStrictEqual([9, 9, 9, 9]);
  });
});
