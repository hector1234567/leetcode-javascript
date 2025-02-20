import { test, expect, describe } from "vitest";

import { cancellable } from "./index.js";

describe("2715. Timeout Cancellation", () => {
  // Input: fn = (x) => x * 5, args = [2], t = 20
  // Output: [{"time": 20, "returned": 10}]
  // Explanation:
  // const cancelTimeMs = 50;
  // const cancelFn = cancellable((x) => x * 5, [2], 20);
  // setTimeout(cancelFn, cancelTimeMs);
  // The cancellation was scheduled to occur after a delay of cancelTimeMs (50ms), which happened after the execution of fn(2) at 20ms.
  test("The cancellation was scheduled to occur after a delay of cancelTimeMs (50ms), which happened after the execution of fn(2) at 20ms.", (done) => {
    const result = [];

    const fn = (x) => x * 5;
    const args = [2],
      t = 20,
      cancelTimeMs = 50;

    const start = performance.now();

    const log = (...argsArr) => {
      const diff = Math.floor(performance.now() - start);
      result.push({ time: diff, returned: fn(...argsArr) });
    };

    const cancel = cancellable(log, args, t);

    const maxT = Math.max(t, cancelTimeMs);

    setTimeout(cancel, cancelTimeMs);

    setTimeout(() => {
      expect(result[0].time).toBe(20);
      expect(result[0].returned).toBe(10); // [{"time":20,"returned":10}]
      done();
    }, maxT + 15);
  });

  // Input: fn = (x) => x**2, args = [2], t = 100
  // Output: []
  // Explanation:
  // const cancelTimeMs = 50;
  // const cancelFn = cancellable((x) => x**2, [2], 100);
  // setTimeout(cancelFn, cancelTimeMs);
  // The cancellation was scheduled to occur after a delay of cancelTimeMs (50ms), which happened before the execution of fn(2) at 100ms, resulting in fn(2) never being called.
  test("The cancellation was scheduled to occur after a delay of cancelTimeMs (50ms), which happened before the execution of fn(2) at 100ms, resulting in fn(2) never being called.", (done) => {
    const result = [];

    const fn = (x) => x ** 2;
    const args = [2],
      t = 100,
      cancelTimeMs = 50;

    const start = performance.now();

    const log = (...argsArr) => {
      const diff = Math.floor(performance.now() - start);
      result.push({ time: diff, returned: fn(...argsArr) });
    };

    const cancel = cancellable(log, args, t);

    const maxT = Math.max(t, cancelTimeMs);

    setTimeout(cancel, cancelTimeMs);

    setTimeout(() => {
      expect(result.length).toBe(0);
      done();
    }, maxT + 15);
  });

  // Input: fn = (x1, x2) => x1 * x2, args = [2,4], t = 30
  // Output: [{"time": 30, "returned": 8}]
  // Explanation:
  // const cancelTimeMs = 100;
  // const cancelFn = cancellable((x1, x2) => x1 * x2, [2,4], 30);
  // setTimeout(cancelFn, cancelTimeMs);
  // The cancellation was scheduled to occur after a delay of cancelTimeMs (100ms), which happened after the execution of fn(2,4) at 30ms.
  test("The cancellation was scheduled to occur after a delay of cancelTimeMs (100ms), which happened after the execution of fn(2,4) at 30ms.", (done) => {
    const result = [];

    const fn = (x1, x2) => x1 * x2;
    const args = [2, 4],
      t = 30,
      cancelTimeMs = 100;

    const start = performance.now();

    const log = (...argsArr) => {
      const diff = Math.floor(performance.now() - start);
      result.push({ time: diff, returned: fn(...argsArr) });
    };

    const cancel = cancellable(log, args, t);

    const maxT = Math.max(t, cancelTimeMs);

    setTimeout(cancel, cancelTimeMs);

    setTimeout(() => {
      expect(result[0].time).toBe(30);
      expect(result[0].returned).toBe(8); // [{"time":20,"returned":10}]
      done();
    }, maxT + 15);
  });
});
