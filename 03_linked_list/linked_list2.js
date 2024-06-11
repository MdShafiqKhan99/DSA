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


// insert at the beginning
LinkedList.prototype.insertAtBeginning = function(data){
    const  newNode = new Node(data);
    if(!this.head){
        this.head = newNode;
        return;
    } 
    let currentNode = this.head;
    this.head = newNode;
    this.head.next = currentNode;
}

// insert at the end
LinkedList.prototype.insertAtEnd = function(data){
    const newNode = new Node(data);

    if(!this.head){
        this.head = newNode;
        return;
    }

    let lastNode = this.head;

    while(lastNode.next){
        lastNode = lastNode.next;
    }
    
    lastNode.next = newNode;

}

// insert after a node
LinkedList.prototype.insertAfter = function(prevNode, data){
    if(!prevNode){
        return console.log("Prev node cannot be null");
    } 

    let newNode = new Node(data, prevNode.next);
    prevNode.next = newNode;
}

// print linked list

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

// delete the first node
LinkedList.prototype.deleteFirstNode = function(){
    if(!this.head){
        return console.log("linked list is empty");
    }
    this.head = this.head.next;
}

// delete the last node

LinkedList.prototype.deleteLastNode = function(){
    if(!this.head){
        return console.log("linked list is empty");
    }

    if(!this.head.next){
        this.head = null;
        return;
    }

    let secondLast = this.head;

    while(secondLast.next.next){
        secondLast = secondLast.next;
    }

    secondLast.next = null;
}

// delete node by key

LinkedList.prototype.deleteByKey = function(key){
    // check if list is empty
    if(!this.head){
        return console.log("list is empty");
    }

    // check if there is only one node
    if(this.head.data === key){
        this.head = this.head.next;
    }

    let current = head;

    while(current.next){
        if(current.next.data === key){
            current.next = current.next.next;
            return;
        }
        current = current.next;
    }

    current.next = null;
}
