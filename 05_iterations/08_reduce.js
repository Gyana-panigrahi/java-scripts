const arr= [1, 2, 3, 4];
const result = arr.reduce( (acc,currVal) => {
    console.log(`acc: ${acc} curr: ${currVal}`);
    return acc + currVal;
},0);
console.log(result);

// shopping cart

const cart=[
    {item:"Bag", price:500},
    {item:"pen", price:50},
    {item:"Book", price:200},
];
const totalPrice = cart.reduce( (acc,curr) => {
    return acc + curr.price;
},0);
console.log(totalPrice);

//chaining
const nums=[1,2,3,4,5];

const total = nums
.map( (nums) => nums * 2)// 2,4,6,8,10
.filter( (nums) => nums > 5)// 6,8,10
.reduce( (acc,curr) => acc+curr ,0 ) ;// 6+8+10=24

console.log(total);

//reduce with array
const arrys=[1,2,3,4];
const doubled=arrys.reduce( (acc,curr) =>{
    acc.push(curr * 2);
    return acc;
}, [] );
 console.log(doubled);









 


