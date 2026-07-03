/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    const set = new Set();
    for(let i=0; i<nums.length; i++){
        set.add(nums[i]);
    }
    const arr = [...set];
    arr.sort((a,b)=>b-a);
    if(arr.length<3){
        return arr[0];
    } else{
        return arr[2];
    }
};