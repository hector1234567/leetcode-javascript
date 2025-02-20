import { test, expect, describe, afterEach, beforeEach, vi } from "vitest";

import { cancellable } from "./index.js";

describe("2715. Timeout Cancellation", () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  afterEach(() => {
    vi.useRealTimers();
  });
  // Input: fn = (x) => x * 5, args = [2], t = 20
  // Output: [{"time": 20, "returned": 10}]
  // Explanation:
  // const cancelTimeMs = 50;
  // const cancelFn = cancellable((x) => x * 5, [2], 20);
  // setTimeout(cancelFn, cancelTimeMs);
  // The cancellation was scheduled to occur after a delay of cancelTimeMs (50ms), which happened after the execution of fn(2) at 20ms.
  test("The cancellation was scheduled to occur after a delay of cancelTimeMs (50ms), which happened after the execution of fn(2) at 20ms.", async () => {
    const result = [];

    const fn = (x) => x * 5;
    const args = [2];
    const t = 20;
    const cancelTimeMs = 50;

    const log = (...argsArr) => {
      result.push(fn(...argsArr));
    };

    const cancel = cancellable(log, args, t);

    const maxT = Math.max(t, cancelTimeMs);

    setTimeout(cancel, cancelTimeMs);

    expect(result).toStrictEqual([]);
    vi.advanceTimersByTime(20);
    expect(result).toStrictEqual([10]);
    await vi.advanceTimersByTime(30);
    expect(result).toStrictEqual([10]);
  });

  // Input: fn = (x) => x**2, args = [2], t = 100
  // Output: []
  // Explanation:
  // const cancelTimeMs = 50;
  // const cancelFn = cancellable((x) => x**2, [2], 100);
  // setTimeout(cancelFn, cancelTimeMs);
  // The cancellation was scheduled to occur after a delay of cancelTimeMs (50ms), which happened before the execution of fn(2) at 100ms, resulting in fn(2) never being called.
  test("The cancellation was scheduled to occur after a delay of cancelTimeMs (50ms), which happened before the execution of fn(2) at 100ms, resulting in fn(2) never being called.", async () => {
    const result = [];

    const fn = (x) => x ** 2;
    const args = [2];
    const t = 100;
    const cancelTimeMs = 50;

    const log = (...argsArr) => {
      result.push(fn(...argsArr));
    };

    const cancel = cancellable(log, args, t);

    setTimeout(cancel, cancelTimeMs);

    expect(result).toStrictEqual([]);
    vi.advanceTimersByTime(50);
    expect(result).toStrictEqual([]);
    await vi.advanceTimersByTime(100);
    expect(result).toStrictEqual([]);
  });

  // Input: fn = (x1, x2) => x1 * x2, args = [2,4], t = 30
  // Output: [{"time": 30, "returned": 8}]
  // Explanation:
  // const cancelTimeMs = 100;
  // const cancelFn = cancellable((x1, x2) => x1 * x2, [2,4], 30);
  // setTimeout(cancelFn, cancelTimeMs);
  // The cancellation was scheduled to occur after a delay of cancelTimeMs (100ms), which happened after the execution of fn(2,4) at 30ms.
  test("The cancellation was scheduled to occur after a delay of cancelTimeMs (100ms), which happened after the execution of fn(2,4) at 30ms.", async () => {
    const result = [];

    const fn = (x1, x2) => x1 * x2;
    const args = [2, 4],
      t = 30,
      cancelTimeMs = 100;

    const log = (...argsArr) => {
      result.push(fn(...argsArr));
    };

    const cancel = cancellable(log, args, t);

    setTimeout(cancel, cancelTimeMs);

    expect(result).toStrictEqual([]);
    vi.advanceTimersByTime(30);
    expect(result).toStrictEqual([8]);
    await vi.advanceTimersByTime(100);
    expect(result).toStrictEqual([8]);
  });
});
