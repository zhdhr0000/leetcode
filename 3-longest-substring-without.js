/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    if (s.length === 0) return 0
    if (s.length === 1) return 1
    let cache = [],max = 1
    const charSet = s.split('')
    for (let right = 0; right < charSet.length; right++) {
        const theChar = charSet[right]
        const left = cache.indexOf(theChar)
        if(left === -1){
            cache.push(theChar)
            if (cache.length > max){
                max = cache.length
            }
        }else {
            cache.splice(0,left + 1)
            cache.push(theChar)
        }
    }
    return max
    // Success
    // Runtime: 104 ms, faster than 65.93% of JavaScript online submissions for Longest Substring Without Repeating Characters.

};
