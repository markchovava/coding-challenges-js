/* 
*
*   75 Blind Leetcode No. 1
*   09/08/2023

*   1. Two Sum
*   
*   1. Given an array of integers nums and an integer target, 
*   return indices of the two numbers such that they add up to target.
*   You may assume that each input would have exactly one solution, 
*   and you may not use the same element twice.
*   You can return the answer in any order.
*
*   Example 1:
*   Input: nums = [2,7,11,15], target = 9
*   Output: [0,1]
*   Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
*
*/


const twoSum = (nums, target) => {
    prevValues = {}
    for(let i = 0; i < nums.length; i++){
        const currentNumber = nums[i]
        const neededValue = target - currentNumber
        const index2 = prevValues[neededValue] 
        if(index2 != null){
            return [index2, i]
        } else {
            prevValues[currentNumber] = i
        }    
    }
}

let nums = [2,1,5,3]
console.log(twoSum(nums, 5))