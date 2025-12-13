//Data types in js
//primitive data types-single value store

//1.Number=>integer+decimal
//2.bigint=> large number biger then integer value
//3.String=>character text ""
//4.boolena=true/fale
//5.undefined=only variable declare but value not assigned
//6.null=>intentionaly value not assigned
//7.symbol= create unique id
let number=123456; 
let n=25.45;
let bigint=56565656555656544654;
let name="gyana";
let isvalid=false;
let x;
let num=null;
const id=Symbol("456");
const anotherId=Symbol("456");
console.log(id === anotherId);
 
console.log(number);
console.log(typeof number);
console.log(typeof n);
console.log(typeof bigint);
console.log(typeof name);
console.log(typeof isvalid);
console.log(typeof x);
console.log(typeof num);
console.log(typeof id);

//2.Non-primitive /Reference Datatypes
//1.object=>key value pair
let user={
    name:"Gyana",
    age:24
};

//2.Array
let nums=[10,20,30,40,50];

//3.Function
const myFunction=function(){
    console.log("Hello World");
}
console.log(typeof(null));//object
console.log(typeof(undefined));//undefined



