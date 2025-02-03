// Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.
// You may assume the array is the output of JSON.parse.

export const last = function () {
  if (!this.length) return -1;
  return this.at(-1);
};
