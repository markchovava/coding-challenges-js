const maxProduct = (nums) => {
    let answer = nums[0]
    let max_product = nums[0]
    let min_product = nums[0]
    for(let i = 1; i < nums.length; i++ ){
        let init = Math.max(nums[i], (max_product * nums[i]), (min_product * nums[i]))
        min_product = Math.min(nums[i], (max_product * nums[i]), (min_product * nums[i]))
        max_product = init
        answer = Math.max(answer, max_product)
    }
    return answer;
 }

let nums = [1,-6, 2, 0, 11, 10]
console.log(maxProduct(nums))