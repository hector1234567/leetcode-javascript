// Given an integer array arr and a mapping function fn, return a new array with a transformation applied to each element.
// The returned array should be created such that returnedArray[i] = fn(arr[i], i).
// Please solve it without the built-in Array.map method.
export const map = function (arr, fn) {
  const response = [];
  arr.forEach((element, i) => {
    response.push(fn(element, i));
  });
  return response;
};
