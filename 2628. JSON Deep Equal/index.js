// Given two values o1 and o2, return a boolean value indicating whether two values, o1 and o2, are deeply equal.
// For two values to be deeply equal, the following conditions must be met:
// If both values are primitive types, they are deeply equal if they pass the === equality check.
// If both values are arrays, they are deeply equal if they have the same elements in the same order, and each element is also deeply equal according to these conditions.
// If both values are objects, they are deeply equal if they have the same keys, and the associated values for each key are also deeply equal according to these conditions.
// You may assume both values are the output of JSON.parse. In other words, they are valid JSON.
// Please solve it without using lodash's _.isEqual() function

export const deepEqual = function(o1, o2) {
    if(typeof o1 !== typeof o2) return false;

    if(Array.isArray(o1)) {
        if(!Array.isArray(o2)) return false;
        if(o1.length !== o2.length) return false;
        
        for(let i = 0; i < o2.length; i++) {
            if(!deepEqual(o1[i], o2[i])) return false;
        }
    } else if(typeof o1 === 'object') {
        if(o1 === null) return false;

        const keys1 = Object.keys(o1);
        const keys2 = Object.keys(o2);
        if(keys1.length !== keys2.length) return false;

        for(const key of keys1) {
            if(!o2.hasOwnProperty(key)) return false;
            if(!deepEqual(o1[key], o2[key])) return false;
        }
    } else {
        if(o1 !== o2) return false;
    }
    
    return true;
}