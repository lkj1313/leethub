/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function(s) {
    let start = 0;
    let count = 0;
    let result = '';
    for(let i=0; i<s.length; i++){
        if(s[i]==='('){
            count++;
        } else{
            count--;
        }
        if(count===0){
            result+= s.slice(start+1,i);
            start = i+1;
        }
    }
    return result;
};