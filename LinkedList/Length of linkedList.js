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

let List = createLinkedListNode(5)

function createLengthOfLinkedList(LList){
    if(LList == null){
        return null
    }
    slow = LList
    fast = LList
    while(fast.next != null && fast.next.next != null) { // odd // even
        console.log("slow.next=====")
        console.log(slow.next)
        console.log("fast.fast.next======")
        console.log(fast.next.next)
        slow = slow.next
        fast = fast.next.next
    }
    console.log("slow====+++++")
    console.log(slow)
    return slow
}
createLengthOfLinkedList(List)