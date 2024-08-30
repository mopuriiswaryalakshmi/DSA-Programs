class FixedSizeStack {
    constructor(maxSize) {
        this.maxSize = maxSize // maxSize of the stack
        this.items = new Array(maxSize)
        this.top = -1
    }

    push(x) {
        if(this.top >= this.maxSize-1) {
            throw new Error("Stack overflow: Exceeds maximum size")
        }
        this.items[this.top++] = x
    }

    pop() {
        if(this.isEmpty()) {
            throw new Error("Stack underflow: Stack is empty")
        }
        return this.items[this.top--]
    }

    peek() {
        if(this.isEmpty()){
            throw new Error("Stack is empty")
        }
    }

    isEmpty() {
        return this.top === -1
    }

    size() {
        return this.top + 1
    }

    display() {
        console.log(this.items.slice(0, this.top + 1))
    }
 }

 const stack = new FixedSizeStack()
 
try {
    stack.push(10)
} catch(error) {
    console.error(error.message)
}


