/**
 * 
 *  15. 3Sum
 *
 *  Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, 
 *  and j != k, and nums[i] + nums[j] + nums[k] == 0.
 *  Notice that the solution set must not contain duplicate triplets.
 * 
 *  Example 1:
 *  Input: nums = [-1,0,1,2,-1,-4]
 *  Output: [[-1,-1,2],[-1,0,1]]
 *  Explanation: 
 *  nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
 *  nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
 *  nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
 *  The distinct triplets are [-1,0,1] and [-1,-1,2].
 *  Notice that the order of the output and the order of the triplets does not matter.
**/


const threeSum = (nums) => {
    if(nums == [] || nums.length < 3) return [];
    let result = [];
    nums.sort((a, b) => a - b);
    for(let i = 0; i < nums.length - 2; i++){
        let left = i + 1;
        let right = nums.length - 1;
        while(left < right){
            let sum = nums[i] + nums[left] + nums[right];
            if(sum === 0){
                result.push([ nums[i], nums[left], nums[right] ]);  
                while(nums[left] == nums[left + 1]) left++
                while(nums[right] == nums[right + 1]) right++
                left++;
                right--;
            } 
            else if(sum < 0) left++;
            else right--; 
        }
        while(nums[i+1] === nums[i]) i++;
    }

    return result;
}

let nums = [-1,0,1,2,-1,-4]
console.log(threeSum(nums))