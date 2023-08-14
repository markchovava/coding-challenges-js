/**
 * 
 *  75 Blind Leetcode No. 8
 *  11/08/2023
 * 
 *  11. Container With Most Water
 * 
 *  You are given an integer array height of length n. There are n vertical lines drawn 
 *  such that the two endpoints of the ith line are (i, 0) and (i, height[i]).
 *  Find two lines that together with the x-axis form a container, such that the 
 *  container contains the most water.
 *  Return the maximum amount of water a container can store.
 *  Notice that you may not slant the container.
 * 
 */

const maxArea = (arr) => {
    let answer = 0;
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
        answer = Math.max(answer, Math.min(arr[left], arr[right]) * (right - left))
        arr[left] <= arr[right] ? left++ : right--;
    }
    return answer
}

let height = [1,8,6,2,5,4,8,3,7]
console.log(maxArea(height))