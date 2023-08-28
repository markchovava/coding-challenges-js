

const threeSum = (nums) => {
    if(nums == [] || nums.length < 3) return []
    let result = []
    nums.sort((a, b) => a - b)
    for(let i = 0; i < nums.length; i++){
        let left = i + 1;
        let right = nums.length - 1;
        while(left < right){
            let sums = nums[i] + nums[left] + nums[right]
            if(sums === 0){
                result.push([nums[i], nums[left], nums[right]])
                left++
                right--
            }
            else if(sums < 0) left++
            else right--
        }
        while(nums[i+1] === nums[i]) i++
    }
    return result
}


let nums = [-1,0,1,2,-1,-4,4,0]
let res = threeSum(nums)
console.log(res)