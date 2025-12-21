//falsy example:-
// false, 0, -0, null, undefined, "", Bigint 0n, NaN
if(0){
    console.log("True")
}else{
    console.log("false");
}
//Truthy values
//true,"0","false"," ",[],{},function(){}

//Empty Array
if([]){
    console.log("Truthy");
}else{
    console.log("falsy");
}
//Empty Object
if({}){
    console.log("Truthy");
}else{
    console.log("falsy");
}
//String "false"
if("false"){
    console.log("Truthy")
}else{
    console.log("falsy")
}
//Empty Array
const arr=[];
if(arr.length === 0 ){
  console.log("array is empty");
}
//Empty Object
const obj={};
if(Object.keys(obj).length === 0){
    console.log("Object is Empty");
}
//Empty String
const str="";
if(!str || str.length === 0){
    console.log("String is Empty");
}

//Nullish Coalescing Operator (??): null undefined
// => it return the right hand operand when left hand operand is null or undefined
// syntax : val1 ?? val2

// null
let name=null;
let userName=name ?? "Guest";
console.log(userName);
// undefined
let age;
console.log(age ?? 18);//18

//fuction
function greet(name){
    let finalName=name ?? "Gyana";
    console.log(finalName);
}
greet("Sai");//sai
greet(null);//Gyana
greet(undefined);//Gyana



// || (logical or)
let count = 0;
console.log(count || 10);//10

// ?? nullish coalescing operator
let counts=0;
console.log(counts ?? 10);//0

// empty string ("")
let strs="";
console.log(strs || "guest");//guest

// nullish (??)
let strs1="";
console.log(strs1 ?? "guest");//""

//Ternary operator

//syntax: 
// condition ? true : false;

const maggie=60;
maggie <= 40 ? console.log("maggie is less than 40") : console.log
("maggie is greater  than 40");

let ages=20;
let result= ages >=18 ? "Adult" : "Minor";
console.log(result);

let marks=80;

let grade = marks >= 90 ? "A" :
            marks >= 75 ? "B" :
            marks >= 60 ? "C" : "fail";

console.log(grade);

//using if else
let num=20;
if(num % 2 === 0){
    console.log("Even");
}else{
    console.log("odd");
}

//using ternary operator
let num1=55;
let evenOdd= num1 % 2 === 0 ? "Even" : "odd";
console.log(evenOdd);



















