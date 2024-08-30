class Node {
    constructor() {
        this.value = value
        this.next = null
    }
}
class LinkedList {
    constructor() {
        this.head = null
        this.tail = null
    }

    static mergeList(list1, list2) {
        let dummy = new Node(null)
        let tail = dummy

        let p1 = list1.head
        let p2 = list2.head

        while(p1 && p2) {
            if(p1.value <= p2.value){
                tail.next = p1
                p1 = p1.next
            } else {
                tail.next = p2
                p2 = p2.next
            }
            tail = tail.next
        }

        if(p1) {
            tail.next = p1
        } else if(p2) {
            tail.next = p2
        }
        // const mergeList = new LinkedList()
        // mergeList.head = dummy.next
        // return mergeList
        return dummy.next
     }
}