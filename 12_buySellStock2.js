/**
*   75 Blind Leetcode No. 2
*   Buy and Stock max Profit
*   09/09/2023
**/ 


const maxProfit = (pr) => {
    let left = 0;
    let right = 1;
    let max_profit = 0;
    while(right < pr.length){
        if(pr[left] < pr[right]){
            let profit = pr[right] - pr[left];
            max_profit = Math.max(max_profit, profit);
        } else {
            left = right;
        }
        right++;
    }
    return max_profit;
}

let prices = [1,7,2,4,6,9]
let res = maxProfit(prices)
console.log(res)