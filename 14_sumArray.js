/**  
 * 
 *  75 Blind Leetcode No. 4
 *  10/08/2023
 * 
 *  Product of Array Except Self
 * 
 *  Given an integer array nums, return an array answer such that answer[i] 
 *  is equal to the product of all the elements of nums except nums[i].
 *  The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
 *  You must write an algorithm that runs in O(n) time and without using the division operation.
 * 
 *  Example 1:
 *  Input: nums = [1,2,3,4]
 *  Output: [24,12,8,6]
 * 
 * **/



const productExceptSelf = function(nums) {
    const length = nums.length;
    const result = new Array(length).fill(1);
    
    // Calculate the product of elements before the current index
    let productBefore = 1;
    for (let i = 0; i < length; i++) {
      result[i] *= productBefore;
      productBefore *= nums[i];
    }
  
    // Calculate the product of elements after the current index
    let productAfter = 1;
    for (let i = length - 1; i >= 0; i--) {
      result[i] *= productAfter;
      productAfter *= nums[i];
    }
  
    return result;
  };

let nums = [1,2,3,4]
console.log(nums)
console.log(productExceptSelf(nums))