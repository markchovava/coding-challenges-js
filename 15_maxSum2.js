/*  */

const maxSum = (nums) => {
    let max_sum = nums[0]
    for(let i = 1; i < nums.length; i++){
        nums[i] = Math.max(0, nums[i-1]) + nums[i]
        if(nums[i] > max_sum){
            max_sum = nums[i]
        }
    }
    return max_sum
}

let nums = [-2,1,-3,4,-1,2,1,-5,4]
console.log(maxSum(nums))