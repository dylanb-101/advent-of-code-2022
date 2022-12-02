//day 1
const fs = require('fs');
const calories = fs.readFileSync('./day1/calories.txt').toString();

const caloriesArray = calories.split('\n\n');
let total = 0;

for(eCal in caloriesArray) {
    
    let insideTotal = 0;

    for(iCal in caloriesArray[eCal].split('\n')) {

        let cals = parseInt(caloriesArray[eCal].split('\n')[iCal]);

        insideTotal += cals;

    }

    if(insideTotal > total) total = insideTotal
}
console.log(total);