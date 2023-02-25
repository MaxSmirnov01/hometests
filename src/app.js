const msg = 'Hello World';
console.log(msg);

const sequenceSum = (begin, end) => {
  // BEGIN (write your solution here)
  if (begin === end) {
    return begin;
  }
  if (begin > end) {
    return NaN;
  }
  return begin + sequenceSum(begin + 1, end);
  // END
};

console.log(sequenceSum(1, 5));
