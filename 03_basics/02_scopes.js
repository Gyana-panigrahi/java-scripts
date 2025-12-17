//scopes

//1.Global scope
let a=50
function test(){
    console.log(a);
}

test();//50
console.log(a);//150

//2.block scope =>{ }

if(true){
    const p=10;
    console.log(p);
    //var q=50;
}
//console.log(p);=>can't access outside of the scope
//console.log(q);

//3.Function scope

function demo(){
    const x=200;
    console.log(x);
    
}
demo();
//console.log(x); =>can't access the outside of the function

//4. Block chain
console.log("Block chain");

let p=100;
function one(){
    let q=200;
    function two(){
        let r=40;
        console.log(p);
        console.log(q);
    }
    two();
}
one();
//two() =>error

//Shadowing
if(true){
    const userName="Gyana";
    if(userName === "Gyana"){
        const website=" youtube";
        console.log(userName +website);

    }
    //console.log(website); => can't access outside of the loop
    
}
//console.log(userName);

//SHADOWING -2
let num1=50;
if(true){
    let num1=100;
    console.log("inside:",num1); 
}
console.log("outside:",num1);


//++++++++++++++++++++++ Interesting  ++++++++++++++++++++++++++++++++++++

console.log(addOne(6));// 7 without any error
function addOne(num){
    return num+1;
}
console.log(addOne(5));//6 without any error

//console.log(addTwo());// hoisting error
const addTwo=function addtwo(num){
    return num+2;
}
console.log(addTwo(5));





