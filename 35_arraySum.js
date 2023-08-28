const arrSum = (arr) => {
    let result = arr.reduce((acc, curr) => {
        return acc + curr
    }, 0)
    return result
}

const list = [1,2,3,-4,5]
const process = arrSum(list)
console.log(process)