

let letters = []

let word = 'racecar';

let rword = '';

for (let i = 0; i < word.length; i++){
    letters.push(word[i]);
}

for (let i = 0; i < word.length; i++){
    rword += letters.pop(word[i]);
}

if (rword === word){
    console.log(word + " is a palindrome")
} else {
    console.log(word + " is NOT a palindrome")
}