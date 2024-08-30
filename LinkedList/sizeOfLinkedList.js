class Node{
    constructor(data=0, next=null){
        this.data=data
        this.next=next
    }
}

function size(head) {
    temp = head
    console.log(temp)
    count=0
    while(temp != null) {
        count++
        temp = temp.next
    }
    console.log(count)
    return count
}


let list = new Node(1, new Node(2, new Node(3, new Node(4))));
size(list)

//list = Node {data: 1,next: Node { data: 2, next: Node { data: 3, next: [Node] } }}
