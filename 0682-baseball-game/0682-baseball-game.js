/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function(operations) {
    const arr = [];
    for(const op of operations){
        
        if(op==='C'){
            arr.pop();
        } else if(op==='D'){
            arr.push(arr[arr.length-1] * 2);
        } 
           else if(op==='+'){
            arr.push(arr[arr.length-1]+arr[arr.length-2]);
        } else{
            arr.push(Number(op));
        }
    }
    return arr.reduce((a,b)=>a+b,0)
};