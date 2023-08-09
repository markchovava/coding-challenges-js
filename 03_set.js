class mySet{
    collection = []

    has(el) {
        return (this.collection.indexOf(el) !== -1)
    }

    values() {
        return this.collection
    }

    add(el){
        if(!this.has(el)){
            this.collection.push(el)
            return true;
        }
        return false;
    }

    remove(el){
        if(this.has(el)){
            index = this.collection.indexOf(el)
            this.collection.splice(index, 1)
            return true
        }
        return false
    }

    size(){
        return this.collection.length
    }

    union(otherSet){
        let unionSet = new Set()
        let firstSet = this.values();
        let secondSet = otherSet.values();
        firstSet.forEach((e) => {
            unionSet.add(e)
        })
        secondSet.forEach((e) => {
            unionSet.add(e)
        })
        return unionSet
    }

    intersection(otherSet){
        let intersectionSet = new Set();
        let firstSet = this.values();
        firstSet.forEach((e) => {
            if(otherSet.has(e)){
                intersectionSet.add(e);
            }
        })
        return intersectionSet;
    }

    difference(otherSet) {
        let differenceSet = new Set()
        let firstSet = this.values();
        firstSet.forEach((e) => {
            if(!otherSet.has(e)){
                differenceSet.add(e)
            }
        })
        return differenceSet;
    }

    subset(otherSet){
        let firstSet = this.values();
        return firstSet.every((value) => {
            return otherSet.has(value)
        })
    }

}

let setA = new mySet()
let setB = new mySet()
setA.add('a')
setB.add('b')
setA.add('b')
setB.add('c')
setA.add('c')
setB.add('d')
setB.add('e')
console.log(setB.subset(setA))
console.log(setA.union(setB))
console.log(setA.intersection(setB))
console.log(setA.difference(setB))