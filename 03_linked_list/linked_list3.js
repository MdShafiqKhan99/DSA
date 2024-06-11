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
LinkedList.prototype.insertAtBeginning = function(data) {

    const newNode = new Node(data);

    if(!this.head){
        this.head = newNode;
        return;
    }

    let nextNode = this.head;
    this.head = newNode;
    newNode.next = nextNode;
}


// insert at the end
LinkedList.prototype.insertAtEnd = function(data){
    const newNode = new Node(data);

    if(!this.head){
        this.head = newNode;
        return;
    }

    if(!this.head.next){
        this.head.next = newNode;
        return;
    }

    let lastNode = this.head;

    while(lastNode.next){
        lastNode = lastNode.next;
    }

    lastNode.next = newNode;
}

// insert after given node
LinkedList.prototype.insertAfter = function(prevNode, data){
    if(!prevNode){
        return console.log("Prev Node cannot be null");
    }

    const newNode = new Node(data, prevNode.next);
    prevNode.next = newNode;
}

// delete first node
LinkedList.prototype.deleteFirst = function(){
    if(!this.head){
        return console.log("List is empty");
    }

    this.head = this.head.next;
}


// delete last node 
LinkedList.prototype.deleteLast = function(){
    if(!this.head){
        return console.log("List is empty");
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


// delete by key
LinkedList.prototype.deleteByKey = function(key){
    if(!this.head){
        return console.log("List is empty");
    }

    if(this.head.data === key){
        this.head = this.head.next;
        return;
    }

    let current = this.head;

    while(current.next){
        if(current.next.data === key){
            current.next = current.next.next;
            return;
        }
        current = current.next;
    }

    current.next = null;

}


// reverse linkedlist

// LinkedList.prototype.reverse = function(){
//     if(!this.head){
//        return "list is empty";
//     }

//     let prev = null;
//     let next = null;
//     let current = this.head;

//     while(current){
//         next = current.next;
//         current.next = prev;
//         prev = current;
//         current = next;

//     }

//     this.head = prev;
// }

LinkedList.prototype.reverse = function() {
    
    let prev = null;
    let next = null;
    let current = this.head;

    while(current){
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    this.head = prev;

}



// print 
LinkedList.prototype.printList = function(){
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

const newList = new LinkedList();
newList.insertAtBeginning(10);
newList.insertAtBeginning(20);

newList.printList();
newList.reverse();
newList.printList();