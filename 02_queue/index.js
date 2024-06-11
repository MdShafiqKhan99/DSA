class Queue {
    constructor(){
        this.queue = [];
    }

    enqueue(item){
        this.queue.push(item);
    }

    dequeue(item){
        this.queue.shift(item);
    }

    size(){
        return this.queue.length;
    }

    clear(){
        this.queue = [];
    }

    peek(){
        if(this.isEmpty()){
            console.log("Queue is empty");
            return;
        }
        return this.queue[0];
    }

    isEmpty(){
        return this.queue.length === 0;
    }

    contains(item){
        return this.queue.includes(item);
    }

    reverse(){
        this.queue.reverse();
    }

    printQueue(){
        let str = "";
        
        for (let i = 0; i < this.queue.length; i++) {
            str += this.queue[i];
        }
        return str;
    }


}