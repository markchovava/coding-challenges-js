
const isValid = (str) => {
    let arr = []
    for(let i = 0; i < str.length; i++){
        switch(str[i]){
            case '(': arr.push(')')
                break;
            case '[': arr.push(']')
                break;
            case '{': arr.push('}')
                break;
            default:
                if(str[i] !== arr.pop()) return false
        }
    }
    return arr.length === 0;
}


let str = '[][]{([])}';
let res = isValid(str)
console.log(res)