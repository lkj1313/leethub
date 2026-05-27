/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

 /*두 문자열 s와 t가 주어졌을 때, t가 s의 애너그램이면 true를 반환하고, 그렇지 않으면 false를 반환하세요.

여기서 애너그램은 같은 문자들을 사용하되, 순서만 바꿔 만든 문자열을 의미합니다.*/

var isAnagram = function(s, t) {
    if(s.length!==t.length) return false;
    const sMap = new Map();
    const tMap = new Map();

    for(const char of s){
        sMap.set(char,( sMap.get(char)||0)+1 );
    }
    for(const char of t){
        tMap.set(char,( tMap.get(char)||0)+1 );
    }

    for(const char of s){
        if(sMap.get(char) !== tMap.get(char)){
            return false;
        }
    }

    return true;
    
};