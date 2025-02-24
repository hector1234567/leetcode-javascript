// Given an object or an array, return if it is empty.
//  An empty object contains no key-value pairs.
//  An empty array contains no elements.
// You may assume the object or array is the output of JSON.parse.

export var isEmpty = function(obj) {
    return Object.keys(obj).length === 0;
};
