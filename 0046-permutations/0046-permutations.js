/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function(nums) {
    const result = [];
    const path = [];
    const used = new Array(nums.length).fill(false);

    function dfs(){
        if(path.length===nums.length){
            result.push([...path]);
            return;
        }
        for(let i=0; i<nums.length; i++){
            if(used[i]) continue;
            
            path.push(nums[i]);
            used[i] = true;

            dfs();

            used[i] = false;
            path.pop();
        }
    }
    dfs()
    return result;
};