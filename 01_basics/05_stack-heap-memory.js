// Primitive data types are stored by value (copy is assigned, not reference)

//Stack (Primitive), Heap (Non-primitive)
let a = 10;
let b = a;   // value of 'a' is copied to 'b'

b = 20;

console.log(a); // 10
console.log(b); // 20


// Non-primitive data types (objects) are stored by reference

let user1 = {
    name: "Gyana",
    age: 24
};

let user2 = user1; 
// user2 holds the same reference (memory address) as user1

user2.name = "Sai";

console.log(user1.name); // Sai
console.log(user2.name); // Sai
