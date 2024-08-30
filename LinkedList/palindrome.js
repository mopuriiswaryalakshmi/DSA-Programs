class ListNode {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    }
}

function isPalindrome(head) {
    if (head === null) return true;
    
    // Step 1: Find the middle of the linked list
    let slow = head;
    let fast = head;
    console.log("slow=====")
    console.log(slow)
    console.log("fast=====")
    console.log(fast)

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        console.log("slow in===")
        console.log(slow)
        fast = fast.next.next;
        console.log("fast in===")
        console.log(fast)
    }
    console.log("slow=====ffn=")
    console.log(slow)
    console.log("fast=====ffn=")
    console.log(fast)
    console.log(head)
    console.log("head========fin")
    // Step 2: Reverse the second half of the list
    let secondHalf = reverseList(slow);
    let firstHalf = head;
    
    // Step 3: Compare the two halves
    while (secondHalf !== null) {
        if (firstHalf.value !== secondHalf.value) {
            return false;
        }
        firstHalf = firstHalf.next;
        secondHalf = secondHalf.next;
    }
    
    return true;
}

// Helper function to reverse the linked list
function reverseList(head) {
    let prev = null;
    let current = head;
    
    while (current !== null) {
        console.log("current====")
        console.log(current)
        console.log("nextNode====")
        console.log(prev)
        let nextNode = current.next; 
        console.log(`nextNode===`)
        console.log(nextNode)
        current.next = prev;
        console.log(`current.next=== `)
        console.log(current.next)

        prev = current;
        console.log("prev===")
        console.log(prev)
        current = nextNode;
        console.log("current===")
        console.log(current)
    }
    console.log("prev============")
    console.log(prev)
    return prev;
}

// Example usage:
// Linked List: 1 -> 2 -> 2 -> 1
let node4 = new ListNode(1);
let node3 = new ListNode(2, node4);
let node2 = new ListNode(2, node3);
let node1 = new ListNode(1, node2);

console.log(isPalindrome(node1)); // Output: true
