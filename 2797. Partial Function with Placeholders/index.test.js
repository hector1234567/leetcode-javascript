import { test, expect, describe, beforeAll } from "vitest";

import { partial } from "./index.js";

describe("2797. Partial Function with Placeholders", () => {
// Input: fn = (...args) => args, args = [2,4,6], restArgs = [8,10]
// Output: [2,4,6,8,10]
// Explanation: 
// const partialFn = partial(fn, args)
// const result = partialFn(...restArgs) 
// console.log(result) // [2,4,6,8,10]
// There are no placeholders "_" in args therefore restArgs is just added at the end of args. 
// Then the elements of the args are passed as separate arguments to fn, which returns passed arguments as an array.
test("There are no placeholders '_' in args. Returns passed arguments as an array.", () => {
    const fn = (...args) => args;
    const args = [2,4,6];
    const restArgs = [8,10];

    const partialFn = partial(fn, args)
    const result = partialFn(...restArgs) 

    expect(result).toStrictEqual([2,4,6,8,10])
})

// Input: fn = (...args) => args, args = [1,2,"_",4,"_",6], restArgs = [3,5]
// Output: [1,2,3,4,5,6]
// Explanation: 
// const partialFn = partial(fn, args) 
// const result = partialFn(...restArgs) 
// console.log(result) // [1,2,3,4,5,6] 
// Placeholders "_" are replaced with values from the restArgs. 
// Then the elements of the args are passed as separate arguments to fn, which returns passed arguments as an array.
test("There are no placeholders '_' in args. Returns passed arguments as an array.", () => {
    const fn = (...args) => args;
    const args = [1,2,"_",4,"_",6];
    const restArgs = [3,5];

    const partialFn = partial(fn, args)
    const result = partialFn(...restArgs) 
    
    expect(result).toStrictEqual([1,2,3,4,5,6])
})

// Input: fn = (a, b, c) => b + a - c, args = ["_", 5], restArgs = [5, 20]
// Output: -10
// Explanation: 
// const partialFn = partial(fn, args)
// const result = partialFn(...restArgs)
// console.log(result) // -10
// Placeholder "_" is replaced with 5 and 20 is added at the end of args. Then the elements of the args ar
test("There are no placeholders '_' in args. Returns passed arguments as an array.", () => {
    const fn = (a, b, c) => b + a - c;
    const args = ["_", 5];
    const restArgs = [5, 20];

    const partialFn = partial(fn, args)
    const result = partialFn(...restArgs) 
    
    expect(result).toStrictEqual(-10)
})
})