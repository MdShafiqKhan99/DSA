class Node {
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
    }
}

// insert node at the beginning

LinkedList.prototype.insertAtBeginning = function(data){
    let node = new Node(data);
    if(!this.head){
        this.head = node;
        return;
    }
    let currentNode = this.head;
    this.head = node;
    this.head.next = currentNode;
    
}

// insert node at the end
LinkedList.prototype.insertAtEnd = function(data){
    let node = new Node(data);
    if(!this.head){
        this.head = node;
        return;
    }

    let lastNode = this.head;

    while (lastNode.next) {
        lastNode = lastNode.next;
    }

    lastNode.next = node;
}

LinkedList.prototype.print = function(){
    let items = [];

    let current = this.head;

    while(current){
        items.push(current.data);
        current = current.next;
    }

    if(items.length <= 1){
        console.log(items);
    } else {
        console.log([items.join(" -> ")]);
    }
}

// insert after a given node

LinkedList.prototype.insertAfter = function(prevNode, data){
    if(!prevNode){
        console.log("Prev node can not be null");
        return;
    }

    let newNode = new Node(data, prevNode.next);
    prevNode.next = newNode;
}



