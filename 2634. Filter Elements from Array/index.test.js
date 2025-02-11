import { it, test, expect } from "vitest";

import { filter } from "./index.js";

// Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
// Output: [20,30]
// Explanation:
// const newArray = filter(arr, fn); // [20, 30]
// The function filters out values that are not greater than 10
test('The function filters out values that are not greater than 10', () => {
    const arr = [0,10,20,30];
    const fn = function greaterThan10(n) { return n > 10; }

    expect(filter(arr, fn)).toStrictEqual([20, 30])
})

// Input: arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }
// Output: [1]
// Explanation:
// fn can also accept the index of each element
// In this case, the function removes elements not at index 0
test('In this case, the function removes elements not at index 0', () => {
    const arr = [1,2,3];
    const fn = function firstIndex(n, i) { return i === 0; }

    expect(filter(arr, fn)).toStrictEqual([1])
})

// Input: arr = [-2,-1,0,1,2], fn = function plusOne(n) { return n + 1 }
// Output: [-2,0,1,2]
// Explanation:
// Falsey values such as 0 should be filtered out
test('Falsey values such as 0 should be filtered out', () => {
    const arr = [-2,-1,0,1,2];
    const fn = function plusOne(n) { return n + 1 }

    expect(filter(arr, fn)).toStrictEqual([-2,0,1,2])
})