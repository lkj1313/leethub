/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) { // length: 01 23 4
    nums.sort((a,b)=>a-b);
    for(let i=0; i<nums.length; i+=2){
        if(nums[i]!==nums[i+1]){
            return nums[i]
        }
    }
};