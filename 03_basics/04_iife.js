// Immediately Invoked Function Expression (IIFE)

// 1. Normal Function
function test(){
    console.log("Normal Function called");
}
test(); // manually called

// 2. IIFE using Normal Function
(function test1(){
    console.log("IIFE function called");
})(); // automatically executed

// 3. IIFE using Arrow Function
(() => {
    console.log("Arrow function called");
})(); // automatically executed

// 4. Arrow IIFE with parameter
((name) => {
    console.log(`Hello ${name}`);
})("Gyana");
