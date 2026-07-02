/**
 * @param {string} s
 * @return {string}
 */
var makeGood = function(s) {
    const stack = []

    for(let i=0; i<s.length; i++){
        const top = stack[stack.length-1];
        if(top&& top!==s[i] && top.toLowerCase() === s[i].toLowerCase()){
            stack.pop();
        } else{
            stack.push(s[i]);
        }
    }
    return stack.join('')
};