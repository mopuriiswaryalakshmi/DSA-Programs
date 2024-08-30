class ListNode {
    constructor(value = 0, next = null) {
        this.value = value;
        this.next = next;
    }
}

function findLoopStart(head) {
    if (head === null) return null;
    
    let slow = head;
    let fast = head;
    
    // Detect if a loop exists
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
        
        if (slow === fast) {
            // Loop detected
            return findLoopStartNode(head, slow);
        }
    }
    
    return null; // No loop
}

function findLoopStartNode(head, meetingPoint) {
    let pointer1 = head;
    let pointer2 = meetingPoint;
    
    // Move both pointers one step at a time to find the start of the loop
    while (pointer1 !== pointer2) {
        pointer1 = pointer1.next;
        pointer2 = pointer2.next;
    }
    
    return pointer1; // Start of the loop
}

// Example usage:
// Linked List: 1 -> 2 -> 3 -> 4 -> 5
//                             ^    |
//                             |____|

let node5 = new ListNode(5);
let node4 = new ListNode(4, node5);
let node3 = new ListNode(3, node4);
let node2 = new ListNode(2, node3);
let node1 = new ListNode(1, node2);

// Create a loop
node5.next = node3; // Creates a loop

let loopStartNode = findLoopStart(node1);
console.log(loopStartNode ? loopStartNode.value : 'No loop'); // Output: 3
