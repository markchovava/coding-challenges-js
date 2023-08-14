/**
 * 
 *  75 Blind Leetcode No. 8
 *  11/08/2023
 * 
 *  11. Container With Most Water
 * 
 **/


const maxArea = (arr) => {
    let answer = 0;
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        answer = Math.max( answer, Math.min(arr[left], arr[right]) * (right - left))
        arr[left] <= arr[right] ? left++ : right--
    }
    return answer;
}


let height = [1,8,6,2,5,4,8,3,7]
console.log(maxArea(height))