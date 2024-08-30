class Node {
	constructor(data=0, next=null) {
		this.data = data
		this.next = next
	}
}

head = new Node(5)
head.next = new Node(10)
head = head.next
head.next = new Node(7)
console.log(head)

// Node { data: 10, next: Node { data: 7, next: null } }