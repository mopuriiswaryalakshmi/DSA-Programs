// Sort a given stack. Use another one stack.

class Stack {
	constructor(maxSize=Infinity) {
		this.items = []
		this.maxSize = maxSize
	}

	push(element){
		if(this.size() >= this.maxSize) {
			throw new Error("Stack Overflow: Exceeds maximum size")
		}
		this.items.push(element)
	}

	pop() {
		if(this.isEmpty()){
			throw new Error("Stack underflow: stack is empty")
		}

	}

	top() {
		if(this.isEmpty()) {
			throw new Error("Stack is empty")
		}
		return this.items[this.items.length-1]
	}

	isEmpty() {
		return this.items.length === 0
	}

	size() {
		return this.items.length
	}

	display() {
		console.log(this.items)
	}
}

function sortStack(stack) {
    const tempStack = new Stack()
    while(!stack.isEmpty()) {
        const temp = stack.pop()
        while(!tempStack.isEmpty() && tempStack.peek() > temp) {
            stack.push(tempStack.pop())
        }
        tempStack.push(temp)
    }

    while(!tempStack.isEmpty()) {
        stack.push(tempStack.pop())
    }
    tempStack.push(temp)
}

while(!tempStack.isEmpty()) {
    stack.push(tempStack.pop())
}

const stack = new Stack()
stack.push(34)
stack.push(3)
stack.push(31)
stack.push(98)
stack.push(92)
stack.push(23)

stack.display()

sortStack(stack)

console.log("Stack after sorting:")

stack.display()
