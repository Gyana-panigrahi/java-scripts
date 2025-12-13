//implicit Conversion=>Automatically convert

let a="5";
let b=3;
console.log(a+b);// op=53 
console.log(typeof(a+b));//string =>because (+) concatenate those two number

let c="5";
let d=3;
console.log(5-3);//2
console.log(typeof(5-3));//Number =>because (-) only use in number

//Truthy & Falsy
console.log(Boolean(0));//false
console.log(Boolean(1));//true

console.log(Boolean(""));//false
console.log(Boolean("Gyana"));//true

console.log(Boolean(null));//false
console.log(Boolean(undefined));//false

//Explicit Conversion=>manually conversion

//String to Number

let num="20";//String
let stringNum=Number(num);
console.log(typeof (stringNum));//number
console.log(stringNum);//20

let float="2.5";
let floatNumber=Number(float);
console.log(typeof(float));//string
console.log(typeof(floatNumber));//number
console.log(floatNumber);//2.5


let mix="10xy";
let mixNumber=Number(mix);
console.log(typeof(mix));//string 
console.log(typeof(mixNumber));//number
console.log(mixNumber);//NaN

//parseInt
console.log(parseInt("10"));//10
console.log(parseInt("10.5"));//10
console.log(parseInt("10abc"));//10

//parseFloat
let floatNum="10.5";
let stringFloat=parseFloat(floatNum);
console.log(typeof(floatNum));//string
console.log(typeof(stringFloat));//number
console.log(stringFloat);//10.5

//Number to String
let num1=756;
let numString=String(num1);
console.log(typeof(num1));//number
console.log(typeof(numString));//String
console.log(numString);//756

//String/Number to Boolean  
console.log(Boolean(10))//true
console.log(Boolean(0));//false
console.log(Boolean(""));//false
console.log(Boolean("Gyana"));//true

//Boolean to Number

let bool1=true;
let boolNum=Number(bool1);
console.log(typeof(bool1));//bollean
console.log(typeof(boolNum));//number
console.log(boolNum);//1

let bool2=false;
let boolNum2=Number(bool2);
console.log(typeof(bool2));//boolean
console.log(typeof(boolNum2));//number 
console.log(boolNum2);//0

//special case
let num3=null;
let nullNum=Number(num3);
console.log(typeof(num3));//null
console.log(typeof(nullNum));//number
console.log(nullNum);//0

let num4=undefined;
let numUndefined=Number(num4);
console.log(typeof(num4));//undefined
console.log(typeof(numUndefined));//number
console.log(numUndefined);//NaN

let num5="";
let stringNumber=Number(num5);
console.log(typeof(num5));//string
console.log(typeof(stringNumber));//number
console.log(stringNumber);//0

let num6="Gyana";
let stringNumbers=Number(num6);
console.log(typeof(num5));//string
console.log(typeof(stringNumbers));//number
console.log(stringNumbers);//NaN


//*********************OPERATIONS****************************************
console.log(2+2);
console.log(2-2);
console.log(2*3);
console.log(2**3);
console.log(4/2);
console.log(4%2);

console.log("2"+2);//22
console.log(2+"2");//22
console.log("1"+2+3);//123
console.log(1+2+"3");//33

console.log(+true);
console.log(+"");

let number1,number2,number3;
number1=number2=number3=2+2; // not recomanded for  this type 

let gameCounter=100;
let assign=gameCounter++;//post incerement
let assigns=++gameCounter;//pre incerement
console.log(gameCounter);//101
console.log(assign);//100
console.log(gameCounter);//102
console.log(assigns);//102


