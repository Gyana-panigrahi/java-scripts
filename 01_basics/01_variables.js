const accountId=756045;
let accountEmail="gyana@gmail.com";
var accountPassword="12345";
accountCity="bhubaneswar";
let accountState;

//accountId=2 // not allowed
console.log(accountId);

accountEmail="panigrahi@gmail.com";
accountPassword="751013";
accountCity="bls";
console.table([accountId,accountEmail,accountPassword,accountCity,accountState]);
/*
prefered not to use var
beacuse of issue in block scoope and functional scope

*/
// ex-1
if(true){
    var a=10;
}
console.log(a);//parenthesis ke bahar bhi print ho gaya

if(true){
    let b=20;
}
// console.log(b);  ----> answer b not defined

// ex-2

var name="Gyana";
var name="Sai";
console.log(name);// override the variable
 
let n="Gyana";
// let n="Sai";
// console.log(n)  --->variable already declared

// ex--3
console.log(p);
var p=100; // undefined hoisting

//console.log(q);
// let q=1000;  cannot accesss before initialization




