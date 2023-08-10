let nums = [1,2,4,5,1]

const containsDuplicate = (nums) => {
    let seen = new Set()
    for(const num of nums){
        seen.add(num)
    }
    return seen.size !== nums.length
}

console.log(containsDuplicate(nums))