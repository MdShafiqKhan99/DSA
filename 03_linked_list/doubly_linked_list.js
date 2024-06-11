
class Node {
    constructor(data, next = null, prev = null){
        this.data = data;
        this.next = next;
        this.prev = prev;
    }
}

class DoublyLinkedList {
    constructor(){
        this.head = null;
        this.tail = null;
    }
}

DoublyLinkedList.prototype.insertAtBeginning = function(data){
    const newNode = new Node(data, this.head);

    if(this.head !== null){
        this.head.prev = newNode;
    }

    this.head = newNode;

    if(!this.tail){
        this.tail = newNode; 
    }

}

DoublyLinkedList.prototype.insertAtEnd = function(data){
    const newNode = new Node(data, null, this.tail)

    if(this.tail){
        this.tail.next = newNode;
    }

    this.tail = newNode;
    
    if(!this.head){
        this.head = newNode;
    }
}

DoublyLinkedList.prototype.insertAfter = function(prevNode, data){
    if(!prevNode){
        return console.log("Invalid prev node");
    }

    const newNode = new Node(data, prevNode.next, prevNode)

    if(prevNode.next){
        prevNode.next.prev = newNode;
    }

    prevNode.next = newNode;

    if(newNode.next === null){
        this.tail = newNode;
    }
}

DoublyLinkedList.prototype.deleteFirst = function (){
    if(!this.head){
        return console.log("empty list");
    }

    if(this.head === this.tail){
        this.head = null 
        this.tail = null 
    } else {
        this.head = this.head.next
        this.head.prev = null 

    }

}

DoublyLinkedList.prototype.deleteLast = function() {
    if(!this.tail){
        return console.log("empty list")
    }

    if(this.head === this.tail){
        this.head = null 
        this.tail = null 

    } else {
        this.tail = this.tail.prev
        this.tail.next = null
    }
}

DoublyLinkedList.prototype.reverse = function(){
    let current = this.head;
    let temp = null;

    while(current){
        temp = current.prev;
        current.prev = current.next;
        current.next = temp
    }

    let tempHead = this.head;
    this.head = this.tail 
    this.tail = tempHead
}

