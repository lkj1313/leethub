/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function(word, ch) {
    const arr = word.split('');
    const idx = arr.indexOf(ch);
    if(!idx) return word;
    let answer = ''
    const stack = [];
    for(let i=idx; i>=0; i--){
        answer+= word[i];
    }
    answer+=word.slice(idx+1);
    return answer;
};