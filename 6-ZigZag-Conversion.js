/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    if (numRows === 1) return s
    let downFlag = true
    const road = []
    for (let index = 0; index < numRows; index++) {
        road[index] = ""
    }
    index = 0
    let cursor = 0
    while (index<s.length) {
        const char = s[index];
        road[cursor] = road[cursor].concat(char)
        if (downFlag){
            cursor++
            if (cursor === (numRows-1)){
                downFlag = false
            }
        }else {
            cursor--
            if (cursor === 0){
                downFlag = true
            }
        }
        index++
    }
    let result = ''
    for (index = 0; index < road.length; index++) {
        result = result.concat(road[index]);
    }
    return result
};