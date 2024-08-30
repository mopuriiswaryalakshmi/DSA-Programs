class Node{
 constructor(data=0, next=null){
    this.data=data
    this.next=next
 }
}

function createLinkedListNode(n){
    head = new Node(1)
    temp = head
    for(i=2; i<=n; i++) {
        temp.next = new Node(i)
        temp = temp.next
    }
    console.log(head)
    return head
}

createLinkedListNode(5)