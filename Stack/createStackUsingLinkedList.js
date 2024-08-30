class ListNode {
    constructor(value = null, next = null) {
        this.value = value;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.head = null; // Points to the top element of the stack
        this.size = 0; // Tracks the number of elements in the stack
    }

    // Push an element onto the stack
    push(value) {
        const newNode = new ListNode(value);
        newNode.next = this.head;
        this.head = newNode;
        this.size++;
    }

    // Pop an element from the stack
    pop() {
        if (this.isEmpty()) {
            throw new Error("Stack underflow: Stack is empty");
        }
        const value = this.head.value;
        this.head = this.head.next;
        this.size--;
        return value;
    }

    // Peek at the top element of the stack without removing it
    peek() {
        if (this.isEmpty()) {
            throw new Error("Stack is empty");
        }
        return this.head.value;
    }

    // Check if the stack is empty
    isEmpty() {
        return this.size === 0;
    }

    // Get the size of the stack
    getSize() {
        return this.size;
    }

    // Display the stack (for debugging purposes)
    display() {
        let current = this.head;
        const elements = [];
        while (current !== null) {
            elements.push(current.value);
            current = current.next;
        }
        console.log(elements.join(' -> '));
    }
}

// Example usage
const stack = new Stack();

try {
    stack.push(10);
    stack.push(20);
    stack.push(30);

    console.log("Stack after pushes:");
    stack.display(); // Output: 30 -> 20 -> 10

    console.log("Top element:", stack.peek()); // Output: 30

    console.log("Popped element:", stack.pop()); // Output: 30

    console.log("Stack after pop:");
    stack.display(); // Output: 20 -> 10

    console.log("Is stack empty?", stack.isEmpty()); // Output: false

    console.log("Stack size:", stack.getSize()); // Output: 2
} catch (error) {
    console.error(error.message);
}

