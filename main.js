let readlineSync = require('readline-sync');
 let number = readlineSync.question("Give number");

  number = parseFloat(number);

  total=0;

  for (let i=0; i<99; i++){
    
    total=total + (i+1)
    totalAmount=total+number
  }
    average=totalAmount/100
  console.log(average)