/* 
    DIAGONAL DIFFERENCE
*/


const diagDiff = (arr) =>{
    let d1_arr = []
    let d2_arr = []
    let i = 0
    while(i < arr.length){
        if(i == 0 || i == 4 || i == 8 ){
            d1_arr.push(arr[i])
        }
        if(i == 2 || i == 4 || i == 6 ){
            d2_arr.push(arr[i])
        }
        i++
    }

    let d1_result = d1_arr.reduce((acc, curr) => acc + curr)
    let d2_result = d2_arr.reduce((acc, curr) => acc + curr)
    return d1_result - d2_result
}

let a = [11, 21, 3, 1, 5, 6, 7, 8, 19]
let b = diagDiff(a)
console.log(b)