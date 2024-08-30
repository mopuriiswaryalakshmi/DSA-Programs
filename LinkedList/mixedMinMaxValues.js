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

    // Extract values from the linked list
    extractValues() {
        let values = [];
        let current = this.head;
        while (current) {
            values.push(current.value);
            current = current.next;
        }
        return values;
    }
}

// Function to mix min and max values from the sorted values
function mixMinMax(values) {
    values.sort((a, b) => a - b); // Sort values in ascending order

    let result = [];
    let i = 0;
    let j = values.length - 1;

    // Mix values in the order: 1st min, 1st max, 2nd min, 2nd max, etc.
    while (i <= j) {
        if (i <= j) {
            result.push(values[i++]);
        }
        if (i <= j) {
            result.push(values[j--]);
        }
    }

    return result;
}

// Example usage
let list = new LinkedList();
list.append(4);
list.append(1);
list.append(7);
list.append(3);
list.append(6);
list.append(2);

let values = list.extractValues();
let mixedValues = mixMinMax(values);

console.log("Sorted Values:", values); // Output: Sorted Values: [1, 2, 3, 4, 6, 7]
console.log("Mixed Min-Max Values:", mixedValues); // Output: Mixed Min-Max Values: [1, 7, 2, 6, 3, 4]
