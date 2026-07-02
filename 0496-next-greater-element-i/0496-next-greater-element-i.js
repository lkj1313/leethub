/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    const map = new Map();
    const stack = [];
    for(const num of nums2){
        while(stack.length>0 && stack[stack.length-1]<num){
            const top = stack.pop();
            map.set(top,num);

        }
        stack.push(num);
    }
    return nums1.map((n)=>map.get(n) || -1);
};