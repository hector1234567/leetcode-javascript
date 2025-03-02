// Write a function that returns an infinite-method object.
// An infinite-method object is defined as an object that allows you to call any method and it will always return the name of the method.
// For example, if you execute obj.abc123(), it will return "abc123".

export const createInfiniteObject = function () {
  const handler = {
    get: function (obj, property) {
      return function () {
        return property;
      };
    },
  };

  return new Proxy({}, handler);
};
