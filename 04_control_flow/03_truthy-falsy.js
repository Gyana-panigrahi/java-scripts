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
}

const userEmail=[];
if(userEmail){
    console.log("Got user Email");
}else{
    console.log("don't have user email");
}

if(userEmail.length ===0 ){
    console.log("Array is Empty");
}
const emptyObj={};
if(Object.keys(emptyObj).length===0){
    console.log("object is empty");
    
}