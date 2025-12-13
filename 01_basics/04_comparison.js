console.log(2>1);
console.log(2>=1);
console.log(2 == 1);
console.log(2!=1);

console.log("2">1);
console.log("02">1);


console.log(null > 0);
console.log(null == 0);
console.log(null >= 0);

console.log(undefined > 0);
console.log(undefined < 0);
console.log(undefined == 0);

// (===) strict equality

console.log("2"== 2);
console.log("2" === 2);
//"2" == 2 --> first convert ,then compare
//"2" === 2 --> direct compare(type+value)

/*

Expression	Result	Reason
"2" == 2	true	string → number
"2" === 2	false	type mismatch
 2 === 2	    true	same type & value

*/







