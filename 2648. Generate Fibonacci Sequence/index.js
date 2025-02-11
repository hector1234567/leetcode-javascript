// Write a generator function that returns a generator object which yields the fibonacci sequence.
// The fibonacci sequence is defined by the relation Xn = Xn-1 + Xn-2.
// The first few numbers of the series are 0, 1, 1, 2, 3, 5, 8, 13.

export const fibGenerator = function* () {
  let x = [0, 1];
  yield 0;
  while (true) {
    yield x[1];
    x = [x[1], x[1] + x[0]];
  }
};
