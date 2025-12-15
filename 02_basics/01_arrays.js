// Array declaration (3 different ways)
const myArr = [0, 1, 2, 3, 4, 5]; // Array literal (recommended)
const myArr2 = new Array(1, 2, 3, 4);// Array constructor
const myHeros = ["shaktiman", "marvel", "DC"]; // String array

// Accessing array elements using index
console.log(myArr[0]);      // 0th index value → 0
console.log(myHeros[1]);   // 1st index value → marvel

// ---------------- Array Methods ----------------

// push() → add element at the END of array
myArr.push(6);
myArr.push(7);
console.log(myArr);

// pop() → remove element from the END of array
myArr.pop();
console.log(myArr);

// unshift() → add element at the START of array
myArr.unshift(10);
console.log(myArr);

// shift() → remove element from the START of array
myArr.shift();
console.log(myArr);

// includes() → check value exists or not (true / false)
console.log(myArr.includes(5));

// indexOf() → returns index if value exists, else -1
console.log(myArr.indexOf(52));

// join() → convert array into STRING
const newArr = myArr.join();
console.log(newArr);          // "0,1,2,3,4,5,6"
console.log(typeof newArr);   // string

// Original array remains array
console.log(myArr);
console.log(typeof myArr);    // object

// ---------------- slice vs splice ----------------

// slice() → does NOT change original array
console.log("A ", myArr);
const myn1 = myArr.slice(1, 3);  // index 1 to 2
console.log(myn1);

// splice() → CHANGES original array
console.log("B ", myArr);
const myn2 = myArr.splice(1, 3); // remove 3 elements from index 1
console.log(myn2);

// After splice(), original array is modified
console.log("C ", myArr);
console.log(myn2);

