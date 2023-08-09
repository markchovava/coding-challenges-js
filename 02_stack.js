class Stack {
    count = 0
    storage = {}

    push = (value) => {
        this.storage[this.count] = value
        this.count++;
    }

    pop = () =>{
        if(this.count === 0){
            return undefined
        }
        this.count--;
        let result = this.storage[this.count]
        delete this.storage[this.count]
        return result;
    }

    size = () => {
        return this.count
    }

    peek = () => {
        return this.storage[this.count-1]
    }

    getAll = () => {
        return this.storage
    }
}

let myStack = new Stack()
myStack.push(1)
myStack.push(2)
myStack.push(3)
myStack.push(4)
console.log(myStack.getAll())
console.log(myStack.size())
myStack.pop()
console.log(myStack.getAll())
console.log(myStack.peek())


