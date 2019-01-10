/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let extra = 0
    let sum
    let n1 = l1
    let n2 = l2
    let result = ListNode(0)
    let currentNode = result
    while (n1 || n2 || extra) {
        sum = extra
        if (n1) {
            sum += n1.val
            n1 = n1.next
        }
        if (n2) {
            sum += n2.val
            n2 = n2.next
        }
        if (sum >= 10) {
            sum -= 10
            extra = 1
        } else {
            extra = 0
        }
        currentNode.next = ListNode(sum)
        currentNode = currentNode.next
    }
    return result.next
    
    //1563 / 1563 test cases passed.
    //Status: Accepted
    //Runtime: 156 ms
};

function ListNode(val) {
    return {
        val: val,
        next: null
    }
}
