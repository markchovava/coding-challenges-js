/**  
 * 
 *   75 Blind Leetcode No. 4
 *   09/08/2023
 * 
 *   Product of Array Except Self
 * 
 * 
**/

const productExceptSelf = (nums) => {
  const length = nums.length
  const result = new Array(length).fill(1)
  
  let init = 1
  for(let i = 0; i < length; i++){
    result[i] = init * result[i]
    init = nums[i] * init
  }

  init = 1
  for(let i = length - 1; i >= 0; i--){
    result[i] *= init
    init *= nums[i]
  }
  return result
}


let nums = [2,3,4]
console.log(productExceptSelf(nums))