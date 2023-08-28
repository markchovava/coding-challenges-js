/* const climbBoard = (ranked, player) => {
    let r_set = new Set()
    for(r of ranked){
        r_set.add(r)
    }

    let r_array = Array.from(r_set)
    r_array.sort((a,b) => b - a)
    console.log(r_array)
    console.log(player)
    let result = []
    for(let i = 0; i < player.length; i++){
        for(let j = 0; j < r_array.length; j++){
            if(r_array[j] <= player[i]){
                result.push(j+1)
            }
        }
       
    }
    console.log(r_array.length)
    return result
} */


const climbBoard = (rankedScores, userScores) => {
    const scoreMap = new Map()
    let rank = 1
    for(const score of rankedScores){
        if(!scoreMap.has(score)){
            scoreMap.set(score, rank);
            rank++;
        }
    }

    const result = []
    for(const score of userScores){
        let currentRank = 1
        while(scoreMap.has(score) && scoreMap.get(score) <= currentRank){
            currentRank++
        }
        result.push(currentRank)
    }

    return result
}

let ranked  = [100, 90, 90, 80]
let player = [70, 80, 105]
let res = climbBoard(ranked, player)
console.log(res)