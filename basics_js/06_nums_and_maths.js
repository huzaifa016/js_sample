const score = 400
console.log(score);

const balance = new Number (100)
console.log(balance);

console.log(balance.toString().length);
console.log( balance.toFixed(2));      // 2 specifies the numbers after decimal point

const otherNumber = 28.8342
console.log(otherNumber.toPrecision(2));

const hundreds = 1000000
console.log(hundreds.toLocaleString("en-IN")); 

// +++++++++++++++++++++ Maths ++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-6));
console.log(Math.round(4.6));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.6));
console.log(Math.min(4, 6, 1, 9, 2));
console.log(Math.max(4, 6, 1, 9, 2));

console.log(Math.random());   //in this random numbers lies between 0 to 1
console.log((Math.random() * 10) ); // here we can get 0 as well 
console.log((Math.random() * 10) + 1 ); // to avoid 0 as output we do + 1

const min = 10
const max = 20

console.log(Math.floor (Math.random() * ( max - min + 1)) + min );


// max-min gives range b/w 10 and 20 , + 1 is to avoid 0
// + min tells that atleast minimum number shoud b 10 as o/p
// floor is to get roundof number 