/**
 * 
 *  75 Blind Leetcode No. 1
 *  09/08/2023
 * 
 *  Two Sum with a Target
 *  09/08/2023
 * 
**/ 

const twoSum = (nums, target) => {
    let prevValues = {}
    for(let i = 0; i < nums.length; i++) {
        const currentNumber = nums[i]
        const neededValue = target - currentNumber
        const index = prevValues[neededValue]
        if(index != null) {
            return [index, i]
        } else{
            prevValues[currentNumber] = i
        }
    }
}


let nums = [2,1,5,3]
let target = 6

console.log(twoSum(nums, target))