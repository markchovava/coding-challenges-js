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
    for(let i = 0; i < nums.length; i++){
        let currentNumber = nums[i]
        let neededValue = target - currentNumber
        let index = prevValues[neededValue]
        if(index != null){
            return [index, i]
        } else{
            prevValues[currentNumber] = i
        }
    }
}


let nums = [2,1,5,3]
let target = 8

console.log(twoSum(nums, target))