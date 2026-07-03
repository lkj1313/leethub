/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function(score) {
    const sortedScore = [...score].sort((a,b)=>a-b); /// 1,2,3,4,5
    const answer = [];
    for(let i=0; i<score.length; i++){
        const index = sortedScore.indexOf(score[i]);
        if(index===score.length-1){
            answer.push("Gold Medal");
        } else if (index===score.length-2){
            answer.push("Silver Medal");
        } else if (index===score.length-3){
            answer.push('Bronze Medal')
        } else{
            answer.push(`${score.length-index}`)
        }
    }
    return answer;
};