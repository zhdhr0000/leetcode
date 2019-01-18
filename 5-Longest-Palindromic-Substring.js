/**
 * @param {string} s
 * @return {string}
 */
function isPalindromic(s) {
    for (let i = 0, j = s.length - 1; i < j; i++ , j--) {
        if (s[i] !== s[j]) {
            return false;
        }
    }
    return true;
}

var longestPalindrome = function (s) {
    if (s === "" || s.length === 1 || isPalindromic(s)) return s;
    let result = s[0];
    for (let i = 0; i < s.length; i++) {
        if (s[i - 1] === s[i + 1]) {
            let k = 2;
            while (s[i - k] === s[i + k]) {
                k++;
            }
            result =
                result.length < 2 * k - 1 ? s.substr(i - (k - 1), 2 * k - 1) : result;
        }
        if (s[i] === s[i + 1]) {
            let k = 1;
            while (s[i - k] === s[i + 1 + k]) {
                k++;
            }
            result = result.length < 2 * k ? s.substr(i - (k - 1), 2 * k) : result;
        }
    }
    return result;
    // Success
    // Runtime: 92 ms, faster than 96.77% of JavaScript online submissions for Longest Palindromic Substring.
};
