// Write a function createCounter. It should accept an initial integer init. It should return an object with three functions.
// The three functions are:
// increment() increases the current value by 1 and then returns it.
// decrement() reduces the current value by 1 and then returns it.
// reset() sets the current value to init and then returns it.

export const createCounter = function(init) {
    const Counter =  function() {
        this.count = init;
    }

    Counter.prototype.increment = function() {
        return ++this.count;
    }

    Counter.prototype.decrement = function() {
        return --this.count;
    }

    Counter.prototype.reset = function() {
        this.count = init;
        return this.count;
    }

    return new Counter();
}
