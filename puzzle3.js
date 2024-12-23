const fs = require('fs');
const path = require('path');

function readInput() {
  const filePath = path.join(__dirname, 'puzzle3Input.text');
  const data = fs.readFileSync(filePath, 'utf8');
  
  return data;
}

const input = readInput();
let filteredStringToArray = [];
function filterMulti(input) {
    filteredStringToArray = input.match(/mul\((\d+),(\d+)\)|do\(\)|don't\(\)/ig);
    //console.log(filteredStringToArray);
    return filteredStringToArray;
}
let moveToArray = true;
function dosAndDonts(filteredStringToArray) {
    let partTwoArray=[];
    for (let i = 0; i < filteredStringToArray.length; i++) {
       
        if (/mul\((\d+),(\d+)\)/ig.test(filteredStringToArray[i]) && moveToArray) {               
            let cleanItem = filteredStringToArray[i].replace('mul(', '').replace(')', '');       
            let multiplyThese = cleanItem.split(',');       
            let product = multiplyThese[0] * multiplyThese[1];       
            partTwoArray.push(product);            
        } else if (/do\(\)/ig.test(filteredStringToArray[i])) {
            moveToArray = true;            
        } else if (/don't\(\)/ig.test(filteredStringToArray[i])) {
            moveToArray = false;            
        }
        }        
         const sum = partTwoArray.reduce((acc, num) => acc + num, 0);
    console.log(sum);
    return sum;
  
}
dosAndDonts(filterMulti(input));