/** 
 *  
 *   75 Blind Leetcode No. 6
 *   10/08/2023
 * 
 *   152. Maximum Product Subarray
 *
 *   Given an integer array nums, find a subarray that has the largest 
 *   product, and return the product.
 *   The test cases are generated so that the answer will fit in a 32-bit integer.
 *
 *   Example 1:
 *   Input: nums = [2,3,-2,4]
 *   Output: 6
 *   Explanation: [2,3] has the largest product 6.
 * 
 * 
**/


const maxProduct = function(nums) {
    let answer = nums[0]
    let max_product = nums[0]
    let min_product = nums[0]
    for(let i = 1; i < nums.length; i++){
        let init = Math.max(nums[i], Math.max(max_product * nums[i]), min_product * nums[i])
        min_product = Math.min(nums[i], Math.min(max_product * nums[i]), min_product * nums[i])
        max_product = init;
        answer = Math.max(max_product, answer)
    }
    return answer;
};


let nums = [10,-2,2,3]
console.log(maxProduct(nums))