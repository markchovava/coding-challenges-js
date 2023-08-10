/* 
*   75 Blind Leetcode No. 2
*   Buy and Stock max Profit
*   09/09/2023
*
*   You are given an array prices where prices[i] is the price of a given 
*   stock on the ith day.
*   You want to maximize your profit by choosing a single day to buy one stock and 
*   choosing a different day in the future to sell that stock.
*   Return the maximum profit you can achieve from this transaction. If you cannot 
*   achieve any profit, return 0.
*
*   Example 1:
*   Input: prices = [7,1,5,3,6,4]
*   Output: 5
*   Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
*   Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
**/


const maxProfit = (prices) => {
    let left = 0; // Buy
    let right = 1; // sell
    let max_profit = 0;
    while (right < prices.length) {
      if (prices[left] < prices[right]) {
        let profit = prices[right] - prices[left]; // our current profit
  
        max_profit = Math.max(max_profit, profit);
      } else {
        left = right;
      }
      right++;
    }
    return max_profit;
  };

  let prices = [3,4,1,6]

  console.log(maxProfit(prices))