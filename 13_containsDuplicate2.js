/* 
*   75 Blind Leetcode No. 3
*   09/08/2023
*   Contains Duplicate
**/


const containsDuplicate = (nums) => {
   let seen = new Set()
   for (const num of nums){
    seen.add(num)
   }
   return seen.size !== nums.length
}


let nums = [1,2,4,6,1,5]
console.log(containsDuplicate(nums))