const balancedDigit = (k) => {
    const sums = []

    for(let i = 0; i < k; i++){
        sums.push(sums[i-1] + i)
    }

    let leftSum = 0;
    let rightSum = sums[k]

    for(let i = k; i >= 1; i--){
        if(leftSum === rightSum){
            return i;
        }
        leftSum += i
        rightSum -= i
    }

    return -1
}

const digit = 2
const process = balancedDigit(digit)
console.log(process)


