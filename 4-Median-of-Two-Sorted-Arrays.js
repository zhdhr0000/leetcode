/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const center = (nums1.length + nums2.length) / 2
    let c1 = 0, c2 = 0, result
    while (c1 + c2 < center) {
        if (c1 === nums1.length) {
            result = nums2[c2]
            c2 += 1
        } else if (c2 === nums2.length) {
            result = nums1[c1]
            c1 += 1
        } else {
            if (nums1[c1] < nums2[c2]) {
                result = nums1[c1]
                c1 += 1
            } else {
                result = nums2[c2]
                c2 += 1
            }
        }
    }

    if ((nums1.length + nums2.length) % 2)
        return result;
    else {
        if (c1 == nums1.length)
            return (result + nums2[c2]) / 2
        else if (c2 == nums2.length)
            return (result + nums1[c1]) / 2
        else {
            if (nums1[c1] < nums2[c2])
                return (result + nums1[c1]) / 2
            else
                return (result + nums2[c2]) / 2
        }
    }

}

console.log(findMedianSortedArrays([1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 4, 4], [1, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4]))