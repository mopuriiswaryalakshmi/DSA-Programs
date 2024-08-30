class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
    }

    // Append a new node to the linked list
    append(value) {
        if (this.head === null) {
            this.head = new Node(value);
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = new Node(value);
    }

    // Print the linked list for verification
    print() {
        let current = this.head;
        let result = [];
        while (current) {
            result.push(current.value);
            current = current.next;
        }
        console.log(result.join(' -> '));
    }

    // Rearrange nodes with odd indexes first, then even indexes
    rearrangeOddEven() {
        if (!this.head || !this.head.next) {
            return; // No need to rearrange if list is empty or has only one element
        }

        let oddHead = null, oddTail = null;
        let evenHead = null, evenTail = null;
        let current = this.head;
        let index = 0;

        // Separate nodes into odd and even indexed lists
        while (current) {
            if (index % 2 === 0) {
                // Even index
                if (evenHead === null) {
                    evenHead = new Node(current.value);
                    evenTail = evenHead;
                } else {
                    evenTail.next = new Node(current.value);
                    evenTail = evenTail.next;
                }
            } else {
                // Odd index
                if (oddHead === null) {
                    oddHead = new Node(current.value);
                    oddTail = oddHead;
                } else {
                    oddTail.next = new Node(current.value);
                    oddTail = oddTail.next;
                }
            }
            current = current.next;
            index++;
        }

        // Concatenate odd list followed by even list
        if (oddTail) {
            oddTail.next = evenHead;
            this.head = oddHead;
        } else {
            this.head = evenHead;
        }
    }
}

// Example usage
let list = new LinkedList();
list.append(1);
list.append(2);
list.append(3);
list.append(4);
list.append(5);
list.append(6);

console.log("Original List:");
list.print();

list.rearrangeOddEven();

console.log("Rearranged List (Odd indices first, then even indices):");
list.print();
