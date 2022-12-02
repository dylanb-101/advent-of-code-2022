//day 1
const fs = require('fs');
const calories = fs.readFileSync('./day1/calories.txt').toString();

const caloriesArray = calories.split('\n\n');
let total1 = 0;
let total2 = 0;
let total3 = 0;
let total = 0;

for(let i = 0; i < 3; i++) {

    for(eCal in caloriesArray) {
    
        let insideTotal = 0;

        for(iCal in caloriesArray[eCal].split('\n')) {

            let cals = parseInt(caloriesArray[eCal].split('\n')[iCal]);

            insideTotal += cals;

        }



        if(insideTotal > total1 && i == 0) {
            total1 = insideTotal;
        } else if(insideTotal > total2 && insideTotal != total1 && i == 1) {
            total2 = insideTotal;
        } else if(insideTotal > total3 && insideTotal != total1 && insideTotal != total2 && i == 2){
            total3 = insideTotal;
        }
    }
}
total = total1 + total2 + total3;

console.log(total);