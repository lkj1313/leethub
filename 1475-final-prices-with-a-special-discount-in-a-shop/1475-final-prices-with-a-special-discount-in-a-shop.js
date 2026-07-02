/**
 * @param {number[]} prices
 * @return {number[]}
 */
var finalPrices = function(prices) {
    const stack = [];
    const answer = [...prices];
    for(let i=0; i<prices.length; i++){
        while(stack.length>0 && prices[stack[stack.length-1]]>=prices[i]){
            const top = stack.pop();
            answer[top] = prices[top] - prices[i];
        }
        stack.push(i);
    }
    return answer;
};