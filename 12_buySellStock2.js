/**
 *  GET MAX PROFIT
 *  09/08/2023
 **/ 

const maxProfit = (prices) => {
    let left = 0;
    let right = 1;
    let max_profit = 0;
    while(right < prices.length){
        if(prices[left] < prices[right]){
            let profit = prices[right] - prices[left]
            max_profit = Math.max(max_profit, profit)
        } else {
            left = right
        }
        right++
    }
    return max_profit
}

let prices = [1,7,4,6,9]
console.log(maxProfit(prices))