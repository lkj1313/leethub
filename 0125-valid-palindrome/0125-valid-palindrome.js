/**
 * @param {string} s
 * @return {boolean}
 */

 /*문자열에서 모든 대문자를 소문자로 변환하고, 영문자와 숫자가 아닌 문자를 모두 제거했을 때, 앞에서 읽으나 뒤에서 읽으나 같다면 그 문구는 팰린드롬입니다. 영문자와 숫자는 알파벳 문자와 숫자를 포함합니다.
 문자열 s가 주어졌을 때, 팰린드롬이면 true를 반환하고, 그렇지 않으면 false를 반환하세요.*/

var isPalindrome = function(s) {
    const clean = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    const reverse = clean.split("").reverse().join("");

    return clean===reverse
};