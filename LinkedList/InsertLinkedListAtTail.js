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

    // Method to insert a node at the tail
    insertAtTail(value) {
        const newNode = new Node(value); // Create a new node with the provided value

        if (this.tail) {
            // If the list is not empty, link the current tail node to the new node
            this.tail.next = newNode;
        } else {
            // If the list is empty, set the new node as the head
            console.log(this.head)
            this.head = newNode;
        }
        // Update the tail to be the new node
        this.tail = newNode;

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
list.insertAtTail(1);
list.insertAtTail(2);
list.insertAtTail(3);
list.printList(); // Output: 1 -> 2 -> 3

// class Node {
//     constructor(data=0, next=null){
//         this.data = data
//         this.next = null
//     }    
// }

// class LinkedList{
//     constructor(){
//         this.head = null
//         this.tail = null
//     }

//     insertAtTail(value) {

//     }
// }

// newNode = new Node(x)
// if(head == Null) { head=newNode; return }

// while(temp.next!=null) {
//     temp = temp.next
// }

// temp.next == newNode

