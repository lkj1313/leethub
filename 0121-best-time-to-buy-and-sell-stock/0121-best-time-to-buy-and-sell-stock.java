class Solution {
    public int maxProfit(int[] prices) {
        int minPrice = prices[0];
        int maxProfit = 0;
        for(int i=1; i<prices.length; i++){
            int todayPrice = prices[i];
            maxProfit = Math.max(maxProfit, todayPrice-minPrice);
            minPrice = Math.min(minPrice, todayPrice);
        }
        return maxProfit;
    }
}