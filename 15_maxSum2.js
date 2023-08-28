 /** 
 *  
 *   75 Blind Leetcode No. 5
 *   10/08/2023
 * 
 *   Maximum Subarray
 * 
**/


const maxSum = (nums) => {
  let max_sum = nums[0]
  for(let i = 1; i < nums.length; i++){
    nums[i] = Math.max(0, nums[i-1] + nums[i])
    max_sum = Math.max(nums[i], max_sum)
  }
  return max_sum;
}

let nums = [-2,1,-3,4,-1,2,1,-5,4]
console.log(maxSum(nums))