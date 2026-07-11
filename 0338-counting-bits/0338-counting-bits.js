/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    const arr = new Array(n).fill(0);
    for(let i=0; i<=n; i++){
        arr[i] = countOne(i);
    }
    return arr;
};


function countOne(num){
    let count = 0;
    while(num!==0){
        if(num%2===1) count++;
        num = Math.floor(num/2);
    }
    return count;
}