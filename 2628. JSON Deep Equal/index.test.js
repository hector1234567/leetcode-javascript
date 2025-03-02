
import { test, expect, describe, vi } from "vitest";

import { deepEqual } from "./index.js";

describe("2628. JSON Deep Equal", () => {
    // Input: o1 = {"x":1,"y":2}, o2 = {"x":1,"y":2}
    // Output: true
    // Explanation: The keys and values match exactly.
    test("The keys and values match exactly.", () => {
        const o1 = {"x":1,"y":2};
        const o2 = {"x":1,"y":2};

        expect(deepEqual(o1, o2)).toBe(true);
    })

    // Input: o1 = {"y":2,"x":1}, o2 = {"x":1,"y":2}
    // Output: true
    // Explanation: Although the keys are in a different order, they still match exactly.
    test("Although the keys are in a different order, they still match exactly.", () => {
        const o1 = {"y":2,"x":1};
        const o2 = {"x":1,"y":2};

        expect(deepEqual(o1, o2)).toBe(true);
    })

    // Input: o1 = {"x":null,"L":[1,2,3]}, o2 = {"x":null,"L":["1","2","3"]}
    // Output: false
    // Explanation: The array of numbers is different from the array of strings.
    test("The array of numbers is different from the array of strings.", () => {
        const o1 = {"x":null,"L":[1,2,3]};
        const o2 = {"x":null,"L":["1","2","3"]};

        expect(deepEqual(o1, o2)).toBe(false);
    })

    // Input: o1 = true, o2 = false
    // Output: false
    // Explanation: true !== false
    test("true !== false", () => {
        const o1 = true;
        const o2 = false;

        expect(deepEqual(o1, o2)).toBe(false);
    })
})