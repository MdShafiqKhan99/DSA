class Stack {
    constructor(){
        this.stack = [];
    }

    push(data){
        this.stack.push(data);
    }

    pop(){
        this.stack.pop();
    }

    size(){
        return this.stack.length;
    }

    clear(){
        this.stack = [];
    }

    peek(){
        if(this.isEmpty()){
            console.log("Stack is Empty");
            return;
        }
        return this.stack[this.stack.length - 1];
    }

    printStack(){
        let str = "";
        for (let i = 0; i < this.stack.length; i++) {
            str += this.stack[i] + "\n";
        }
        return str;
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    contains(item){
        return this.stack.includes(item);
    }

    reverse(){
        this.stack.reverse();
    }
}

let newStack = new Stack();

newStack.push(10)
newStack.push(15)
newStack.push(20)
console.log(newStack.printStack());

newStack.pop();
console.log(newStack.printStack());

