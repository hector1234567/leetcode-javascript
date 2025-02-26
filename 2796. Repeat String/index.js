// Write code that enhances all strings such that you can call the string.replicate(x) method on any string and it will return repeated string x times.
// Try to implement it without using the built-in method string.repeat.

export const replicate = function (times) {
  let response = "";
  for (let i = 0; i < times; i++) {
    response += this;
  }
  return response;
};

// OTRA FORMA
// String.prototype.replicate = function (times: number) {
//     return new Array(times).fill(this).join('');
// };
