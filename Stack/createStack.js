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
// function push(arr) {
//   if(top == arr-1) {
// 		top++
// 		arr[]
// 	}
// }