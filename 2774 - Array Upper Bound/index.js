// Write code that enhances all arrays such that you can call the upperBound() method on any array and it will return the last index of a given target number.
// nums is a sorted ascending array of numbers that may contain duplicates. If the target number is not found in the array, return -1.

export const upperBound = function (number) {
  let response = -1;
  for (let i = 0; i < this.length; i++) {
    if (this.at(i) === number) response = i;
  }
  return response;
};

// OTRA FORMA
// Array.prototype.upperBound = function (target) {
//     let left = 0;
//     let right = this.length;
//     while (left < right) {
//         const mid = (left + right) >> 1;
//         if (this[mid] > target) {
//             right = mid;
//         } else {
//             left = mid + 1;
//         }
//     }
//     return left > 0 && this[left - 1] == target ? left - 1 : -1;
// };
