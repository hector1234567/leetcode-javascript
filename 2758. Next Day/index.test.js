import { test, expect, describe, beforeAll } from "vitest";

import { nextDay } from "./index.js";

describe("2758. Next Day", () => {
  beforeAll(() => {
    Date.prototype.nextDay = nextDay;
  });
  // Input: date = "2014-06-20"
  // Output: "2014-06-21"
  // Explanation:
  // const date = new Date("2014-06-20");
  // date.nextDay(); // "2014-06-21"
  test("Next day is 2014-06-21", () => {
    const date = new Date("2014-06-20");

    expect(date.nextDay()).toBe("2014-06-21");
  });

  // Input: date = "2017-10-31"
  // Output: "2017-11-01"
  // Explanation: The day after 2017-10-31 is 2017-11-01.
  test(" The day after 2017-10-31 is 2017-11-01.", () => {
    const date = new Date("2017-10-31");

    expect(date.nextDay()).toBe("2017-11-01");
  });
});
