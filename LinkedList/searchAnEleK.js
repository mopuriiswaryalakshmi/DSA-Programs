// Search for an element k in given linkedlist

function searchLinkedList(head, k){
	if(head == null) return false
	let current = head 
	while( current != null) {
		if(current.data == k) { 
			return true 
		}
		current = current.next
	}
	return false
}
