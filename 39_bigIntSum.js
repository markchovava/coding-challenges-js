const bigSum = (arr) => {
    arr_result = arr.reduce((acc, curr) => (acc + curr), 0)
    return arr_result
}

let arr = [1267678678622122344, 788768464644,6726273, 487687687,68768763468,23764827]
let a = bigSum(arr)
console.log(a)