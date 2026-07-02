/**
 * @param {string} s
 * @return {string}
 */
var clearDigits = function(s) {
    const stack = [];
    for(const char of s){
        if(char>='0' && char<='9'){
            stack.pop();
        } else{
            stack.push(char);
        }
    }
    return stack.join('');
};