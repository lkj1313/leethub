/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

 /*정수 배열 nums가 오름차순으로 정렬되어 있고, 정수 target이 주어집니다.

nums 안에서 target을 찾는 함수를 작성하세요.

target이 존재하면 그 인덱스를 반환하고, 존재하지 않으면 -1을 반환하세요.

반드시 실행 시간 복잡도가 O(log n)인 알고리즘을 작성해야 합니다.*/

var search = function(nums, target) {
    let left = 0;
    let right = nums.length-1;

    while(left<=right){
        const mid = Math.floor( (left+right)/2 );
        if(nums[mid]===target) return mid;
        if(nums[mid]>target){
            right = mid-1;
        } else{
            left = mid+1;
        }
    }
    return -1;
    
};