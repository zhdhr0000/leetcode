/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // 1. the easiest way...
    // for (let a = 1; a < nums.length; a++) {
    //     for (let b = 0; b < a; b++) {
    //         if (nums[a] + nums[b] === target)
    //         return [nums[a],nums[b]]        
    //     }
    // }

    // Success
    // Runtime: 84 ms, faster than 58.65% of JavaScript online submissions for Two Sum.

    const map = {}
    for (let a = 0;a < nums.length; a++) {
        const value = target - nums[a]
        if (map[value] !== undefined && map[value]!==a){
            return [map[value],a]
        }
        map[nums[a]] = a
    }

    // Success
    // Runtime: 52 ms, faster than 100.00% of JavaScript online submissions for Two Sum.
};