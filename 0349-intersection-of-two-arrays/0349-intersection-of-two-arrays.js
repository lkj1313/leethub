/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const set = new Set();
    const answer = [];
    for(let i=0; i<nums2.length; i++){
        set.add(nums2[i]);
    }
    for(let i=0; i<nums1.length; i++){
        if(set.has(nums1[i])){
            answer.push(nums1[i])
        }
    }
    return [...new Set(answer)];
};