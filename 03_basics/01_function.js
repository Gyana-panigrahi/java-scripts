
function sayMyName(){
console.log("G");
console.log("Y");
console.log("A");
console.log("N");
console.log("A");
    
};
sayMyName();

//1.function with No parameter

function greet(){
    console.log("Hello Gyana");
}
greet();

//2.function with parameter and argument
function multiply(a,b){//parameter
    return a*b;
}
console.log(multiply(5,10));//argument

//3.Default Parameter
function greeting(name="Guest"){
    console.log("Hello",name);
    
}
greeting();//Hello Guest
greeting("Gyana");//Hello Gyana

//example
function addNumber(number1,number2){//parameter
    //console.log(number1+number2);
    // const result=number1+number2;
    // return result;
    return number1+number2;

};
const result=addNumber(100,200);
console.log("result: ",result);

console.log(addNumber(4 ,2));//values=argument

//using backticks
function loginUserMessage(userName){
    return `${userName} just logged in`;
}
console.log(loginUserMessage("Gyana"));
console.log(loginUserMessage(" "));
console.log(loginUserMessage());//undefined

// ... rest operator
function calculaterCartPrice(val1,val2,...num1){
    return num1;
}

console.log(calculaterCartPrice(5,100,200));

//function using object
const user={
    userName:"Gyana",
    price:"199"
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.userName} 
    and price is ${anyObject.price}`);
}
handleObject(user);
handleObject({
    userName:"Sam",
    price:399
})

//function using array
const myNewArray=[100,200,300,400,500];

function returnSecondValue(getArray){
    return getArray[1];
}

console.log(returnSecondValue(myNewArray));

console.log(returnSecondValue( ["Gyana","sam","tom"] ));







