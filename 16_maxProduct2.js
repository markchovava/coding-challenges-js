


const maxProduct = (nums) => {
    let result = nums[0]
    let min_product = nums[0]
    let max_product = nums[0]
    for(let i = 1; i < nums.length; i++){
        let init = Math.max(nums[i], max_product * nums[i], min_product * nums[i])
        min_product = Math.min(nums[i], max_product * nums[i], max_product * nums[i])
        max_product = init
        result = Math.max(result, max_product)
    }
    return result
 }

let nums = [1,-6, 2, 0, 11, 10]
console.log(maxProduct(nums))