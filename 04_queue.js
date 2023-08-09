class Queue{
    collection = [];

    print(){
        console.log(this.collection)
    }

    enqueue(el){
        this.collection.push(el)
    }

    dequeue(){
        return this.collection.shift()
    }

    front(){
        return this.collection[0]
    }

    size(){
        return this.collection.length;
    }

    isEmpty(){
        return this.collection === 0
    }

}

let q  = new Queue()
q.enqueue('a')
q.enqueue('b')
q.enqueue('c')
q.enqueue('d')
q.enqueue('e')
q.print()
q.dequeue()
q.dequeue()
q.print()
console.log(q.front())
console.log(q.isEmpty())