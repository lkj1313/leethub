/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function(g, s) {
    if(s.length===0) return 0;
    g.sort((a,b)=>a-b);
    s.sort((a,b)=>a-b);
    let count = 0;
    while(g.length>0 && s.length>0){
        if(g[g.length-1]>s[s.length-1]){
            g.pop();
        } else{
            g.pop()
            s.pop();
            count++;
        }
    }
    return count;
};