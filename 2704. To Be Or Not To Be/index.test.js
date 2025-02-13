import { test, expect, describe } from "vitest";

import { expect2 } from "./index.js";

describe("2704. To Be Or Not To Be", () => {
    // Input: func = () => expect(5).toBe(5)
    // Output: {"value": true}
    // Explanation: 5 === 5 so this expression returns true.
  test("5 === 5 so this expression returns true.", () => {
    const func = () => expect2(5).toBe(5);
    
    expect(func()).toBe(true); 
  });
    
    // Input: func = () => expect(5).toBe(null)
    // Output: {"error": "Not Equal"}
    // Explanation: 5 !== null so this expression throw the error "Not Equal".
  test("5 !== null so this expression throw the error Not Equal.", () => {
    const func = () => expect2(5).toBe(null);
    
    expect(func).toThrow("Not Equal"); 
  });
    
    // Input: func = () => expect(5).notToBe(null)
    // Output: {"value": true}
    // Explanation: 5 !== null so this expression returns true.
  test("5 !== null so this expression returns true.", () => {
    const func = () => expect2(5).notToBe(null);
    
    expect(func()).toBe(true); 
  });
})