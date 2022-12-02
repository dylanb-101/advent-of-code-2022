//day 2
const fs = require('fs');
const input = fs.readFileSync('./day2/input.txt').toString().split('\n');

const setType = (move) => {
    if(move == 'A' || move == 'X') return 'Rock'
    else if (move == 'B' || move == 'Y') return 'Paper'
    else if (move == 'C' || move == 'Z') return 'Scissors'
}

const userWon = (opMove, uMove) => {
    if(opMove == 'Rock' && uMove == 'Paper') {
        return true
    } else if(opMove == 'Paper' && uMove == 'Scissors') {
        return true 
    } else if(opMove == 'Scissors' && uMove == 'Rock') {
        return true
    } else {
        console.log("h")
        return false
    }
}



const moveScore = (uMove) => {
    if(uMove == 'Rock') return 1
    else if(uMove == 'Paper') return 2
    else if(uMove == 'Scissors') return 3
}

let totalScore = 0;

for(game in input) {
    
    const opponentMove = setType(input[game][0]);
    const userMove = setType(input[game][2]);

    let gameScore = 0;

    gameScore += moveScore(userMove)

    if(userWon(opponentMove, userMove)) {
        console.log('e')
        gameScore += 6;
    } else if(opponentMove == userMove) {
        console.log("hello!")
        gameScore += 3
    }

    totalScore += gameScore

}

console.log(totalScore)


