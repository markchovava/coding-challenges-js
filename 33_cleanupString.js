const cleanupString = (str) => {
    let letterCounts = {};
    for(const letter of str){
        if(!letterCounts.hasOwnProperty(letter)){
            letterCounts[letter] = 0;
        }
        letterCounts[letter]++
    }
    
    let lettersSubArray = []

    for( const [letter, count] of Object.entries(letterCounts)){
        const subArray = [letter, count]
        lettersSubArray.push(subArray)
    }

    let resultArray = []

    for(let i = 0; i < lettersSubArray.length; i++){
        if(lettersSubArray[i][1] > 3){
            let value = ''
            for(let j = 0; j < 3; j++){
                value += lettersSubArray[i][0]
            }
            resultArray.push(value)
        } else{
            let value = ''
            let length = parseInt(lettersSubArray[i][1])
            for(let j = 0; j < length; j++){
                value += lettersSubArray[i][0]
            }
            resultArray.push(value) 
        }
    }
    
    let result = resultArray.join('')

    return result

}

const str = 'tuuuurrrriiinngggppfff'
let res = cleanupString(str)
console.log(res)