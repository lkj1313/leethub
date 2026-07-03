/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 0) return "";
    
    const first = strs[0];

    for(let i=0; i<first.length; i++){
        const char = first[i];

        for(let k=1; k<strs.length; k++){
            if(char!==strs[k][i]||i>=strs[k].length){
                return first.slice(0,i)
            }
        }

    }
    return first;
};