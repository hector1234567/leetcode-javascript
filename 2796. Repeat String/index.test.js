import { test, expect, describe, beforeAll } from "vitest";

import { replicate } from "./index.js";

describe("2796. Repeat String", () => {
  beforeAll(() => {
    String.prototype.replicate = replicate;
  });

  // Input: str = "hello", times = 2
  // Output: "hellohello"
  // Explanation: "hello" is repeated 2 times
  test("'hello' is repeated 2 times", () => {
    const str = "hello";
    const times = 2;

    expect(str.replicate(times)).toBe("hellohello");
  });

  // Input: str = "code", times = 3
  // Output: "codecodecode"
  // Explanation: "code" is repeated 3 times
  test("'code' is repeated 3 times", () => {
    const str = "code";
    const times = 3;

    expect(str.replicate(times)).toBe("codecodecode");
  });

  // Input: str = "js", times = 1
  // Output: "js"
  // Explanation: "js" is repeated 1 time
  test("'js' is repeated 1 time", () => {
    const str = "js";
    const times = 1;

    expect(str.replicate(times)).toBe("js");
  });
});
