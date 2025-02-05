import { it, expect } from "vitest";

import { counter } from "./index.js";

// Input:
// n = 10
// ["call","call","call"]
// Output: [10,11,12]
// Explanation:
// counter() = 10 // The first time counter() is called, it returns n.
// counter() = 11 // Returns 1 more than the previous time.
// counter() = 12 // Returns 1 more than the previous time.

it("The first time counter() is called, it returns n. Returns 1 more than the previous time.", () => {
  const n = 10;

  const f = counter(n);

  let result = f();
  expect(result).toBe(10);

  result = f();
  expect(result).toBe(11);

  result = f();
  expect(result).toBe(12);
});

// Input:
// n = -2
// ["call","call","call","call","call"]
// Output: [-2,-1,0,1,2]
// Explanation: counter() initially returns -2. Then increases after each sebsequent call.

it("Initially returns -2. Then increases after each sebsequent call.", () => {
  const n = -2;

  const f = counter(n);

  let result = f();
  expect(result).toBe(-2);

  result = f();
  expect(result).toBe(-1);

  result = f();
  expect(result).toBe(0);

  result = f();
  expect(result).toBe(1);

  result = f();
  expect(result).toBe(2);
});
