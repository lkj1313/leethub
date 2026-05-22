/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const map = new Map();
    map.set('(',')');
    map.set('{','}');
    map.set('[',']');
    for(let i=0; i<s.length; i++){
        if(s[i]=='(' || s[i]=='{' || s[i]=='['){
            stack.push(s[i]);
        } else{
            if(stack.length<0){
                return false;
            } else{
                const poped = stack.pop();
                if(s[i] == map.get(poped)){
                    continue;
                } else{
                    return false;
                }
            }
        }
    }
    if(stack.length==0){
        return true;
    } else{
        return false;
    }
};