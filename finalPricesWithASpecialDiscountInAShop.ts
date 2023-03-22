function finalPrices(prices: number[]): number[] {
    let ans: number[] = [];

    for (let i = 0; i < prices.length; i++) {
        let value = prices[i]
        for (let j = i + 1; j < prices.length; j++) {
            if (prices[i] >= prices[j]) {
                value = prices[i] - prices[j]
                break
            }
        }
        ans.push(value)
    }

    return ans    
};