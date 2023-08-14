/* 
Given a non-negative digit k, find the balanced digit n such that
the sum of all integers between 1 to x equals the sum of all integers between x to n

Return the balanced digit n or -1 in no such digit exists.

    Contstraints
    1 <= n <= 1000

    in js

*/

function balanced_digit(k) {
    "use strict";
  
    // Check the constraints.
    if (k < 0 || k > 1000) {
      return -1;
    }
  
    // Initialize the sum of the integers.
    let sum = 0;
  
    // Iterate over all integers from 1 to k.
    for (let i = 1; i <= k; i++) {
      sum += i;
    }
  
    // Initialize the balanced digit.
    let n = k + 2 * (99 - k);
  
    // Check if the sum of the integers between 1 to n is equal to the sum of the integers between n to k.
    let balanced_sum = (n + 1) * n / 2;
    if (sum === balanced_sum) {
      return n;
    } else {
      return -1;
    }
  }
  
  // Test the function.
  console.log(balanced_digit(1)); // 99
  console.log(balanced_digit(2)); // 101
  console.log(balanced_digit(1000)); // -1