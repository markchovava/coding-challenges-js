const searchArray = (nums, target) => {
    let result = -1
    if(nums.length > 0){
        result = nums.indexOf(target)
    } else if(nums.length = 1){
        result = 0
    }
    return result
}

const nums = [1,22,3,42,11]
const res = searchArray(nums, 11)
console.log(res)