/** 
 *  
 *   75 Blind Leetcode No. 5
 *   10/08/2023
 * 
 *   Maximum Subarray
 *
 *   Given an integer array nums, find the subarray
 *   with the largest sum, and return its sum.
 * 
 *   Example 1:
 *   Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
 *   Output: 6
 *   Explanation: The subarray [4,-1,2,1] has the largest sum 6.
 * 
 * 
**/


const maxSum = function(nums) {
    let max_sum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        nums[i] = Math.max(0, nums[i - 1]) + nums[i];
        if (nums[i] > max_sum)
            max_sum = nums[i];
    }
    return max_sum;  
};


let nums = [5,4,1,4,-7,1]
console.log(maxSubArray(nums))

