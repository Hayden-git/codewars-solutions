/*
Your task is to write a function which returns the sum of a sequence of integers.

The sequence is defined by 3 non-negative values: begin, end, step.

If begin value is greater than the end, your function should return 0. If end is not the result of an integer number of steps, then don't add it to the sum. See the 4th example below.

Examples:
    2,2,2 --> 2
    2,6,2 --> 12 (2 + 4 + 6)
    1,5,1 --> 15 (1 + 2 + 3 + 4 + 5)
    1,5,3  --> 5 (1 + 4)

*/

// Define a function named sequenceSum that takes three parameters: begin, end, and step.
const sequenceSum = (begin, end, step) => {
  // Initialize a variable named sum to 0. This variable will be used to keep track of the total sum of the sequence.
  let sum = 0;

  // Use a for loop to iterate over the sequence.
  // The loop variable i is initialized to the begin value.
  // The loop continues as long as i is less than or equal to the end value.
  // After each iteration, i is incremented by the step value.
  for (let i = begin; i <= end; i += step) {
    // Inside the loop, add the current value of i to sum.
    sum += i;
  }

  // After the loop has finished, return the value of sum.
  // This is the total sum of the sequence defined by begin, end, and step.
  return sum;
};

// Example Tests:
console.log(sequenceSum(1, 10, 1));
// Expected output: 55 = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10

console.log(sequenceSum(0, 100, 10));
// Expected output: 550 = 0 + 10 + 20 + 30 + 40 + 50 + 60 + 70 + 80 + 90 + 100

console.log(sequenceSum(5, 20, 3));
// Expected output: 84 = 5 + 8 + 11 + 14 + 17 + 20

console.log(sequenceSum(10, 50, 5));
// Expected output: 1870 = 10 + 15 + 20 + 25 + 30 + 35 + 40 + 45 + 50

console.log(sequenceSum(2, 20, 2));
// Expected output: 110 = 2 + 4 + 6 + 8 + 10 + 12 + 14 + 16 + 18 + 20

console.log(sequenceSum(100, 2, 2));
// Expected output: 0 (because "begin" value is greater than the "end" value)
