import { it, expect } from "vitest";

import { isEmpty } from "./index.js";

// Input: obj = {"x": 5, "y": 42}
// Output: false
// Explanation: The object has 2 key-value pairs so it is not empty.
it('The object has 2 key-value pairs so it is not empty.', () => {
    const obj = {"x": 5, "y": 42};

    expect(isEmpty(obj)).toBe(false)
})

// Input: obj = {}
// Output: true
// Explanation: The object doesn't have any key-value pairs so it is empty.
it('The object doesnt have any key-value pairs so it is empty.', () => {
    const obj = {};

    expect(isEmpty(obj)).toBe(true)
})

// Input: obj = [null, false, 0]
// Output: false
// Explanation: The array has 3 elements so it is not empty.
it('The array has 3 elements so it is not empty.', () => {
    const obj = [null, false, 0];

    expect(isEmpty(obj)).toBe(false)
})