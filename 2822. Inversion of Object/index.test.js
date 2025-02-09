import { it, expect } from "vitest";

import { invertedObj } from "./index.js";

// Input: obj = {"a": "1", "b": "2", "c": "3", "d": "4"}
// Output: invertedObj = {"1": "a", "2": "b", "3": "c", "4": "d"}
// Explanation: The keys from obj become the values in invertedObj, and the values from obj become the keys in invertedObj.
it('The keys from obj become the values in invertedObj, and the values from obj become the keys in invertedObj.', ()=>{
    const obj = {"a": "1", "b": "2", "c": "3", "d": "4"};

    expect(invertedObj(obj)).toStrictEqual({"1": "a", "2": "b", "3": "c", "4": "d"})
})

// Input: obj = {"a": "1", "b": "2", "c": "2", "d": "4"}
// Output: invertedObj = {"1": "a", "2": ["b", "c"], "4": "d"}
// Explanation: There are two keys in obj with the same value, the invertedObj mapped the value to an array containing all corresponding keys.
it('There are two keys in obj with the same value, the invertedObj mapped the value to an array containing all corresponding keys.', ()=>{
    const obj = {"a": "1", "b": "2", "c": "2", "d": "4"};

    expect(invertedObj(obj)).toStrictEqual({"1": "a", "2": ["b", "c"], "4": "d"})
})

// Input: obj = ["1", "2", "3", "4"]
// Output: invertedObj = {"1": "0", "2": "1", "3": "2", "4": "3"}
// Explanation: Arrays are also objects therefore array has changed to an object and the keys (indices) from obj become the values in invertedObj, and the values from obj become the keys in invertedObj.
it('Arrays are also objects therefore the values from obj become the keys in invertedObj.', ()=>{
    const obj = ["1", "2", "3", "4"];

    expect(invertedObj(obj)).toStrictEqual({"1": "0", "2": "1", "3": "2", "4": "3"})
})
