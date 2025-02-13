import { test, expect, describe } from "vitest";

import { ArrayWrapper } from "./index.js";

describe("2695. Array Wrapper", () => {
    // Input: nums = [[1,2],[3,4]], operation = "Add"
    // Output: 10
    // Explanation:
    // const obj1 = new ArrayWrapper([1,2]);
    // const obj2 = new ArrayWrapper([3,4]);
    // obj1 + obj2; // 10
  test("The arr has been split into subarrays each with 1 element.", () => {
    const obj1 = new ArrayWrapper([1,2]);
    const obj2 = new ArrayWrapper([3,4]);
    
    expect(obj1 + obj2).toBe(10); 
  });
    
    // Input: nums = [[23,98,42,70]], operation = "String"
    // Output: "[23,98,42,70]"
    // Explanation:
    // const obj = new ArrayWrapper([23,98,42,70]);
    // String(obj); // "[23,98,42,70]"
  test("The arr has been split into subarrays each with 1 element.", () => {
    const obj = new ArrayWrapper([23,98,42,70]);

    expect(String(obj)).toBe("[23,98,42,70]"); 
  });
    
    // Input: nums = [[],[]], operation = "Add"
    // Output: 0
    // Explanation:
    // const obj1 = new ArrayWrapper([]);
    // const obj2 = new ArrayWrapper([]);
    // obj1 + obj2; // 0
  test("The arr has been split into subarrays each with 1 element.", () => {
    const obj1 = new ArrayWrapper([]);
    const obj2 = new ArrayWrapper([]);
    
    expect(obj1 + obj2).toBe(0); 
  });
})