const organiseBalls = (a, b) => {
    let b1 = []
    let b2 = []
    
    for(let i = 0; i < a.length; i++){
        if( a[i] == 1){
            b1.push(a[i])
        }
        if( a[i] == 2){
            b2.push(a[i])
        }
    }

    for(let i = 0; i < b.length; i++){
        if( b[i] == 1){
            b1.push(b[i])
        }
        if( b[i] == 2){
            b2.push(b[i])
        }
    }

    let res = []
    res.push(b1)
    res.push(b2)

    return res

}

let a = [1,2,1,2,1,2,2,1]
let b = [2,2,2,1,2,1,1]
let c = organiseBalls(a,b)

console.log(c)
