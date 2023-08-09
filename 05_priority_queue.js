class PriorityQueue{
    collection = []

    print(){
        console.log(this.collection)
    }

    enqueue(el){
        if(this.isEmpty()){
            this.collection.push(el)
        }else {
            let added = false;
            for(let i = 0; i < this.collection.length; i++){
                if(el[1] < this.collection[i][1]) {
                    this.collection.splice(i, 0, el)
                    added = true;
                    break;
                }
            }
            if(!added) {
                this.collection.push(el)
            }
        }
    }

    dequeue(){
        let value = this.collection.shift();
        return value[0];
    }

    front(){
        return this.collection[0]
    }

    size(){
        return this.collection.length
    }

    isEmpty(){
        return this.collection.length === 0
    }
}

let pq = new PriorityQueue()
pq.enqueue(['Mark', 2])
pq.enqueue(['Test', 5])
pq.enqueue(['James', 3])
pq.enqueue(['Lisa', 2])
pq.print()
console.log(pq.size())
console.log(pq.front())
console.log(pq.dequeue())
pq.print()