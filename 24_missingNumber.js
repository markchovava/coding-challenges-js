/** 
 * 
 *  268. Missing Number
 * 
 *  Given an array nums containing n distinct numbers in the range [0, n], return the only 
 *  number in the range that is missing from the array.
 * 
 *  Example 1:
 *  Input: nums = [3,0,1]
 *  Output: 2
 *  Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 
 *  is the missing number in the range since it does not appear in nums.
 * 
 * **/

const missingNumber = (nums) => {
    const n = nums.length;

   const expectedSum = (n * (n + 1)) / 2;
   const actualSum = nums.reduce((sum, num) => sum + num, 0);

   return expectedSum - actualSum;
};


let nums = [0,1,4,6,8,2,3,5]
console.log(missingNumber(nums))