import { test, expect, describe } from "vitest";

import { once } from "./index.js";

describe("2666. Allow One Function Call", () => {
// Input: fn = (a,b,c) => (a + b + c), calls = [[1,2,3],[2,3,6]]
// Output: [{"calls":1,"value":6}]
// Explanation:
// const onceFn = once(fn);
// onceFn(1, 2, 3); // 6
// onceFn(2, 3, 6); // undefined, fn was not called
  test("Returns 6 and undefined.", () => {
    const fn = (a,b,c) => (a + b + c);

    const onceFn = once(fn);
    expect(onceFn(1, 2, 3)).toBe(6); 
    expect(onceFn(2, 3, 6)).toBeUndefined(); 
  });

// Input: fn = (a,b,c) => (a * b * c), calls = [[5,7,4],[2,3,6],[4,6,8]]
// Output: [{"calls":1,"value":140}]
// Explanation:
// const onceFn = once(fn);
// onceFn(5, 7, 4); // 140
// onceFn(2, 3, 6); // undefined, fn was not called
// onceFn(4, 6, 8); // undefined, fn was not called
  test("Returns 140, undefined and undefined.", () => {
    const fn = (a,b,c) => (a * b * c);

    const onceFn = once(fn);
    expect(onceFn(5, 7, 4)).toBe(140); 
    expect(onceFn(2, 3, 6)).toBeUndefined(); 
    expect(onceFn(4, 6, 8)).toBeUndefined(); 
  });
})