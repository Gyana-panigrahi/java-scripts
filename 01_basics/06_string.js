//String =>collectionn of text/charcter

let name="Gyana";// double quotes
let city='Bhubaneswar';//single quotes
let msg=`Hello Bhai`;//backticks

//1.Data types:
let str="Gyana";
console.log(typeof(str));

//2.String immutable
let str1="Hello";
str1[0]="h";
console.log(str1);//Hello

//3.String length
let name1="Gyana";
console.log(name1.length);

//4.String indexing
let name2="Gyana";
console.log(name2[0]);//G
console.log(name2[1]);//y
console.log(name2[2]);//a
console.log(name2[3]);//n
console.log(name2[4]);//a

//5.String methods
let str3="Gyana";
console.log(str3.toUpperCase());
console.log(str3.toLowerCase());

//a-trim() =>remove extra spaces starting and ending
let msg1="   Hello Bhai    ";
console.log(msg1.trim());

//b-substring()
let strs="javascript";
console.log(strs.substring(0,4));//0-start,4-end index
console.log(strs.substring(0));//0-end of the index
//console.log(strs.substring(-6));

//c-slice()
let strs1="javascript"
console.log(strs1.slice(-6));//end to 6th index //op-script 
console.log(strs1.slice(-6,2));//10-6=4 start(4)>end(2) empty string
console.log(strs1.slice(-6,8));//scri 

//d-replace()
let names="Hello Bhai";
console.log(names.replace("Bhai","Gyana"));//Hello Gyana

const url="https://google.com/gyana%20panigrahi";
  console.log(url.replace("%20","-"));
 

//e-includes()
let str5="I Love Javascript";
console.log(str5.includes("Love"));
console.log(str5.includes("python"));

//f-split() =>It breaks a string into an array based on the given separator
let fruits="apple,banana,mango";
let arr=fruits.split(",");// Wherever a comma (,) is found, split the string there
console.log(arr);
let fruit="apple-banana-mango";
let word=fruit.split("-");// Wherever a hyphen (-) is found, split the string there
console.log(word);


//6.concatenation
let a="Hello";
let b="Bhai";
console.log(a+" "+b);

//best way using backticks(` `) (temlee literals)
let naam="Gyana";
let age=24;
console.log(`My name is ${naam} and my age is ${age}`);

//== vs ===
console.log("2"==2);//true convert to number
console.log("2"===2);//false => type check



























