let nums = [2,1,5,3]


const twoSum = (nums, target) => {
    prevValues = {}
    for(let i = 0; i < nums.length; i++){
        const currentNumber = nums[i]
        const neededValue = target - currentNumber
        const index2 = prevValues[neededValue] 
        if(index2 != null){
            return [index2, i]
        } else {
            prevValues[currentNumber] = i
        }    
    }
}

console.log(twoSum(nums, 8))