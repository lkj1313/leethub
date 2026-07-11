/**
 * @param {number} n
 * @return {number}
 */
var hammingWeight = function(n) {
    const bArr = n.toString(2).split('');
    let count = 0;

    for(let i=0; i<bArr.length; i++){
        if(bArr[i]==='1') count++;
    }
    return count;
};