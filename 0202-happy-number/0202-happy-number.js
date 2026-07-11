/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const seen = new Set();
    
    while(n!==1){
        n = String(n);
        n = n.split('').map(Number);
        let count = 0;
        for(let i=0; i<n.length; i++){
            count += n[i] * n[i];
        }
        if(seen.has(count)) return false;
        seen.add(count)
        n = count;
    }
    return true; 

};