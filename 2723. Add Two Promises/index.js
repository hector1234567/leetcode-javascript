// Given two promises promise1 and promise2, return a new promise. promise1 and promise2 will both resolve with a number.
// The returned promise should resolve with the sum of the two numbers.

export const addTwoPromises = async function (promise1, promise2) {
  const [result1, result2] = await Promise.all([promise1, promise2]);

  return result1 + result2;
};
