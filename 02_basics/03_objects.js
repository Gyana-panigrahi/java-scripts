// ================================
// Singleton Object
// ================================
// Singleton means only one object instance
// Example: Object.create()

// ================================
// Object Literals
// ================================

// Create a Symbol
const mySym = Symbol("key1");

const jsUser = {
    name: "Gyana",
    "full name": "Gyanaswarup Panigrahi", // If key has space, write it in string

    // Using Symbol as a key
    // Square brackets are required
    [mySym]: "mykey1",   // real Symbol key

    // This is NOT a Symbol key
    // It is a normal string key
    mySym: "mysym",

    age: 23,
    location: "Bhubaneswar",
    email: "gyana@gmail.com",
    isLogin: false,

    // Array value
    lastLoginDay: ["Monday", "Saturday"]
};

// ================================
// Access object values
// ================================
console.log(jsUser);

// Dot notation
console.log(jsUser.name);

// Bracket notation
console.log(jsUser["name"]);

// Keys with space use bracket notation
console.log(jsUser["full name"]);

// Symbol key must be accessed using brackets
console.log(jsUser[mySym]);

// ================================
// Update object value
// ================================
jsUser.email = "bipun@gmail.com";

// ================================
// Object.freeze()
// ================================
// After freeze, object cannot be changed

// Object.freeze(jsUser);

jsUser.email = "panigrahi@gmail.com"; // will not change if frozen
console.log(jsUser);

// ================================
// Function inside object
// ================================
jsUser.greeting = function () {
    console.log("Hello Gyana");
};

// Function does not return anything, so undefined is printed
console.log(jsUser.greeting());

// ================================
// this keyword:=> this refers to the current object (jsUser)
// ================================
jsUser.greetingTwo = function () {
    console.log(`Hello js User ${this.name}`);
};

console.log(jsUser.greetingTwo());
