const fs = require('fs');
const path = require('path');

function readInput() {
  const filePath = path.join(__dirname, 'puzzle3Input.text');
  const data = fs.readFileSync(filePath, 'utf8');
  
  return data;
}

const input = readInput();


function filterMulti(input) {
    filteredStringToArray = input.match(/mul\((\d+),(\d+)\)/ig);
    //console.log(filteredStringToArray);
    return filteredStringToArray;
}

let mulArray = filterMulti(input);
let cleanArray = cleanAndTotal(mulArray);
function cleanAndTotal(mulArray) {
    let totals = [];
    for (const item of mulArray) {
    let cleanItem = item.replace('mul(', '').replace(')', '');
    let multiplyThese = cleanItem.split(',');
    let total = multiplyThese[0] * multiplyThese[1];
    totals.push(total);
    //console.log(total);
    
    
}   
return totals;
}   
function addEverything(totals) {
    let total = 0;
    for (const item of totals) {
        total += item;
    }
    console.log(total);
    return total;
}

addEverything(cleanArray);