/* 
 *   75 Blind Leetcode No. 3
 *   09/08/2023
 *
 *   Contains Duplicate
 *
 *   Given an integer array nums, return true if any value appears at least twice
 *   in the array, and return false if every element is distinct.
 *
 *   Example 1:
 *
 *  Input: nums = [1,2,3,1]
 *  Output: true
 *
 * 
**/


const containsDuplicate = (nums) => {
    let seen = new Set()
    for(const num of nums){
        seen.add(num)
    }
    return seen.size !== nums.length
}


let nums = [1,2,4,5,1]
console.log(containsDuplicate(nums))