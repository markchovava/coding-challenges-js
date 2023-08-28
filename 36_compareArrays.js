/* 
    Compare the Triplets
 
*/

const compareArrays = (a,b) => {
    let length = a.length
    let i = 0
    let result = []
    let a_result = []
    let b_result = []
    let a_final = 0
    let b_final = 0
    while (i < length){
        if(a[i] > b[i]){
            a_result.push(1)
            b_result.push(0)
        } else if( a[i] < b[i] ){
            a_result.push(0)
            b_result.push(1)
        } else{
            a_result.push(0)
            b_result.push(0)
        }
        i++
    }

    a_final = a_result.reduce((acc, curr) => {
        return acc + curr
    }, 0)
    b_final = b_result.reduce((acc, curr) => {
        return acc + curr
    }, 0)

    result.push(a_final)
    result.push(b_final)

    return result
    
}

let Mary = [4,3,0]
let James = [4,2,3]
let res = compareArrays(Mary, James)
console.log(res)