//if :<,>,<=,>=,==,===,!=,!==
const temp=41;

if(temp<50){
    console.log("temperature less than 50");
}else{
  console.log("temperature greater than 50");
}


//2.scope basis
const score=200;
if(score>100){
    let power="fly";
    console.log(`User powr ${power}`);
}
// console.log(`User power ${power}`); =>power is outside of the scope

//3.Shorthand Notation (not recomanded)
const balance=1000;
if(balance>500) console.log("test"),
console.log("test 2");

//3.nesting:
const balances=1000;
if(balances<500){
    console.log("less than 500");
}else if(balance<750){
    console.log("less than 500");
}else if(balances<900){
    console.log("less than 900");
}else{
    console.log("less than 1200")
}

//4.multiple 
const userLoggedIn=true;
const debitCard=true;
const loggedInFromGooge=false;
const loggedInFromEmail=true;

if(userLoggedIn && debitCard && 2==2){
    console.log("Allow to buy course");
}
if(loggedInFromEmail || loggedInFromGooge){
    console.log("user Logged in");
}
