/** 
 *  
 *  75 Blind Leetcode No. 8
 *  10/08/2023
 *
 *  Search in Rotated Sorted Array
 *
 *  There is an integer array nums sorted in ascending order (with distinct values).
 *  Prior to being passed to your function, nums is possibly rotated at an unknown pivot 
 *  index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], 
 *  ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7]
 *  might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].
 *  Given the array nums after the possible rotation and an integer target, 
 *  return the index of target if it is in nums, or -1 if it is not in nums.
 *  You must write an algorithm with O(log n) runtime complexity.
 **/


const start = performance.now();
// Time Complexity of O(n)
const search = function(nums, target) {
    let result = -1;
    if(nums.length > 0){
        result = nums.indexOf(target)
    } else if(nums.length == 1){
        result = 0
    }
    return result
}; 

let nums = []
/* Generate Nums for the array */
for(let i = 0; i < 100; i++){
    nums.unshift(i)
    nums.push(i)
}

let target = 76
console.log(nums)
console.log(search(nums, target))
/* Check Performance */
const end = performance.now();
const duration = end - start;
console.log(duration); // The duration in milliseconds