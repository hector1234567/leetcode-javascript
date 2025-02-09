// Given an object obj, return an inverted object invertedObj.
// The invertedObj should have the keys of obj as values and the values of obj as keys. 
// It is guaranteed that the values in obj are only strings. 
// The function should handle duplicates, meaning that if there are multiple keys in obj with the same value, 
// the invertedObj should map the value to an array containing all corresponding keys.

export function invertedObj(obj) {
    let result = {};
    for(const [key, value] of Object.entries(obj)) {
        if(obj.hasOwnProperty(result[value])) {
            result[value] = [...result[value], String(key)];
        } else {
            result[value] = String(key);
        }
    }
    return result;
}
