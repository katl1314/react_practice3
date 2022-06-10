class Stack<T>{
    private data2:T[] = [];
    constractor(){}

    push(item:T) : void{
        this.data2.push(item);
    }

    pop() : T{
        return this.data2.pop();
    }

    showList() : void{
        console.log(this.data2.length);
        for(let i=0; i < this.data2.length; i++){
            console.log(this.data2[i]);
        }
    }
}

const stack = new Stack<string>();
stack.push("Happy");
stack.push("Murdoc");
stack.push("Hambugger");

stack.showList();

