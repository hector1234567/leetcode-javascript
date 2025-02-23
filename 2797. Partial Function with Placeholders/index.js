// Given a function fn and an array args, return a function partialFn. 

// Placeholders "_" in the args should be replaced with values from restArgs starting from index 0. 
// Any remaining values in the restArgs should be added at the end of the args.

// partialFn should return a result of fn. fn should be called with the elements of the modified args passed as separate arguments.

export const partial = function(fn, args) {
    return function(...restArgs) {
        const newArgs = args.map((el) => {
            return el === '_' ? restArgs.shift() : el;
        });
        return fn(...newArgs.concat(restArgs));
    }
}
