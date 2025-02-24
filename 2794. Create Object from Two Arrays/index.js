// Given two arrays keysArr and valuesArr, return a new object obj. Each key-value pair in obj should come from keysArr[i] and valuesArr[i].
// If a duplicate key exists at a previous index, that key-value should be excluded. In other words, only the first key should be added to the object.
// If the key is not a string, it should be converted into a string by calling String() on it.

export const createObject = function (keysArr, valuesArr) {
  let obj = {};

  for (let i = 0; i < keysArr.length; i++) {
    const key = String(keysArr[i]);

    if (obj[key] === undefined) {
      obj[key] = valuesArr[i];
    }
  }

  return obj;
};
