const score=400;
console.log(score);

const balance=new Number(100);
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(2));//return in string
const otherNumber=12.678;
console.log(otherNumber.toPrecision(3));

const hundreds=100000;
console.log(hundreds.toLocaleString());//us number system return
console.log(hundreds.toLocaleString("en-IN"));//indian number system

//++++++++++++++++++++++++ MATHS ++++++++++++++++++++++++++++++++++++

console.log(Math);
//return +ve value only
console.log(Math.abs(-4));
//Math.round() => return nearest integer
console.log(Math.round(4.5));
//Math.ceil() =>return higher value
console.log(Math.ceil(4.1));
//Math.floor() =>return loewr value
console.log(Math.floor(4.6));
//max and min
console.log(Math.min(4,6,8,7,6));
console.log(Math.max(10,20,50,40,30));
//Math.pow() =>return power
console.log(Math.pow(2,3));// 2 to power 3 = 8
//modern form
console.log(2**3);
//Math.sqrt() =>return square root
console.log(Math.sqrt(16));//4
//Math.random()
console.log(Math.random());//return value between 0 to 1
console.log(Math.random()*10);//return value between 0 to 9.999
console.log (Math.floor(Math.random()*10));//0-9
console.log(Math.floor(Math.random()*10)+1);//1-10

//using max and min with random()
let min=5;
let max=15;

console.log(Math.floor(Math.random()*(max-min+1))+min);















