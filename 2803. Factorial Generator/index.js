// Write a generator function that takes an integer n as an argument and returns a generator object which yields the factorial sequence.
// The factorial sequence is defined by the relation n! = n * (n-1) * (n-2) * ... * 2 * 1​​​.
// The factorial of 0 is defined as 1.

export const factorial = function* (n) {
  let index = 1;
  let result = 1;
  yield result;
  while (index <= n) {
    index++;
    result *= index;
    yield result;
  }
};
