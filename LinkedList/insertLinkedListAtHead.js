// Node class for singly linked list
class Node {
    constructor(value) {
        this.value = value; // Value of the node
        this.next = null;  // Pointer to the next node
    }
}

// LinkedList class with methods to manage the list
class LinkedList {
    constructor() {
        this.head = null; // The start of the linked list
        this.tail = null; // The end of the linked list
    }

    // Method to insert a node at the head
    insertAtHead(value) {
        const newNode = new Node(value); // Create a new node with the provided value
        
        // Point the new node's next to the current head
        newNode.next = this.head;
        
        // Update the head to be the new node
        this.head = newNode;

        // If the list was empty, also update the tail
        if (this.tail === null) {
            this.tail = newNode;
        }
    }

    // Method to print the list for debugging
    printList() {
        let current = this.head;
        const values = [];
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        console.log(values.join(' -> '));
    }
}

// Example usage
const list = new LinkedList();
list.insertAtHead(1);
list.insertAtHead(2);
list.insertAtHead(3);
list.printList(); // Output: 3 -> 2 -> 1

// class Node {
//     constructor(data=0, next=null) {
//         this.data = data
//         this.next = next
//     }
// }

// function insertLinkedList(head, x, k) {
//     new_node = new Node(x)
//     new_node.next = head 
//     head = new_node
// }
