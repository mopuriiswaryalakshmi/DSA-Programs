class Node{
    constructor(data=0,next=null){
        this.data = data
        this.next = next
    }
}

function insetXAtKthPosition(head, x,k){
    newNode = new Node(x)
    temp = head
    for(i=1; i <= k-1; i++){
        temp = temp.next
    }
    newNode.next = temp.next
    temp.next = newNode
    console.log(head)
    console.log(JSON.stringify(head))
    return head
}
let list = new Node(1, new Node(2, new Node(3, new Node(4, new Node(5)))));
insetXAtKthPosition(list, 25, 3)
