/**
 * 
 *  75 Blind Leetcode No. 7
 *  10/08/2023
 * 
 *  Find Minimum in Rotated Sorted Array
 * 
 * 
*/

const findMin = (nums) => {
    return Math.min(...nums)
}

let nums = [0,6,-2,7,-8]
console.log(findMin(nums))

