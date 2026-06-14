/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const result = [];
    const path = [];
    const visited = new Array(n+1).fill(false);

    function dfs(j){
        if(path.length===k){
            result.push([...path]);
            return;
        }

        for(let i=j;  i<=n; i++){
            
            visited[i] = true;
            path.push(i);
            dfs(i+1);
            path.pop();
            visited[i] = false;




        }

    }
    dfs(1)
    return result;
};