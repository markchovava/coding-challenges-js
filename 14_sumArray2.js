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
    let length = nums.length
    let result = new Array(length).fill(1)

    let productBefore = 1;
    for(let i = 0; i < length; i++){
      result[i] *= productBefore;
      productBefore *= nums[i]
    }


    let productAfter = 1;
    for(let i = length - 1; i >= 0; i--){
      result[i] *= productAfter;
      productAfter *= nums[i]
    }

    return result

}


let nums = [2,1,4,5]
let res = productExceptSelf(nums)
console.log(res)